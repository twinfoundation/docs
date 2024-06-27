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

	console.debug("  Package Group", packageGroup);

	const packageGroupFilename = path.join(
		__dirname,
		"..",
		"docs",
		"pkgs",
		packageGroup.name,
		"package.json"
	);

	if (fileExists(packageGroupFilename)) {
		const packageContent = fs.readFileSync(packageGroupFilename, "utf-8");
		const groupJson = JSON.parse(packageContent);

		let combinedPackageContent = "";
		for (const pkg of groupJson.workspaces) {
			for (const packageType of packageGroup.types) {
				combinedPackageContent += buildPackageContent(
					packageGroup.name,
					packageType,
					pkg.replace(`${packageType}/`, "")
				);
			}
		}

		if (combinedPackageContent.length > 0) {
			content += `\n## ${groupJson.description}\n\n${combinedPackageContent}`;
		}
	} else {
		console.debug("      ! File not found", packageGroupFilename);
	}

	return content;
}

function buildPackageContent(packageGroup, packageType, packageName) {
	let content = "";

	console.debug("        Package", packageName);

	const packageFilename = path.join(
		__dirname,
		"..",
		"docs",
		"pkgs",
		packageGroup,
		packageType,
		packageName,
		"package.json"
	);

	if (fileExists(packageFilename)) {
		const packageContent = fs.readFileSync(packageFilename, "utf-8");
		const packageJson = JSON.parse(packageContent);

		content += `- [${packageJson.name}](pkgs/${packageGroup}/${packageType}/${packageJson.name.replace("@gtsc/", "")}/overview) - ${packageJson.description}\n`;
	} else {
		console.debug("        ! File not found", packageFilename);
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
			console.debug("Building Packages Overview");

			const repoContent = [];

			try {
				const reposFilename = path.join(__dirname, "..", "docs", "repos.json");
				const reposContent = fs.readFileSync(reposFilename, "utf-8");
				const reposJson = JSON.parse(reposContent);

				for (const repo of reposJson) {
					repoContent.push(buildGroupContent(repo));
				}

				console.debug("Writing Packages Overview");
				fs.writeFileSync(path.join(__dirname, "..", "docs", "pkgs.md"), buildContent(repoContent));
			} catch (err) {
				console.debug(err);
			}
		}
	};
};
