let name = "textDecorationStyle"
let description = Some("The text-decoration-style CSS property sets the style of the lines specified by text-decoration-line. The style applies to all lines that are set with text-decoration-line.")
let args = TextDecorationStyle.args -> Belt.Array.map((e) => (e :> string))
let mdn = Some("https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style")
