type t = InlineSize.t
type variant = InlineSize.variant

@module("./InlineSizeStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #maxContent => style.maxContent
  | #minContent => style.minContent
  | #fitContent => style.fitContent
  | #auto => style.auto
  | #fillAvailable => style.fillAvailable
  }
