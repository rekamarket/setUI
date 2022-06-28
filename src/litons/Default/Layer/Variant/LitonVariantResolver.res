type t = LitonVariant.t
type variant = LitonVariant.variant

@module("./LitonVariantStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #solid => style.solid
  | #ghost => style.ghost
  | #soft => style.soft
  | #text => style.text
  }
