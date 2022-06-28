@genType
type t = [
  | #none
  | #s
  | #m
  | #l
]

let args: array<t> = [#none, #s, #m, #l]

type r<'a> = {
  none: 'a,
  s: 'a,
  m: 'a,
  l: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type output = {@as("--marker-size") size: string}
type resolve = value => output
type make = (. t) => string

let initial: t = #none

let options = {
  none: "0px",
  s: "8px",
  m: "16px",
  l: "24px",
}
