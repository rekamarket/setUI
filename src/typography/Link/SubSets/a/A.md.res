let { displayName, parentName, tag, list } = module(AMeta)

let make = R.title(
  ~name = displayName,
  ~group = parentName,
) ++ "\n" ++ R.header(. ~title = displayName)++ list(
  ~tag = displayName,
  ~children = `Инлайновая ссылка` -> Some,
  ~props = [
    ("href", String("https://sberbusiness.ru")),
  ] -> Some,
) -> Belt.Array.reduce("", (acc, curr) => acc ++ "\n" ++ R.section(
  ~tag = displayName,
  ~title = curr.title,
  ~description = curr.description,
  ~root = curr.root,
  ~imports = None,
))
