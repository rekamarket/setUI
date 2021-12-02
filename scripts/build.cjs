const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const { vanillaExtractPlugin } = require("@vanilla-extract/esbuild-plugin");

async function processCss(css) {
  const result = await postcss([autoprefixer]).process(css, {
    from: undefined /* suppress source map warning */,
  });

  return result.css;
}

require("esbuild")
  .build({
    entryPoints: ["./src/index.ts"],
    bundle: true,
    sourcemap: true,
    // minify: true,
    splitting: true,
    outdir: 'dist',
    plugins: [
      vanillaExtractPlugin({
        processCss,
      }),
    ],
    format: "esm",
    target: "es6",
    external: ["react", "react-dom"],
  })
  .catch(() => process.exit(1));
