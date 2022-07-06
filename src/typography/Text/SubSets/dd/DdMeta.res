open R
open Playroom

let displayName = "Definition"
let parentName = TextMeta.displayName->Some
let component = "Definition"
let description = "Definition"
let tag = HTMLTag(#dd)

let list: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) =>
  [
    [
      {
        title: "Semantics",
        description: `Значение по умолчанию - dd; Можно указать теги - ["abbr", "b", "data", "dt", "i", "small", "span", "strong"]`->Some,
        root: Root({
          tag: R.defaultTag,
          props: R.defaultProps,
          children: R.block(.
            ~tag,
            ~children,
            ~key="tag",
            ~values=["abbr", "b", "data", "dt", "i", "small", "span", "strong"]->R.toStringArray,
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
    FontLayerMeta.make(~tag, ~children, ~props),
    TextTransformLayerMeta.make(~tag, ~children, ~props),
  ]->Belt.Array.concatMany
