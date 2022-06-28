let make: (
  ~tag: string,
  ~children: option<string>,
  ~props: option<array<R.prop>>,
) => array<R.t> = (~tag, ~children, ~props) => [
  // {
  //   title: FontFamilyMeta.name,
  //   description: FontFamilyMeta.description,

  //   root: Root({
  //     tag: R.defaultTag,
  //     props: R.defaultProps,

  //     children: R.block(.
  //       ~tag,
  //       ~children,
  //       ~key = FontFamilyMeta.name,
  //       ~values = FontFamilyMeta.args,
  //       ~staticProps = switch props {
  //       | Some(a) => a -> Belt.Array.keep(e => {
  //           let (key, _) = e
  //           key != FontFamilyMeta.name
  //         }) -> Some
  //       | None => None
  //       },
  //     ) -> Some,
  //   }),
  // },

  {
    title: FontSizeMeta.name,
    description: FontSizeMeta.description,

    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,

      children: R.block(.
        ~tag,
        ~children,
        ~key = FontSizeMeta.name,
        ~values = FontSizeMeta.args -> R.toStringArray,
        ~staticProps = switch props {
        | Some(a) => a -> Belt.Array.keep(e => {
            let (key, _) = e
            key != FontSizeMeta.name
          }) -> Some
        | None => None
        },
      ) -> Some,
    }),
  },

  // {
  //   title: FontStyleMeta.name,
  //   description: FontStyleMeta.description,

  //   root: Root({
  //     tag: R.defaultTag,
  //     props: R.defaultProps,

  //     children: R.block(.
  //       ~tag,
  //       ~children,
  //       ~key = FontStyleMeta.name,
  //       ~values = FontStyleMeta.args,
  //       ~staticProps = switch props {
  //       | Some(a) => a -> Belt.Array.keep(e => {
  //           let (key, _) = e
  //           key != FontStyleMeta.name
  //         }) -> Some
  //       | None => None
  //       },
  //     ) -> Some,
  //   }),
  // },

  {
    title: FontWeightMeta.name,
    description: FontWeightMeta.description,

    root: Root({
      tag: R.defaultTag,
      props: R.defaultProps,

      children: R.block(.
        ~tag,
        ~children,
        ~key = FontWeightMeta.name,
        ~values = FontWeightMeta.args -> R.toStringArray,
        ~staticProps = switch props {
        | Some(a) => a -> Belt.Array.keep(e => {
            let (key, _) = e
            key != FontWeightMeta.name
          }) -> Some
        | None => None
        },
      ) -> Some,
    }),
  },
]
