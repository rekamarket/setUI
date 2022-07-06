open R

let {displayName, parentName, tag, list, description} = module(AbbrMeta)

let make =
  R.title(~name=displayName, ~group=parentName) ++
  "\n" ++
  R.header(. ~title=displayName) ++
  list(~tag=displayName, ~children=description->Some, ~props=None)->Belt.Array.reduce("", (
    acc,
    curr,
  ) =>
    acc ++
    "\n" ++
    R.section(
      ~tag=displayName,
      ~title=curr.title,
      ~description=curr.description,
      ~root=curr.root,
      ~imports=None,
    )
  )
