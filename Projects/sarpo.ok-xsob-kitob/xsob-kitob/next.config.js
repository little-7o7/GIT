/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  // disable css-modules component styling
  reactStrictMode: false,
  appDir: true,
  experimental: { css: true },
  webpack(config) {
    config.module.rules.forEach((rule) => {
      const { oneOf } = rule;
      if (oneOf) {
        oneOf.forEach((one) => {
          if (!`${one.issuer?.and}`.includes('_app')) return;
          one.issuer.and = [path.resolve(__dirname)];
        });
      }
    })
    return config;
  },
}

module.exports = nextConfig