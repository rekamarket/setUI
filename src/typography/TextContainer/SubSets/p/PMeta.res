open Playroom

let displayName = "Paragraph"
let parentName = TextContainerMeta.displayName -> Some
let component = "Paragraph"
let description = "Paragraph"
let tag = HTMLTag(#p)

let list: (
  ~tag: string,
  ~children: option<string>,
  ~props: option<array<R.prop>>,
) => array<R.t> = (~tag, ~children, ~props) => [
  ColorLayerMeta.make(~tag, ~children, ~props),
  FontLayerMeta.make(~tag, ~children, ~props),
] -> Belt.Array.concatMany
