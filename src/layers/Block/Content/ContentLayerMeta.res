let make: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) => [
  {
    title: TextAlignMeta.name,
    description: TextAlignMeta.description,
    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,
      children: R.block(.
        ~tag,
        ~children,
        ~key=TextAlignMeta.name,
        ~values=TextAlignMeta.args->R.toStringArray,
        ~staticProps=switch props {
        | Some(a) =>
          a
          ->Belt.Array.keep(e => {
            let (key, _) = e
            key != TextAlignMeta.name
          })
          ->Some
        | None => None
        },
      )->Some,
    }),
  },
]
