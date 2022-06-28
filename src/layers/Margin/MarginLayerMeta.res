let make: (
  ~tag: string,
  ~children: option<string>,
  ~props: option<array<R.prop>>,
) => array<R.t> = (~tag, ~children, ~props) => [
  {
    title: MarginBlockEndMeta.name,
    description: MarginBlockEndMeta.description,

    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,

      children: R.block(.
        ~tag,
        ~children,
        ~key = MarginBlockEndMeta.name,
        ~values = MarginBlockEndMeta.args -> R.toStringArray,
        ~staticProps = switch props {
        | Some(a) => a -> Belt.Array.keep(e => {
            let (key, _) = e
            key != MarginBlockEndMeta.name
          }) -> Some
        | None => None
        },
      ) -> Some,
    }),
  },

  {
    title: MarginBlockStartMeta.name,
    description: MarginBlockStartMeta.description,

    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,

      children: R.block(.
        ~tag,
        ~children,
        ~key = MarginBlockStartMeta.name,
        ~values = MarginBlockStartMeta.args -> R.toStringArray,
        ~staticProps = switch props {
        | Some(a) => a -> Belt.Array.keep(e => {
            let (key, _) = e
            key != MarginBlockStartMeta.name
          }) -> Some
        | None => None
        },
      ) -> Some,
    }),
  },

  {
    title: MarginInlineEndMeta.name,
    description: MarginInlineEndMeta.description,

    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,

      children: R.block(.
        ~tag,
        ~children,
        ~key = MarginInlineEndMeta.name,
        ~values = MarginInlineEndMeta.args -> R.toStringArray,
        ~staticProps = switch props {
        | Some(a) => a -> Belt.Array.keep(e => {
            let (key, _) = e
            key != MarginInlineEndMeta.name
          }) -> Some
        | None => None
        },
      ) -> Some,
    }),
  },

  {
    title: MarginInlineStartMeta.name,
    description: MarginInlineStartMeta.description,

    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,

      children: R.block(.
        ~tag,
        ~children,
        ~key = MarginInlineStartMeta.name,
        ~values = MarginInlineStartMeta.args -> R.toStringArray,
        ~staticProps = switch props {
        | Some(a) => a -> Belt.Array.keep(e => {
            let (key, _) = e
            key != MarginInlineStartMeta.name
          }) -> Some
        | None => None
        },
      ) -> Some,
    }),
  },
]
