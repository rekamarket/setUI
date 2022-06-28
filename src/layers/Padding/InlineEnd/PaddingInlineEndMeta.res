let name = "paddingInlineEnd"
let description = Some("The padding-inline-end CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.")
let args = PaddingInlineEnd.args -> Belt.Array.map((e) => (e :> string))
let mdn = Some("https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end")
