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
	twinWhitePaperSidebar: ["twin-white-paper"],
	tutorialsSidebar: [
		{
			type: "category",
			label: "Getting Started",
			items: buildTutorials()
		}
	],
	appsSidebar: ["apps", ...buildPkgs("apps")],
	packagesSidebar: ["pkgs", ...buildPkgs("packages")],
	mediaSidebar: ["media"],
	roadmapSidebar: [
		{
			type: "category",
			label: "Roadmap",
			link: {
				type: "generated-index",
				slug: "roadmap"
			},
			collapsed: false,
			items: ["roadmap-overview", "q2-2025-progress"]
		}
	]
};

function buildTutorials(): any[] {
	try {
		const tutorialsDir = path.join(__dirname, "docs", "tutorials");
		return getMarkdownFiles(tutorialsDir).map((filename) => {
			const docId = toDocId(filename);
			const label =
				readTutorialLabel(path.join(tutorialsDir, filename)) ??
				formatFallbackLabel(docId.split("/").pop() ?? "");

			return {
				type: "doc",
				id: docId,
				label
			};
		});
	} catch (error) {
		console.debug(error);
	}

	return [];
}

function getMarkdownFiles(dir: string): string[] {
	return fs
		.readdirSync(dir, { withFileTypes: true })
		.filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
		.map((entry) => entry.name)
		.sort();
}

function toDocId(filename: string): string {
	return `tutorials/${filename.replace(/\.md$/, "").replace(/^[0-9]+-/, "")}`;
}

function readTutorialLabel(filePath: string): string | undefined {
	try {
		const content = fs.readFileSync(filePath, "utf-8");
		const { frontmatter, body } = splitFrontmatter(content);

		if (frontmatter) {
			const sidebarLabel = extractFrontmatterValue(frontmatter, "sidebar_label");
			if (sidebarLabel) {
				return sidebarLabel;
			}

			const title = extractFrontmatterValue(frontmatter, "title");
			if (title) {
				return title;
			}
		}

		const headingMatch = body.match(/^#{1,6}\s+(.+)$/m);
		if (headingMatch) {
			return headingMatch[1].trim();
		}
	} catch (error) {
		console.debug(error);
	}
}

function splitFrontmatter(content: string): { frontmatter?: string; body: string } {
	const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);

	if (match) {
		return {
			frontmatter: match[1],
			body: content.slice(match[0].length)
		};
	}

	return { body: content };
}

function extractFrontmatterValue(frontmatter: string, key: string): string | undefined {
	const regex = new RegExp(`^${key}:\s*(.+)$`, "m");
	const match = frontmatter.match(regex);

	if (match) {
		return match[1].trim().replace(/^['"]|['"]$/g, "");
	}
}

function formatFallbackLabel(name: string): string {
	return name.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function buildPkgs(packageType): any {
	try {
		const reposFilename = path.join(__dirname, "repos.json");
		const reposContent = fs.readFileSync(reposFilename, "utf-8");
		const reposJson = JSON.parse(reposContent);

		const groups = [];

		for (const repo of reposJson) {
			try {
				const packageFilename = path.join(__dirname, "docs", "pkgs", repo.name, "package.json");

				if (fileExists(packageFilename)) {
					const ignoredPackages = repo.ignore ?? [];
					const packageContent = fs.readFileSync(packageFilename, "utf-8");
					const packageContentJson = JSON.parse(packageContent);

					const items = [];

					for (const pkg of packageContentJson.workspaces) {
						if (pkg.includes(`${packageType}/`) && !ignoredPackages.includes(pkg)) {
							items.push(
								generatePackageItems(repo.name, packageType, pkg.replace(`${packageType}/`, ""))
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
					console.debug("! File not found in buildPkgs", packageFilename);
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
			packageFileExists(
				packageGroup,
				packageType,
				packageName,
				"docs/architecture",
				"Architecture"
			),
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
