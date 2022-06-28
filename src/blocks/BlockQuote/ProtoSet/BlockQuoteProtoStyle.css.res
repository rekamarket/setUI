@module("@vanilla-extract/css") external style: 'a => string = "style"

let className = style({
  "display": "block",
  "position": "relative",
  "selectors": {
    "&:before": {
      "content": `""`,
      "position": "absolute",
      "inset": "0 auto 0 0",
      "width": "2px",
      "height": "100%",
      "background": Theme.color.primary,
      "pointer-events": "none",
    },
  },
})
