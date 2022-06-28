type t = TextAlign.t
type variant = TextAlign.variant

@module("./TextAlignStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #center => style.center
  | #start => style.start
  | #end => style.end
  | #initial => style.initial
  }
