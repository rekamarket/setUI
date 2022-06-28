let name = "textDecorationColor"
let description = Some("The text-decoration-color CSS property sets the color of decorations added to text by text-decoration-line. The color applies to decorations, such as underlines, overlines, strikethroughs, and wavy lines like those used to mark misspellings, in the scope of the property's value.")
let args = TextDecorationColor.args -> Belt.Array.map((e) => (e :> string))
let mdn = Some("https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color")
