let name = "inlineSize"
let description = Some(
  "The inline-size CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the width or the height property, depending on the value of writing-mode. If the writing mode is vertically oriented, the value of inline-size relates to the height of the element; otherwise, it relates to the width of the element. A related property is block-size, which defines the other dimension of the element.",
)
let args = InlineSize.args->Belt.Array.map(e => (e :> string))
let mdn = Some("https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size")
