type t = MarkerType.t
type variant = MarkerType.variant

@module("./MarkerTypeStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #none => style.none
  | #bullet => style.bullet
  | #circle => style.circle
  }
