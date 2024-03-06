import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "GTSC",
	tagline: "Global Trade and Supply Chain",
	favicon: "img/favicon.ico",

	url: "https://docs.gtsc.io",
	baseUrl: "/",
	organizationName: "gtscio",
	projectName: "docs",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en",
		locales: ["en"]
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					editUrl: "https://github.com/gtscio/docs/tree/main/"
				},
				theme: {
					customCss: "./src/css/custom.css"
				}
			}
		]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		{
			image: "img/gtsc.svg",
			navbar: {
				title: "GTSC",
				logo: {
					alt: "GTSC",
					src: "img/gtsc.svg"
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "introductionSidebar",
						position: "left",
						label: "Introduction"
					},
					{
						type: "docSidebar",
						sidebarId: "packagesSidebar",
						position: "left",
						label: "Packages"
					},
					{
						href: "https://github.com/gtscio/docs",
						label: "GitHub",
						position: "right"
					}
				]
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Introduction",
								to: "/docs/intro"
							},
							{
								label: "Packages",
								to: "/docs/packages"
							}
						]
					},
					{
						title: "Community",
						items: [
							{
								label: "X",
								href: "https://x.com/iota"
							},
							{
								label: "LinkedIn",
								href: "https://www.linkedin.com/company/iotafoundation/"
							}
						]
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "https://blog.iota.org"
							},
							{
								label: "GitHub",
								href: "https://github.com/iotaledger"
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} GTSC`
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula
			}
		} satisfies Preset.ThemeConfig
};

export default config;
