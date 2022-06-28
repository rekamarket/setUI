open Playroom

let displayName = "UnorderedList"
let parentName = ListMeta.displayName->Some
let component = "UnorderedList"
let description = "UnorderedList"
let tag = HTMLTag(#ul)

let list: (~tag: string, ~children: option<string>, ~props: option<array<R.prop>>) => array<R.t> = (
  ~tag,
  ~children,
  ~props,
) => [ColorLayerMeta.make(~tag, ~children, ~props)]->Belt.Array.concatMany
