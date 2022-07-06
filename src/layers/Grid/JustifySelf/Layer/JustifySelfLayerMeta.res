let make: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) => [
  {
    title: JustifySelfMeta.name,
    description: JustifySelfMeta.description,
    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,
      children: R.block(.
        ~tag,
        ~children,
        ~key=JustifySelfMeta.name,
        ~values=JustifySelfMeta.args->R.toStringArray,
        ~staticProps=switch props {
        | Some(a) =>
          a
          ->Belt.Array.keep(e => {
            let (key, _) = e
            key != JustifySelfMeta.name
          })
          ->Some
        | None => None
        },
      )->Some,
    }),
  },
]
