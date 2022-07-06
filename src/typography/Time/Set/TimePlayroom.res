let {component, displayName, description, tag} = module(TimeMeta)

let make: array<Playroom.t> = [
  {
    group: displayName,
    name: Playroom.getName(~tag, ~description),
    code: Playroom.getCode(
      ~component,
      ~content=Some(description),
      ~props=list{("dateTime", String("2018-07-07T20:00:00"))},
    ),
  },
]
