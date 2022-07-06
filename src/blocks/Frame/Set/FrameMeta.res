open R
open Playroom

let displayName = "Frame"
let parentName = None
let component = "Frame"
let description = "Frame Content"

let tag = HTMLSet([#div, #section])

let list: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) =>
  [
    [
      {
        title: "Semantics",
        description: `Значение по умолчанию - section; Можно переопределить как "div"`->Some,
        root: Root({
          tag: R.defaultTag,
          props: R.defaultProps,
          children: R.block(.
            ~tag,
            ~children,
            ~key="tag",
            ~values=["div"]->R.toStringArray,
            ~staticProps=switch props {
            | Some(a) =>
              a
              ->Belt.Array.keep(e => {
                let (key, _) = e
                key != "tag"
              })
              ->Some
            | None => None
            },
          )->Some,
        }),
      },
    ],
    FrameLayerMeta.make(~tag, ~children, ~props),
    ContentLayerMeta.make(~tag, ~children, ~props),
    ColorLayerMeta.make(~tag, ~children, ~props),
    MarginLayerMeta.make(~tag, ~children, ~props),
    PaddingLayerMeta.make(~tag, ~children, ~props),
  ]->Belt.Array.concatMany
