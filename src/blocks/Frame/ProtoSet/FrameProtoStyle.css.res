@module("@vanilla-extract/css") external style: 'a => string = "style"
@module("@vanilla-extract/css") external globalStyle: (string, 'a) => unit = "globalStyle"

let className = style({
  "display": "grid",
  "grid-template-columns": `1fr min(var(--max-inline-size-by-characters, ${FrameSize.options.l}), 100%) 1fr`,
})

globalStyle(
  `${className} > *`,
  {
    "grid-column": "2",
  },
)
