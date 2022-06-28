type t = FlexDirection.t
type variant = FlexDirection.variant

@module("./FlexDirectionStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #row => style.row
  | #rowReverse => style.rowReverse
  | #column => style.column
  | #columnReverse => style.columnReverse
  }
