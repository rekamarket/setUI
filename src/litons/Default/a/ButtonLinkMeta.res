open Playroom

let displayName = "ButtonLink"
let parentName = None
let component = "ButtonLink"
let description = "Click"
let tag = HTMLTag(#a)

let list: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) =>
  [
    LitonLayerMeta.make(~tag, ~children, ~props),
    JustifySelfLayerMeta.make(~tag, ~children, ~props),
    InlineSizeLayerMeta.make(~tag, ~children, ~props),
    TextTransformLayerMeta.make(~tag, ~children, ~props),
  ]->Belt.Array.concatMany
