let make: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) => [
  {
    title: InlineSizeMeta.name,
    description: InlineSizeMeta.description,
    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,
      children: R.block(.
        ~tag,
        ~children,
        ~key=InlineSizeMeta.name,
        ~values=InlineSizeMeta.args->R.toStringArray,
        ~staticProps=switch props {
        | Some(a) =>
          a
          ->Belt.Array.keep(e => {
            let (key, _) = e
            key != InlineSizeMeta.name
          })
          ->Some
        | None => None
        },
      )->Some,
    }),
  },
]
