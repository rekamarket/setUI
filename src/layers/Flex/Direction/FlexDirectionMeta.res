let name = "flexDirection"
let description = Some(
  "The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).",
)
let args = FlexDirection.args->Belt.Array.map(e => (e :> string))
let mdn = Some("https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction")
