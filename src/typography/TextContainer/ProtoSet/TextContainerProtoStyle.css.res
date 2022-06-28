@module("@vanilla-extract/css") external style: ('a) => string = "style"

let className = style({
  "padding": "0",
  "margin": "0",
})
