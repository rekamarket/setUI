let make: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) => [
  {
    title: FrameSizeMeta.name,
    description: FrameSizeMeta.description,
    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,
      children: R.block(.
        ~tag,
        ~children,
        ~key=FrameSizeMeta.name,
        ~values=FrameSizeMeta.args->R.toStringArray,
        ~staticProps=switch props {
        | Some(a) =>
          a
          ->Belt.Array.keep(e => {
            let (key, _) = e
            key != FrameSizeMeta.name
          })
          ->Some
        | None => None
        },
      )->Some,
    }),
  },
]
