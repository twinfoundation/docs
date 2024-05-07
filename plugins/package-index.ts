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

	console.log(`  Package Group: ${packageGroup}`);

	const packageGroupFilename = path.join(
		__dirname,
		"..",
		"docs",
<<<<<<< HEAD
		"ref",
=======
		"packages",
>>>>>>> next
		packageGroup,
		"package.json"
	);

	if (fileExists(packageGroupFilename)) {
		const packageContent = fs.readFileSync(packageGroupFilename, "utf-8");
		const groupJson = JSON.parse(packageContent);

		content += `\n## ${groupJson.description}\n\n`;

		for (const pkg of groupJson.workspaces) {
			content += buildPackageContent(packageGroup, pkg.replace("packages/", ""));
		}
	} else {
		console.error(`      ! File not found: ${packageGroupFilename}`);
	}

	return content;
}

function buildPackageContent(packageGroup, pkg) {
	let content = "";

	console.log(`        Package: ${pkg}`);

	const packageFilename = path.join(
		__dirname,
		"..",
		"docs",
<<<<<<< HEAD
		"ref",
		packageGroup,
		"packages",
=======
		"packages",
		packageGroup,
>>>>>>> next
		pkg,
		"package.json"
	);

	if (fileExists(packageFilename)) {
		const packageContent = fs.readFileSync(packageFilename, "utf-8");
		const packageJson = JSON.parse(packageContent);

<<<<<<< HEAD
		content += `- [${packageJson.name}](ref/${packageGroup}/packages/${packageJson.name.replace("@gtsc/", "")}/overview) - ${packageJson.description}\n`;
=======
		content += `- [${packageJson.name}](packages/${packageGroup}/${packageJson.name.replace("@gtsc/", "")}/overview) - ${packageJson.description}\n`;
>>>>>>> next
	} else {
		console.error(`        ! File not found: ${packageFilename}`);
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
		name: "package-index",
		async loadContent() {
			console.log("Building Reference Overview");

<<<<<<< HEAD
			const repoContent = [];

			try {
				const reposFilename = path.join(__dirname, "..", "docs", "repos.json");
				const reposContent = fs.readFileSync(reposFilename, "utf-8");
				const reposJson = JSON.parse(reposContent);

				for (const repo of reposJson) {
					repoContent.push(buildGroupContent(repo));
				}

				console.log("Writing Reference Overview");
				fs.writeFileSync(
					path.join(__dirname, "..", "docs", "reference.md"),
					buildContent(repoContent)
=======
			const groupContent = [];

			try {
				const packageGroupsFilename = path.join(__dirname, "..", "docs", "package-groups.json");
				const packageGroupsContent = fs.readFileSync(packageGroupsFilename, "utf-8");
				const packageGroupJson = JSON.parse(packageGroupsContent);

				for (const packageGroup of packageGroupJson) {
					groupContent.push(buildGroupContent(packageGroup));
				}

				console.log("Writing Package Overview");
				fs.writeFileSync(
					path.join(__dirname, "..", "docs", "packages.md"),
					buildContent(groupContent)
>>>>>>> next
				);
			} catch (err) {
				console.error(err);
			}
		}
	};
};
