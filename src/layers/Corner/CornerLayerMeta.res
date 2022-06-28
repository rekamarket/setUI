let make: (
  ~tag: string,
  ~children: option<string>,
  ~props: option<array<R.prop>>,
) => array<R.t> = (~tag, ~children, ~props) => [
  {
    title: CornerRadiusMeta.name,
    description: CornerRadiusMeta.description,

    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,

      children: R.block(.
        ~tag,
        ~children,
        ~key = CornerRadiusMeta.name,
        ~values = CornerRadiusMeta.args -> R.toStringArray,
        ~staticProps = switch props {
        | Some(a) => a -> Belt.Array.keep(e => {
            let (key, _) = e
            key != CornerRadiusMeta.name
          }) -> Some
        | None => None
        },
      ) -> Some,
    }),
  },
]
