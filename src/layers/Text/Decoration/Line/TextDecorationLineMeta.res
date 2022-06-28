let name = "textDecorationLine"
let description = Some("The text-decoration-line CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.")
let args = TextDecorationLine.args -> Belt.Array.map((e) => (e :> string))
let mdn = Some("https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line")

