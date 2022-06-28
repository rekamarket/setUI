type t = TextTransform.t
type variant = TextTransform.variant

@module("./TextTransformStyle.css.js") external style: variant = "make"

let make = (. key: t) => switch (key) {
| #none         => style.none
| #uppercase    => style.uppercase
| #lowercase    => style.lowercase
| #capitalize   => style.capitalize
// | #fullWidth    => style.fullWidth
// | #fullSizeKana => style.fullSizeKana
}
