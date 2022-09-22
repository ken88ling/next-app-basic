/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: 'dev-only',
      labelFormat: 'my-classname--[local]',
    },
  },
}
// module.exports =  NextAppConfig



module.exports = nextConfig
