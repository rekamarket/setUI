open Playroom

let displayName = "Idiomatic"
let parentName = TextMeta.displayName -> Some
let component = "Idiomatic"
let description = "Idiomatic"
let tag = HTMLTag(#i)

let list: (
  ~tag: string,
  ~children: option<string>,
  ~props: option<array<R.prop>>,
) => array<R.t> = (~tag, ~children, ~props) => [
  ColorLayerMeta.make(~tag, ~children, ~props),
  FontLayerMeta.make(~tag, ~children, ~props),
  TextTransformLayerMeta.make(~tag, ~children, ~props),
] -> Belt.Array.concatMany
