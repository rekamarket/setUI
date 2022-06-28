open Playroom

let displayName = "H6"
let parentName = HeadingMeta.displayName -> Some
let component = "H6"
let description = "H6"

let tag = HTMLTag(#h6)

let list: (
  ~tag: string,
  ~children: option<string>,
  ~props: option<array<R.prop>>,
) => array<R.t> = (~tag, ~children, ~props) => [
  ColorLayerMeta.make(~tag, ~children, ~props),
  FontLayerMeta.make(~tag, ~children, ~props),
] -> Belt.Array.concatMany
