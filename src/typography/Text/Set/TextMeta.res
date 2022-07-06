open R
open Playroom

let displayName = "Text"
let parentName = None
let component = "Text"
let description = "Text content"

let tag = HTMLSet([#abbr, #b, #data, #dd, #dt, #i, #small, #span, #strong])

let list: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) =>
  [
    [
      {
        title: "Semantics",
        description: `Можно указать теги - ["abbr", "b", "data", "dd", "dt", "i", "small", "span", "strong"]`->Some,
        root: Root({
          tag: R.defaultTag,
          props: R.defaultProps,
          children: R.block(.
            ~tag,
            ~children,
            ~key="tag",
            ~values=[
              "abbr",
              "b",
              "data",
              "dd",
              "dt",
              "i",
              "small",
              "span",
              "strong",
            ]->R.toStringArray,
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
