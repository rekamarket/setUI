type t = TextDecorationColor.t
type variant = TextDecorationColor.variant

@module("./TextDecorationColorStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #currentColor => style.currentColor
  | #primary => style.primary
  | #secondary => style.secondary
  | #black => style.black
  | #white => style.white
  }
