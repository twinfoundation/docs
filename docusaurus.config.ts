import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "TWIN",
	tagline: "Trade Worldwide Information Network",
	favicon: "img/favicon.ico",

	url: "https://twindev.org",
	baseUrl: "/",
	organizationName: "TWIN",
	projectName: "docs",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	onBrokenAnchors: "log",

	i18n: {
		defaultLocale: "en",
		locales: ["en"]
	},

	plugins: ["./plugins/package-index.ts"],

	headTags: [
		{
			tagName: "link",
			attributes: {
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			}
		},
		{
			tagName: "link",
			attributes: {
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "true"
			}
		},
		{
			tagName: "link",
			attributes: {
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
			}
		}
	],

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					editUrl: "https://github.com/twinfoundation/docs/tree/main/"
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
						sidebarId: "twinWhitePaperSidebar",
						position: "left",
						label: "White Paper"
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
						type: "docSidebar",
						sidebarId: "mediaSidebar",
						position: "left",
						label: "Media"
					},
					{
						type: "docSidebar",
						sidebarId: "roadmapSidebar",
						position: "left",
						label: "Roadmap"
					},
					{
						href: "https://github.com/twinfoundation/docs",
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
							},
							{
								label: "White Paper",
								href: "/pdf/TWIN_Whitepaper_Reference_Architecture-Draft4-July-2025.pdf",
								target: "_blank"
							}
						]
					},
					{
						title: "Community",
						items: [
							{
								label: "X",
								href: "https://x.com/TWINGlobalOrg"
							},
							{
								label: "LinkedIn",
								href: "https://www.linkedin.com/company/twinfoundation/"
							},
							{
								label: "YouTube",
								href: "https://www.youtube.com/@TWINFoundation"
							},
							{
								label: "GitHub",
								href: "https://github.com/twinfoundation"
							}
						]
					},
					{
						title: "Resources",
						items: [
							{
								label: "Media",
								to: "/docs/media"
							},
							{
								label: "Roadmap",
								to: "/docs/roadmap"
							}
						]
					},
					{
						title: "More",
						items: [
							{
								label: "www.twin.org",
								href: "https://www.twin.org"
							},
							{
								label: "IOTA",
								href: "https://www.iota.org/"
							},
							{
								label: "TWIN Schemas",
								href: "https://schema.twindev.org/"
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
