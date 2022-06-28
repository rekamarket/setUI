type t = TextDecorationThickness.t
type variant = TextDecorationThickness.variant

@module("./TextDecorationThicknessStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  // | #auto     => style.auto
  // | #fromFont => style.fromFont
  | #thin => style.thin
  // | #light    => style.light
  // | #medium   => style.medium
  | #bold => style.bold
  // | #inherit  => style.inherit
  | #initial => style.initial
  // | #unset    => style.unset
  }
