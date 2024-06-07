import path from "path";
import fs from "fs";

function buildContent(groupContent) {
	let content = `# Overview

This is the overview of the packages.
`;

	for (const group of groupContent) {
		content += group;
	}

	return content;
}

function buildGroupContent(packageGroup) {
	let content = "";

	process.stdout.write(`  Package Group: ${packageGroup}\n`);

	const packageGroupFilename = path.join(
		__dirname,
		"..",
		"docs",
		"pkgs",
		packageGroup,
		"package.json"
	);

	if (fileExists(packageGroupFilename)) {
		const packageContent = fs.readFileSync(packageGroupFilename, "utf-8");
		const groupJson = JSON.parse(packageContent);

		let combinedPackageContent = "";
		for (const pkg of groupJson.workspaces) {
			combinedPackageContent += buildPackageContent(packageGroup, pkg.replace("packages/", ""));
		}

		if (combinedPackageContent.length > 0) {
			content += `\n## ${groupJson.description}\n\n${combinedPackageContent}`;
		}
	} else {
		process.stderr.write(`      ! File not found: ${packageGroupFilename}\n`);
	}

	return content;
}

function buildPackageContent(packageGroup, pkg) {
	let content = "";

	process.stdout.write(`        Package: ${pkg}\n`);

	const packageFilename = path.join(
		__dirname,
		"..",
		"docs",
		"pkgs",
		packageGroup,
		"packages",
		pkg,
		"package.json"
	);

	if (fileExists(packageFilename)) {
		const packageContent = fs.readFileSync(packageFilename, "utf-8");
		const packageJson = JSON.parse(packageContent);

		content += `- [${packageJson.name}](pkgs/${packageGroup}/packages/${packageJson.name.replace("@gtsc/", "")}/overview) - ${packageJson.description}\n`;
	} else {
		process.stderr.write(`        ! File not found: ${packageFilename}\n`);
	}

	return content;
}

function fileExists(filename: string): boolean {
	try {
		const st = fs.statSync(filename);

		if (st.isFile()) {
			return true;
		}
	} catch {}
	return false;
}

module.exports = async function packageIndexPlugin() {
	return {
		name: "pkgs",
		async loadContent() {
			process.stdout.write("Building Packages Overview\n");

			const repoContent = [];

			try {
				const reposFilename = path.join(__dirname, "..", "docs", "repos.json");
				const reposContent = fs.readFileSync(reposFilename, "utf-8");
				const reposJson = JSON.parse(reposContent);

				for (const repo of reposJson) {
					repoContent.push(buildGroupContent(repo));
				}

				process.stdout.write("Writing Packages Overview\n");
				fs.writeFileSync(path.join(__dirname, "..", "docs", "pkgs.md"), buildContent(repoContent));
			} catch (err) {
				process.stderr.write(`${err}\n`);
			}
		}
	};
};
