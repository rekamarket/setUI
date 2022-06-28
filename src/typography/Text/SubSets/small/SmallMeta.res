open Playroom

let displayName = "Disclaimer"
let parentName = TextMeta.displayName -> Some
let component = "Disclaimer"
let description = "Disclaimer"
let tag = HTMLTag(#small)

let list: (
  ~tag: string,
  ~children: option<string>,
  ~props: option<array<R.prop>>,
) => array<R.t> = (~tag, ~children, ~props) => [
  ColorLayerMeta.make(~tag, ~children, ~props),
  FontLayerMeta.make(~tag, ~children, ~props),
  TextTransformLayerMeta.make(~tag, ~children, ~props),
] -> Belt.Array.concatMany
