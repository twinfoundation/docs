import path from "path";
import fs from "fs";

function buildContent(groupContent, description) {
	let content = `# Overview

${description}
`;

	for (const group of groupContent) {
		content += group;
	}

	return content;
}

function buildGroupContent(packageGroup, packageType) {
	let content = "";

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
		let displayedGroup = false;
		for (const pkg of groupJson.workspaces) {
			if (pkg.includes(`${packageType}/`)) {
				if (!displayedGroup) {
					console.debug("  Group", packageGroup);
					displayedGroup = true;
				}
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
		console.debug("      ! File not found in buildContentGroup", packageGroupFilename);
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

		content += `- [${packageJson.name}](pkgs/${packageGroup}/${packageType}/${packageJson.name.replace("@twin.org/", "")}/index.md) - ${packageJson.description}\n`;
	} else {
		console.debug("        ! File not found in buildPackageContent", packageFilename);
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

function buildOverview(packageType, outputFilename, description) {
	console.debug(`Building ${packageType} Overviews`);

	const repoContent = [];

	try {
		const reposFilename = path.join(__dirname, "..", "repos.json");
		const reposContent = fs.readFileSync(reposFilename, "utf-8");
		const reposJson = JSON.parse(reposContent);

		for (const repo of reposJson) {
			repoContent.push(buildGroupContent(repo, packageType));
		}

		console.debug(`Writing ${packageType} Overview`, outputFilename);
		fs.writeFileSync(
			path.join(__dirname, "..", "docs", outputFilename),
			buildContent(repoContent, description)
		);
	} catch (err) {
		console.debug(err);
	}
}

module.exports = async function packageIndexPlugin() {
	return {
		name: "appsAndPackages",
		async loadContent() {
			buildOverview("apps", "apps.md", "This is the overview of the applications.");
			buildOverview("packages", "pkgs.md", "This is the overview of the packages.");
		}
	};
};
