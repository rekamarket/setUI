open R
open Playroom

let displayName = "Heading"
let parentName = None
let component = "Heading"
let description = "Heading"

let tag = HTMLSet([
  #h1,
  #h2,
  #h3,
  #h4,
  #h5,
  #h6,
])

let list: (
  ~tag: string,
  ~children: option<string>,
  ~props: option<array<R.prop>>,
) => array<R.t> = (~tag, ~children, ~props) => [
  [
    {
      title: "Semantics",
      description: `Можно указать уровни - ["1", "2", "3", "4", "5", "6"]` -> Some,

      root: Root({
        tag: R.defaultTag,
        props: R.defaultProps,

        children: R.block(.
          ~tag,
          ~children,
          ~key = "level",
          ~values = [Number(1), Number(2), Number(3), Number(4), Number(5), Number(6)],
          ~staticProps = switch props {
          | Some(a) => a -> Belt.Array.keep(e => {
              let (key, _) = e
              key != "level"
            }) -> Some
          | None => None
          },
        ) -> Some,
      }),
    },
  ],

  ColorLayerMeta.make(~tag, ~children, ~props),
  FontLayerMeta.make(~tag, ~children, ~props),
] -> Belt.Array.concatMany
