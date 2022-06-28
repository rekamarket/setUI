@genType
type t = [
  | #inside
  | #outside
]

let args: array<t> = [#inside, #outside]

type r<'a> = {
  inside: 'a,
  outside: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type output = {@as("--marker-position") position: string}
type resolve = value => output
type make = (. t) => string

let initial: t = #inside

let options = {
  inside: "inside",
  outside: "outside",
}
