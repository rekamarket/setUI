open R

let {displayName, parentName, tag, list, description} = module(TimeMeta)

let make =
  R.title(~name=displayName, ~group=parentName) ++
  "\n" ++
  R.header(. ~title=displayName) ++
  list(
    ~tag=displayName,
    ~children=description->Some,
    ~props=[("dateTime", String("2018-07-07T20:00:00"))]->Some,
  )->Belt.Array.reduce("", (acc, curr) =>
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
