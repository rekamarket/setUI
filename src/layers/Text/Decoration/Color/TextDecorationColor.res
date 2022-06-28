@genType
type t = [
  | #currentColor
  | #primary
  | #secondary
  | #black
  | #white
]

let args: array<t> = [#currentColor, #primary, #secondary, #black, #white]

type r<'a> = {
  currentColor: 'a,
  primary: 'a,
  secondary: 'a,
  black: 'a,
  white: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type output = {textDecorationColor: value}
type resolve = value => output
type make = (. t) => string

let initial: t = #currentColor

let options = {
  currentColor: "currentColor",
  primary: Theme.color.primary,
  secondary: Theme.color.secondary,
  black: Theme.color.black,
  white: Theme.color.white,
}
