module.exports = {
  components: './build/index.gen.js',
  outputPath: './package',
  title: 'typography',
  snippets: './Snippets.js',
  frameComponent: './FrameComponent.js',
  widths: [400, 1200, 1920, 2000],
  port: 9000,
  openBrowser: true,
  exampleCode:
`
<div style={{ display: "flex", gap: 20, padding: 20, background: "#333" }}>
  <Limit size="s" color="dark" />
  <Limit size="m" color="dark" />
  <Limit size="l" color="dark" />
  <Limit size="xl" color="dark" />
</div>

<div style={{ display: "flex", gap: 20, padding: 20, background: "#333" }}>
  <Limit type="borderless" size="s" color="dark" />
  <Limit type="borderless" size="m" color="dark" />
  <Limit type="borderless" size="l" color="dark" />
  <Limit type="borderless" size="xl" color="dark" />
</div>

<hr />

<div style={{ display: "flex", gap: 20, padding: 20 }}>
  <Limit size="s" color="light" />
  <Limit size="m" color="light" />
  <Limit size="l" color="light" />
  <Limit size="xl" color="light" />
</div>

<div style={{ display: "flex", gap: 20, padding: 20 }}>
  <Limit type="borderless" size="s" color="light" />
  <Limit type="borderless" size="m" color="light" />
  <Limit type="borderless" size="l" color="light" />
  <Limit type="borderless" size="xl" color="light" />
</div>
`,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
            },
          },
        },
      ],
    },
  }),
  iframeSandbox: 'allow-scripts',
};
