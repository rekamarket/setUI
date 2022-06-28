let name = "fontWeight"
let description = Some("The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.")
let args = FontWeight.args -> Belt.Array.map((e) => (e :> string))
let mdn = Some("https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight")
