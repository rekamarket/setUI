type t = LineClamp.t
type variant = LineClamp.variant

@module("./LineClampStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #none => style.none
  | #1 => style.\"1"
  | #2 => style.\"2"
  | #3 => style.\"3"
  | #4 => style.\"4"
  | #5 => style.\"5"
  | #6 => style.\"6"
  }
