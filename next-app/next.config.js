/** @type {import('next').NextConfig} */
const { /** @type {import('next').NextConfig} */ } = {};

/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Support legacy .html links used by the Vite-generated site
      {
        source: '/careers.html',
        destination: '/careers',
      },
      {
        source: '/privacy.html',
        destination: '/privacy',
      },
    ];
  },
  webpack: (config, { defaultLoaders }) => {
    // Allow importing files from the repository's root `src` directory.
    // Add aliases so `@/...` resolves to the root src, matching tsconfig paths,
    // and ensure React resolves to the next-app's installed copy.
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src');
    config.resolve.alias['react'] = path.resolve(__dirname, 'node_modules', 'react');
    config.resolve.alias['react-dom'] = path.resolve(__dirname, 'node_modules', 'react-dom');
    config.resolve.alias['react/jsx-runtime'] = path.resolve(
      __dirname,
      'node_modules',
      'react',
      'jsx-runtime.js'
    );

    // Ensure Babel loader processes TSX/JSX files under ../src
    config.module.rules.push({
      test: /\.[jt]sx?$/,
      include: [path.resolve(__dirname, '..', 'src')],
      use: defaultLoaders.babel,
    });

    return config;
  },
};

module.exports = nextConfig;
