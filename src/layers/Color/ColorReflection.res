@genType
type t = [
  | #primary
  | #secondary
  | #black
  | #white
]

let args: array<t> = [#primary, #secondary, #black, #white]

type r<'a> = {
  primary: 'a,
  secondary: 'a,
  black: 'a,
  white: 'a,
}

type variant = r<string>
type make = (. t) => string

let initial: t = #primary
