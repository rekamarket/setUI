@genType
type t = [
| #normal
]

let args: array<t> = [
  #normal,
]

type r<'a> = {
  normal: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type output = { fontStyle: value }
type resolve = (value) => output
type make = (. t) => string

let initial: t = #normal

let options = {
  normal: "normal",
}
