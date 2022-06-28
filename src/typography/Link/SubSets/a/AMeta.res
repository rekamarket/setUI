open Playroom

let displayName = "Link"
let parentName = None
let component = "Link"
let description = "Link"

let tag = HTMLTag(#a)

let list: (
  ~tag: string,
  ~children: option<string>,
  ~props: option<array<R.prop>>,
) => array<R.t> = (~tag, ~children, ~props) => [
  ColorLayerMeta.make(~tag, ~children, ~props),
  FontLayerMeta.make(~tag, ~children, ~props),
  TextDecorationLayerMeta.make(~tag, ~children, ~props),
  TextTransformLayerMeta.make(~tag, ~children, ~props),
] -> Belt.Array.concatMany
