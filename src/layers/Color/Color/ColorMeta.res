let name = "color"
let description = Some("The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.")
let args = Color.args -> Belt.Array.map((e) => (e :> string))
let mdn = Some("https://developer.mozilla.org/en-US/docs/Web/CSS/color")
