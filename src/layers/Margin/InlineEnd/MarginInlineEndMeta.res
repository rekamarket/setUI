let name = "marginInlineEnd"
let description = Some("The margin-inline-end CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction, and text-orientation.")
let args = MarginInlineEnd.args -> Belt.Array.map((e) => (e :> string))
let mdn = Some("https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end")
