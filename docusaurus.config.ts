import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "TWIN",
	tagline: "Trade Worldwide Information Network",
	favicon: "img/favicon.ico",

	url: "https://docs-next.gtsc.io",
	baseUrl: "/",
	organizationName: "TWIN",
	projectName: "docs",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en",
		locales: ["en"]
	},

	plugins: ["./plugins/package-index.ts"],

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
			image: "img/logo.svg",
			navbar: {
				title: "TWIN",
				logo: {
					alt: "TWIN",
					src: "img/logo.svg"
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
						sidebarId: "appsSidebar",
						position: "left",
						label: "Applications"
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
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Introduction",
								to: "/docs/intro"
							},
							{
								label: "Applications",
								to: "/docs/apps"
							},
							{
								label: "Packages",
								to: "/docs/pkgs"
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
				copyright: `Copyright © ${new Date().getFullYear()} TWIN`
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula
			}
		} satisfies Preset.ThemeConfig
};

export default config;
