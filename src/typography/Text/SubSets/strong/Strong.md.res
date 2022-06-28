open R

let { displayName, parentName, tag, list } = module(StrongMeta)

let make = R.title(
  ~name = displayName,
  ~group = parentName,
) ++ "\n" ++ R.header(. ~title = displayName)++ list(
  ~tag = displayName,
  ~children = `Важный текст` -> Some,
  ~props = None,
) -> Belt.Array.reduce("", (acc, curr) => acc ++ "\n" ++ R.section(
  ~tag = displayName,
  ~title = curr.title,
  ~description = curr.description,
  ~root = curr.root,
  ~imports = None,
))
