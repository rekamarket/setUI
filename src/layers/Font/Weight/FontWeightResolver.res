type t = FontWeight.t
type variant = FontWeight.variant

@module("./FontWeightStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #regular => style.regular
  | #semiBold => style.semiBold
  | #bold => style.bold
  }
