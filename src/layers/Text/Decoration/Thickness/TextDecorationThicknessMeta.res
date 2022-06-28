let name = "textDecorationThickness"
let description = Some("The text-decoration-thickness CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.")
let args = TextDecorationThickness.args -> Belt.Array.map((e) => (e :> string))
let mdn = Some("https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness")

