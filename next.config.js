/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['miro.medium.com', 'tailwindui.com'],
  },
  eslint: {
    dirs: ['pages', 'components'], // Only run ESLint on the 'pages' and 'components' directories during production builds (next build)
  },
};
