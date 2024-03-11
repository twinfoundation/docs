import path from "path";
import fs from "fs";

function buildContent(groups) {
	let content = `# Overview

This is the overview of the packages.
`;

	for (const group of groups) {
		content += `\n## ${group.label}\n\n`;

		for (const pkg of group.packages) {
			content += `- [${pkg.name}](packages/${pkg.name}/overview) - ${pkg.description}\n`;
		}
	}

	return content;
}

module.exports = async function packageIndexPlugin() {
	return {
		name: "package-index",
		async loadContent() {
			console.log("Building Package Overview");

			const groups = [];

			try {
				const packageGroupsFilename = path.join(
					__dirname,
					"..",
					"docs",
					"packages",
					"package-groups.json"
				);
				const packageGroupsContent = fs.readFileSync(packageGroupsFilename, "utf-8");
				const packageGroups = JSON.parse(packageGroupsContent);

				for (const packageGroup of packageGroups) {
					console.log(`  Package Group: ${packageGroup}`);

					const packageFilename = path.join(
						__dirname,
						"..",
						"docs",
						"packages",
						`${packageGroup}.json`
					);
					const packageContent = fs.readFileSync(packageFilename, "utf-8");
					groups.push(JSON.parse(packageContent));
				}

				console.log("Writing Package Overview");
				fs.writeFileSync(path.join(__dirname, "..", "docs", "packages.md"), buildContent(groups));
			} catch (err) {
				console.error(err);
			}
		}
	};
};
