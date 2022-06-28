let make: (
  ~tag: string,
  ~children: option<string>,
  ~props: option<array<R.prop>>,
) => array<R.t> = (~tag, ~children, ~props) => [
  {
    title: TextDecorationColorMeta.name,
    description: TextDecorationColorMeta.description,

    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,

      children: R.block(.
        ~tag,
        ~children,
        ~key = TextDecorationColorMeta.name,
        ~values = TextDecorationColorMeta.args -> R.toStringArray,
        ~staticProps = switch props {
        | Some(a) => a -> Belt.Array.keep(e => {
            let (key, _) = e
            key != TextDecorationColorMeta.name
          }) -> Some
        | None => None
        },
      ) -> Some,
    }),
  },

  {
    title: TextDecorationLineMeta.name,
    description: TextDecorationLineMeta.description,

    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,

      children: R.block(.
        ~tag,
        ~children,
        ~key = TextDecorationLineMeta.name,
        ~values = TextDecorationLineMeta.args -> R.toStringArray,
        ~staticProps = switch props {
        | Some(a) => a -> Belt.Array.keep(e => {
            let (key, _) = e
            key != TextDecorationLineMeta.name
          }) -> Some
        | None => None
        },
      ) -> Some,
    }),
  },

  {
    title: TextDecorationStyleMeta.name,
    description: TextDecorationStyleMeta.description,

    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,

      children: R.block(.
        ~tag,
        ~children,
        ~key = TextDecorationStyleMeta.name,
        ~values = TextDecorationStyleMeta.args -> R.toStringArray,
        ~staticProps = switch props {
        | Some(a) => a -> Belt.Array.keep(e => {
            let (key, _) = e
            key != TextDecorationStyleMeta.name
          }) -> Some
        | None => None
        },
      ) -> Some,
    }),
  },

  {
    title: TextDecorationThicknessMeta.name,
    description: TextDecorationThicknessMeta.description,

    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,

      children: R.block(.
        ~tag,
        ~children,
        ~key = TextDecorationThicknessMeta.name,
        ~values = TextDecorationThicknessMeta.args -> R.toStringArray,
        ~staticProps = switch props {
        | Some(a) => a -> Belt.Array.keep(e => {
            let (key, _) = e
            key != TextDecorationThicknessMeta.name
          }) -> Some
        | None => None
        },
      ) -> Some,
    }),
  },
]
