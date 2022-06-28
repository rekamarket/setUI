@module("@vanilla-extract/css") external style: 'a => string = "style"
@module("@vanilla-extract/css") external globalStyle: (string, 'a) => unit = "globalStyle"

let className = style({
  "display": "grid",
  "gap": "16px",
})

globalStyle(
  `${className} li`,
  {
    "display": "flex",
    "alignItems": "flex-start",
  },
)

globalStyle(
  `${className} li:before`,
  {
    "content": `var(--marker-type)`,
    "fontSize": "var(--marker-size)",
    "paddingRight": "var(--marker-gap)",
    "paddingLeft": "var(--marker-gap)",
    "paddingTop": "0.6ch",
  },
)

globalStyle(
  `${className} li:marker`,
  {
    "display": "none",
  },
)
