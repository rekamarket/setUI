type t = MarkerPosition.t
type variant = MarkerPosition.variant

@module("./MarkerPositionStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #inside => style.inside
  | #outside => style.outside
  }
