@module("@vanilla-extract/css") external style: 'a => string = "style"

let className = style({
  "text-decoration": "none",
})
