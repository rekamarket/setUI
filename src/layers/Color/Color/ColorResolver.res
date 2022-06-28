type t = Color.t
type variant = Color.variant

@module("./ColorStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #primary => style.primary
  | #secondary => style.secondary
  | #black => style.black
  | #white => style.white
  }
