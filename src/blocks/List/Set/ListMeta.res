open R
open Playroom

let displayName = "List"
let parentName = None
let component = "List"
let description = "List content"

let tag = HTMLSet([#div, #ul, #ol])

let list: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) =>
  [
    [
      {
        title: "Semantics",
        description: `Можно указать теги - ["div", "ul", "ol"]`->Some,
        root: Root({
          tag: R.defaultTag,
          props: R.defaultProps,
          children: R.block(.
            ~tag,
            ~children,
            ~key="tag",
            ~values=["div", "ul", "ol"]->R.toStringArray,
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
    MarkerLayerMeta.make(~tag, ~children, ~props),
    ColorLayerMeta.make(~tag, ~children, ~props),
    FontLayerMeta.make(~tag, ~children, ~props),
  ]->Belt.Array.concatMany
