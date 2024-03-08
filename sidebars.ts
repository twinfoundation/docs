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
	// By default, Docusaurus generates a sidebar from the docs folder structure
	introductionSidebar: ["intro"],

	// But you can create a sidebar manually
	packagesSidebar: [
		"packages",
		{
			type: "category",
			label: "Framework",
			items: [
				generatePackageItems("nameof-transformer"),
				generatePackageItems("nameof"),
				generatePackageItems("core"),
				generatePackageItems("entity")
			]
		}
	]
};

function generatePackageItems(packageName: string): any {
	const referenceItems = [
		dirExists(packageName, "reference/enums", "Enums"),
		dirExists(packageName, "reference/classes", "Classes"),
		dirExists(packageName, "reference/interfaces", "Interfaces")
	].filter(Boolean);

	return {
		type: "category",
		label: packageName,
		items: [
			fileExists(packageName, "overview", "Overview"),
			fileExists(packageName, "examples", "Examples"),
			fileExists(packageName, "configuration", "Configuration"),
			referenceItems.length > 0 && {
				type: "category",
				label: "Reference",
				link: {
					type: "doc",
					id: `packages/${packageName.toLowerCase()}/reference/modules`
				},
				items: referenceItems
			},
			fileExists(packageName, "changelog", "Changelog"),
		].filter(Boolean)
	};
}

function fileExists(packageName: string, id: string, label: string): any {
	const dirName = `packages/${packageName.toLowerCase()}/${id}`;
	const file = path.join(__dirname, "docs", dirName);

	try {
		const st = fs.statSync(`${file}.md`);

		if (st.isFile()) {
			return {
				type: "doc",
				id: dirName,
				label
			};
		}
	} catch {}
}

function dirExists(packageName: string, id: string, label: string): any {
	const dirName = `packages/${packageName.toLowerCase()}/${id}`;
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

// console.log(JSON.stringify(sidebars, undefined, "\t"))

export default sidebars;
