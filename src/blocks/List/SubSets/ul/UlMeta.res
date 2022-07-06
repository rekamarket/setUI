open R
open Playroom

let displayName = "UnorderedList"
let parentName = ListMeta.displayName->Some
let component = "UnorderedList"
let description = "UnorderedList content"
let tag = HTMLTag(#ul)

let list: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) =>
  [
    [
      {
        title: "Semantics",
        description: `Значение по умолчанию - ul; Можно указать теги - ["div", "ol"]`->Some,
        root: Root({
          tag: R.defaultTag,
          props: R.defaultProps,
          children: R.block(.
            ~tag,
            ~children,
            ~key="tag",
            ~values=["div", "ol"]->R.toStringArray,
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
