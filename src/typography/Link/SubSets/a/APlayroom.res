let { component, displayName, description, tag } = module(AMeta)

let make: array<Playroom.t> = [
  {
    group: displayName,
    name: Playroom.getName(~tag, ~description),
    code: Playroom.getCode(
      ~component,
      ~content = Some(description),
      ~props = list{
        ("href", String("http://google.com")),
      },
    ),
  },
]
