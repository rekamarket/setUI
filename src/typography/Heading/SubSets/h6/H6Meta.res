open R
open Playroom

let displayName = "H6"
let parentName = HeadingMeta.displayName->Some
let component = "H6"
let description = `Заголовок шестого уровня`

let tag = HTMLTag(#h6)

let list: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) =>
  [
    [
      {
        title: "Semantics",
        description: `Значение по умолчанию - 6; Можно указать уровни - ["1", "2", "3", "4", "5"]`->Some,
        root: Root({
          tag: R.defaultTag,
          props: R.defaultProps,
          children: R.block(.
            ~tag,
            ~children,
            ~key="level",
            ~values=[Number(1), Number(2), Number(3), Number(4), Number(5)],
            ~staticProps=switch props {
            | Some(a) =>
              a
              ->Belt.Array.keep(e => {
                let (key, _) = e
                key != "level"
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
    ContentLayerMeta.make(~tag, ~children, ~props),
    MarginLayerMeta.make(~tag, ~children, ~props),
    PaddingLayerMeta.make(~tag, ~children, ~props),
  ]->Belt.Array.concatMany
