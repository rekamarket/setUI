@module("@vanilla-extract/css") external style: 'a => string = "style"
@module("@vanilla-extract/css") external keyframes: 'a => string = "keyframes"

let spin = keyframes({
  "0%": {"transform": "rotate(0deg)"},
  "100%": {"transform": "rotate(1turn)"},
})

let root = style({
  "cursor": "pointer",
  "position": "relative",
  "font-weight": "600",
  "border-width": "1px",
  "border-style": "solid",
  "display": "flex",
  "justify-content": "center",
  "align-items": "center",
  "fontFamily": FontFamily.options.display,
})

let content = style({
  "transform": "translateY(12.5%)",
  "fontSize": "var(--cap-size)",
  "lineHeight": "var(--line-gap)",
  ":before": {
    "content": `""`,
    "display": "table",
    "marginBottom": "var(--cap-bottom)",
  },
  ":after": {
    "content": `""`,
    "display": "table",
    "marginTop": "var(--cap-top)",
  },
})

let appearIn = style({
  "opacity": "1",
})

let appearOut = style({
  "opacity": "0",
})

let icon = style({
  "width": "var(--icon-size)",
  "height": "var(--icon-size)",
  "display": "flex",
  "justify-content": "center",
  "align-items": "center",
})

let loader = style({
  "width": "var(--icon-size)",
  "height": "var(--icon-size)",
  "animation-name": spin,
  "animation-duration": "1s",
  "animation-iteration-count": "infinite",
  "animation-timing-function": "linear",
  "transition": "1s ease-in-out opacity",
  "fill": "currentColor",
})

let centered = style({
  "position": "absolute",
  "left": "calc(50% - var(--icon-size)/2)",
})
