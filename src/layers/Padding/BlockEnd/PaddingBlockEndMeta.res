let name = "paddingBlockEnd"
let description = Some("The padding-block-end CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.")
let args = MarginBlockEnd.args -> Belt.Array.map((e) => (e :> string))
let mdn = Some("PaddingBlockEnd://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-end")
