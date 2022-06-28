@genType
type t = [
  | #center
  | #start
  | #end
  | #initial
]

let args: array<t> = [#center, #start, #end, #initial]

type r<'a> = {
  center: 'a,
  start: 'a,
  end: 'a,
  initial: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type output = {textAlign: value}
type resolve = value => output
type make = (. t) => string

let initial: t = #start

let options = {
  center: "center",
  start: "start",
  end: "end",
  initial: "initial",
}
