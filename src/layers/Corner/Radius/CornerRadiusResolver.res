type t = CornerRadius.t
type variant = CornerRadius.variant

@module("./CornerRadiusStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #none => style.none
  | #xsmall => style.xsmall
  | #small => style.small
  | #medium => style.medium
  | #large => style.large
  | #xlarge => style.xlarge
  | #xxlarge => style.xxlarge
  | #pill => style.pill
  | #circle => style.circle
  }
