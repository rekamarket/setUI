const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')

module.exports = {
  plugins: [new VanillaExtractPlugin()],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    loader: 'imgix',
    path: 'https://noop/',
  },
}
