let make: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) => [
  {
    title: MarkerGapMeta.name,
    description: MarkerGapMeta.description,
    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,
      children: R.block(.
        ~tag,
        ~children,
        ~key=MarkerGapMeta.name,
        ~values=MarkerGapMeta.args->R.toStringArray,
        ~staticProps=switch props {
        | Some(a) =>
          a
          ->Belt.Array.keep(e => {
            let (key, _) = e
            key != MarkerGapMeta.name
          })
          ->Some
        | None => None
        },
      )->Some,
    }),
  },
  {
    title: MarkerPositionMeta.name,
    description: MarkerPositionMeta.description,
    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,
      children: R.block(.
        ~tag,
        ~children,
        ~key=MarkerPositionMeta.name,
        ~values=MarkerPositionMeta.args->R.toStringArray,
        ~staticProps=switch props {
        | Some(a) =>
          a
          ->Belt.Array.keep(e => {
            let (key, _) = e
            key != MarkerPositionMeta.name
          })
          ->Some
        | None => None
        },
      )->Some,
    }),
  },
  {
    title: MarkerSizeMeta.name,
    description: MarkerSizeMeta.description,
    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,
      children: R.block(.
        ~tag,
        ~children,
        ~key=MarkerSizeMeta.name,
        ~values=MarkerSizeMeta.args->R.toStringArray,
        ~staticProps=switch props {
        | Some(a) =>
          a
          ->Belt.Array.keep(e => {
            let (key, _) = e
            key != MarkerSizeMeta.name
          })
          ->Some
        | None => None
        },
      )->Some,
    }),
  },
  {
    title: MarkerTypeMeta.name,
    description: MarkerTypeMeta.description,
    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,
      children: R.block(.
        ~tag,
        ~children,
        ~key=MarkerTypeMeta.name,
        ~values=MarkerTypeMeta.args->R.toStringArray,
        ~staticProps=switch props {
        | Some(a) =>
          a
          ->Belt.Array.keep(e => {
            let (key, _) = e
            key != MarkerTypeMeta.name
          })
          ->Some
        | None => None
        },
      )->Some,
    }),
  },
]
