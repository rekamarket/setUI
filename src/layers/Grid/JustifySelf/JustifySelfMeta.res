let name = "justifySelf"
let description = Some(
  "The CSS justify-self property sets the way a box is justified inside its alignment container along the appropriate axis.",
)
let args = JustifySelf.args->Belt.Array.map(e => (e :> string))
let mdn = Some("https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self")
