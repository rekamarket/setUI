open R
open Playroom

let displayName = "Data"
let parentName = TextMeta.displayName->Some
let component = "Data"
let description = "Data"
let tag = HTMLTag(#data)

let list: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) =>
  [
    [
      {
        title: "Semantics",
        description: `Значение по умолчанию - data; Можно указать теги - ["abbr", "b", "dd", "dt", "i", "small", "span", "strong"]`->Some,
        root: Root({
          tag: R.defaultTag,
          props: R.defaultProps,
          children: R.block(.
            ~tag,
            ~children,
            ~key="tag",
            ~values=["abbr", "b", "dd", "dt", "i", "small", "span", "strong"]->R.toStringArray,
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
