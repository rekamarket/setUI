let name = "fontFamily"
let description = Some("The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.")
let args = FontFamily.args -> Belt.Array.map((e) => (e :> string))
let mdn = Some("https://developer.mozilla.org/en-US/docs/Web/CSS/font-family")