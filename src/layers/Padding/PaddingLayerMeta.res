let make: (
  ~tag: string,
  ~children: option<string>,
  ~props: option<array<R.prop>>,
) => array<R.t> = (~tag, ~children, ~props) => [
  {
    title: PaddingBlockEndMeta.name,
    description: PaddingBlockEndMeta.description,

    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,

      children: R.block(.
        ~tag,
        ~children,
        ~key = PaddingBlockEndMeta.name,
        ~values = PaddingBlockEndMeta.args -> R.toStringArray,
        ~staticProps = switch props {
        | Some(a) => a -> Belt.Array.keep(e => {
            let (key, _) = e
            key != PaddingBlockEndMeta.name
          }) -> Some
        | None => None
        },
      ) -> Some,
    }),
  },

  {
    title: PaddingBlockStartMeta.name,
    description: PaddingBlockStartMeta.description,

    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,

      children: R.block(.
        ~tag,
        ~children,
        ~key = PaddingBlockStartMeta.name,
        ~values = PaddingBlockStartMeta.args -> R.toStringArray,
        ~staticProps = switch props {
        | Some(a) => a -> Belt.Array.keep(e => {
            let (key, _) = e
            key != PaddingBlockStartMeta.name
          }) -> Some
        | None => None
        },
      ) -> Some,
    }),
  },

  {
    title: PaddingInlineEndMeta.name,
    description: PaddingInlineEndMeta.description,

    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,

      children: R.block(.
        ~tag,
        ~children,
        ~key = PaddingInlineEndMeta.name,
        ~values = PaddingInlineEndMeta.args -> R.toStringArray,
        ~staticProps = switch props {
        | Some(a) => a -> Belt.Array.keep(e => {
            let (key, _) = e
            key != PaddingInlineEndMeta.name
          }) -> Some
        | None => None
        },
      ) -> Some,
    }),
  },

  {
    title: PaddingInlineStartMeta.name,
    description: PaddingInlineStartMeta.description,

    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,

      children: R.block(.
        ~tag,
        ~children,
        ~key = PaddingInlineStartMeta.name,
        ~values = PaddingInlineStartMeta.args -> R.toStringArray,
        ~staticProps = switch props {
        | Some(a) => a -> Belt.Array.keep(e => {
            let (key, _) = e
            key != PaddingInlineStartMeta.name
          }) -> Some
        | None => None
        },
      ) -> Some,
    }),
  },
]
