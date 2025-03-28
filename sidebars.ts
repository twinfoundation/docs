import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import path from "path";
import fs from "fs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
	introductionSidebar: ["intro"],
	appsSidebar: ["apps", ...buildPkgs("apps")],
	packagesSidebar: ["pkgs", ...buildPkgs("packages")]
};

function buildPkgs(packageType): any {
	try {
		const reposFilename = path.join(__dirname, "docs", "repos.json");
		const reposContent = fs.readFileSync(reposFilename, "utf-8");
		const reposJson = JSON.parse(reposContent);

		const groups = [];

		for (const repo of reposJson) {
			try {
				const packageFilename = path.join(__dirname, "docs", "pkgs", repo.name, "package.json");

				if (fileExists(packageFilename)) {
					const packageContent = fs.readFileSync(packageFilename, "utf-8");
					const packageContentJson = JSON.parse(packageContent);

					const items = [];

					for (const p of packageContentJson.workspaces) {
						if (p.includes(`${packageType}/`)) {
							items.push(
								generatePackageItems(repo.name, packageType, p.replace(`${packageType}/`, ""))
							);
						}
					}

					if (items.length > 0) {
						groups.push({
							type: "category",
							label: packageContentJson.description,
							items
						});
					}
				} else {
					console.debug("! File not found", packageFilename);
				}
			} catch (error) {
				console.debug(error);
			}
		}

		return groups;
	} catch (error) {
		console.debug(error);
	}

	return [];
}

function generatePackageItems(packageGroup: string, packageType: string, packageName: string): any {
	const referenceItems = [
		dirExists(packageGroup, packageType, packageName, "docs/reference/classes", "Classes"),
		dirExists(packageGroup, packageType, packageName, "docs/reference/interfaces", "Interfaces"),
		dirExists(
			packageGroup,
			packageType,
			packageName,
			"docs/reference/types-aliases",
			"Type Aliases"
		),
		dirExists(packageGroup, packageType, packageName, "docs/reference/functions", "Functions"),
		dirExists(packageGroup, packageType, packageName, "docs/reference/variables", "Variables")
	].filter(Boolean);

	return {
		type: "category",
		label: packageName,
		items: [
			packageFileExists(packageGroup, packageType, packageName, "index", "Overview"),
			packageFileExists(packageGroup, packageType, packageName, "docs/examples", "Examples"),
			packageFileExists(
				packageGroup,
				packageType,
				packageName,
				"docs/configuration",
				"Configuration"
			),
			packageFileExists(packageGroup, packageType, packageName, "docs/deployment", "Deployment"),
			referenceItems.length > 0 && {
				type: "category",
				label: "Reference",
				link: {
					type: "doc",
					id: `pkgs/${packageGroup}/${packageType}/${packageName.toLowerCase()}/docs/reference/index`
				},
				items: referenceItems
			},
			packageFileExists(packageGroup, packageType, packageName, "docs/changelog", "Changelog")
		].filter(Boolean)
	};
}

function packageFileExists(
	packageGroup: string,
	packageType: string,
	packageName: string,
	id: string,
	label: string
): any {
	const dirName = `pkgs/${packageGroup}/${packageType}/${packageName.toLowerCase()}/${id}`;
	const file = path.join(__dirname, "docs", dirName);

	const exists = fileExists(`${file}.md`);

	if (exists) {
		return {
			type: "doc",
			id: dirName,
			label
		};
	}
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

function dirExists(
	packageGroup: string,
	packageType: string,
	packageName: string,
	id: string,
	label: string
): any {
	const dirName = `pkgs/${packageGroup}/${packageType}/${packageName.toLowerCase()}/${id}`;
	const dir = path.join(__dirname, "docs", dirName);

	try {
		const st = fs.statSync(dir);

		if (st.isDirectory()) {
			const files = fs.readdirSync(dir);

			files.sort();

			return {
				type: "category",
				label,
				items: files.map((f) => {
					return {
						type: "doc",
						label: f.replace(".md", ""),
						id: `${dirName}/${f.replace(".md", "")}`
					};
				})
			};
		}
	} catch {}
}

export default sidebars;
