@genType
type t = [
  | #maxContent
  | #minContent
  | #fitContent
  | #auto
  | #fillAvailable
]

let args: array<t> = [#maxContent, #minContent, #fitContent, #auto, #fillAvailable]

type r<'a> = {
  maxContent: 'a,
  minContent: 'a,
  fitContent: 'a,
  auto: 'a,
  fillAvailable: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type output = {inlineSize: value}
type resolve = value => output
type make = (. t) => string

let initial: t = #fitContent

let options = {
  maxContent: "max-content",
  minContent: "min-content",
  fitContent: "fit-content",
  auto: "auto",
  fillAvailable: "100%",
}
