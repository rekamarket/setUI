open Playroom

let displayName = "H2"
let parentName = HeadingMeta.displayName -> Some
let component = "H2"
let description = "H2"

let tag = HTMLTag(#h2)

let list: (
  ~tag: string,
  ~children: option<string>,
  ~props: option<array<R.prop>>,
) => array<R.t> = (~tag, ~children, ~props) => [
  ColorLayerMeta.make(~tag, ~children, ~props),
  FontLayerMeta.make(~tag, ~children, ~props),
] -> Belt.Array.concatMany
