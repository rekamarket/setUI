@module("@vanilla-extract/css") external style: 'a => string = "style"

let className = style({
  "box-sizing": "border-box",
})
