open R
open Playroom

let displayName = "BlockQuote"
let parentName = None
let component = "BlockQuote"
let description = "BlockQuote"

let tag = HTMLSet([#div, #blockquote])

let list: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) =>
  [
    [
      {
        title: "Semantics",
        description: `Значение по умолчанию - blockquote; Можно переопределить как "div"`->Some,
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
    ColorLayerMeta.make(~tag, ~children, ~props),
    MarginLayerMeta.make(~tag, ~children, ~props),
    PaddingLayerMeta.make(~tag, ~children, ~props),
  ]->Belt.Array.concatMany
