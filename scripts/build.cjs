const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const { vanillaExtractPlugin } = require("@vanilla-extract/esbuild-plugin");
const { dtsPlugin } = require("esbuild-plugin-d.ts");

async function processCss(css) {
  const result = await postcss([autoprefixer]).process(css, {
    from: undefined /* suppress source map warning */,
  });

  return result.css;
}

require("esbuild")
  .build({
    entryPoints: ["./src/index.gen.ts"],
    bundle: true,
    sourcemap: true,
    // minify: true,
    splitting: true,
    outdir: 'package',
    plugins: [
      vanillaExtractPlugin({
        processCss,
      }),
      dtsPlugin(),
    ],
    format: "esm",
    target: "es6",
    external: ["react", "react-dom", "*.ttf"],
  })
  .catch(() => process.exit(1));
