// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	plugins: ["@docusaurus/theme-live-codeblock"],
	title: "D3 Reacts",
	tagline: "Create Performant React Visualizations with speed",
	url: "https://d3reacts.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "D3Reacts", // Usually your GitHub org/user name.
	projectName: "D3Reacts", // Usually your repo name.
	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/oslabs-beta/d3reacts-website",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: "https://github.com/oslabs-beta/d3reacts-website/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
					themes: ["@docusaurus/theme-live-codeblock"],
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "D3 Reacts",
				logo: {
					alt: "D3 Reacts",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Docs",
					},
					{ to: "/blog", label: "Blog", position: "left" },
					{
						href: "https://github.com/oslabs-beta/d3reacts-website",
						label: "GitHub",
						position: "right",
					},
					{
						type: "localeDropdown",
						label: "Select your language",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Getting Started",
								to: "/docs/intro",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "/blog",
							},
							{
								label: "GitHub",
								href: "https://github.com/oslabs-beta/d3reacts-website",
							},
						],
					},
				],
				copyright: `D3Reacts is an open-source project licensed under MIT ${new Date().getFullYear()}`,
			},
			liveCodeBlock: {
				/**
				 * The position of the live playground, above or under the editor
				 * Possible values: "top" | "bottom"
				 */
				playgroundPosition: 'bottom',
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
