open R
open Playroom

let displayName = "Block"
let parentName = None
let component = "Block"
let description = "Block Content"

let tag = HTMLTag(#div)

let list: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) =>
  [
    [
      {
        title: "Semantics",
        description: `Component resolves to 'div'; There is no way to redefine it rn`->Some,
        root: Root({
          tag: R.defaultTag,
          props: R.defaultProps,
          children: R.statelessComponent(~tag, ~children=description)->Some,
        }),
      },
    ],
    MarginLayerMeta.make(~tag, ~children, ~props),
    PaddingLayerMeta.make(~tag, ~children, ~props),
  ]->Belt.Array.concatMany
