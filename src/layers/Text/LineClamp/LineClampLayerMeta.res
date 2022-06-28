// let make: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
//   ~tag,
//   ~children,
//   ~props,
// ) => [
//   {
//     title: LineClampMeta.name,
//     description: LineClampMeta.description,
//     root: Root({
//       tag: R.defaultTag,
//       props: R.defaultProps,
//       children: R.block(.
//         ~tag,
//         ~children,
//         ~key=LineClampMeta.name,
//         ~values=LineClampMeta.args->R.toStringArray,
//         ~staticProps=switch props {
//         | Some(a) =>
//           a
//           ->Belt.Array.keep(e => {
//             let (key, _) = e
//             key != LineClampMeta.name
//           })
//           ->Some
//         | None => None
//         },
//       )->Some,
//     }),
//   },
// ]

