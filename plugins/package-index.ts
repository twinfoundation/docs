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

function buildGroupContent(repo, packageType) {
	let content = "";

	const packageGroupFilename = path.join(
		__dirname,
		"..",
		"docs",
		"pkgs",
		repo.name,
		"package.json"
	);

	if (fileExists(packageGroupFilename)) {
		const ignoredPackages = repo.ignore ?? [];

		const packageContent = fs.readFileSync(packageGroupFilename, "utf-8");
		const groupJson = JSON.parse(packageContent);

		let combinedPackageContent = "";
		let displayedGroup = false;
		for (const pkg of groupJson.workspaces) {
			if (pkg.includes(`${packageType}/`) && !ignoredPackages.includes(pkg)) {
				if (!displayedGroup) {
					console.debug("  Group", repo);
					displayedGroup = true;
				}
				combinedPackageContent += buildPackageContent(
					repo.name,
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
			buildOverview(
				"apps",
				"apps.md",
				"TWIN consists of a range of applications to help you get started building and deploying solutions."
			);
			buildOverview("packages", "pkgs.md", "The code components that make up TWIN.");
		}
	};
};
