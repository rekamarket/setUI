open Playroom

let displayName = "H4"
let parentName = HeadingMeta.displayName -> Some
let component = "H4"
let description = "H4"

let tag = HTMLTag(#h4)

let list: (
  ~tag: string,
  ~children: option<string>,
  ~props: option<array<R.prop>>,
) => array<R.t> = (~tag, ~children, ~props) => [
  ColorLayerMeta.make(~tag, ~children, ~props),
  FontLayerMeta.make(~tag, ~children, ~props),
] -> Belt.Array.concatMany
