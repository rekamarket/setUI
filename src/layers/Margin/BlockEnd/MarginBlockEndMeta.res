let name = "marginBlockEnd"
let description = Some("The margin-block-end CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.")
let args = MarginBlockEnd.args -> Belt.Array.map((e) => (e :> string))
let mdn = Some("https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-end")
