type t = LitonColor.t
type variant = LitonColor.variant

@module("./LitonColorStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #blue => style.blue
  | #gray => style.gray
  }
