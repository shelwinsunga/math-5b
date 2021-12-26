// const withNextra = require('nextra')({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.js',
//   unstable_staticImage: true,
// })
// module.exports = withNextra()

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  mdxOptions: {},
});

/**
 * @type {import('next').NextConfig}
 */
const config = {};

module.exports = withNextra(config);
