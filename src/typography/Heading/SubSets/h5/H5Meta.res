open Playroom

let displayName = "H5"
let parentName = HeadingMeta.displayName -> Some
let component = "H5"
let description = "H5"

let tag = HTMLTag(#h5)

let list: (
  ~tag: string,
  ~children: option<string>,
  ~props: option<array<R.prop>>,
) => array<R.t> = (~tag, ~children, ~props) => [
  ColorLayerMeta.make(~tag, ~children, ~props),
  FontLayerMeta.make(~tag, ~children, ~props),
] -> Belt.Array.concatMany
