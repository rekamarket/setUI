type t = TextDecorationStyle.t
type variant = TextDecorationStyle.variant

@module("./TextDecorationStyleStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #solid => style.solid
  // | #double  => style.double
  // | #dotted  => style.dotted
  // | #dashed  => style.dashed
  // | #wavy    => style.wavy
  // | #inherit => style.inherit
  | #initial => style.initial
  // | #unset   => style.unset
  }
