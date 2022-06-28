let name = "marginBlockStart"
let description = Some("The margin-block-start CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.")
let args = MarginBlockStart.args -> Belt.Array.map((e) => (e :> string))
let mdn = Some("https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-start")
