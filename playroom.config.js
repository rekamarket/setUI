const path = require('path');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  components: './src/typography/index.ts',
  outputPath: './dist/playroom',

  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: true,
  paramType: 'search', // default is 'hash'
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
  baseUrl: '/playroom/',
  webpackConfig: () => ({
    plugins: [new VanillaExtractPlugin({ allowRuntime: true })],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: [
            path.resolve(__dirname, 'src/CSS/'),
            path.resolve(__dirname, 'src/typography/'),
            path.resolve(__dirname, 'src/utils/'),
            path.resolve(__dirname, 'src/utils/index.ts')
          ],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                'next/babel',
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react'
              ]
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      alias: {
        CSS: path.resolve(__dirname, 'src/CSS/'),
        typography: path.resolve(__dirname, 'src/typography/'),
        utils: path.resolve(__dirname, 'src/utils/index.ts'),
      }
    }
  }),
  iframeSandbox: 'allow-scripts',
};
