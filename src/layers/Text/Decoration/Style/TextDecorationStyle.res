@genType
type t = [
  | #solid
  | #initial
]
// | #unset

let args: array<t> = [
  #solid,
  // #double,
  // #dotted,
  // #dashed,
  // #wavy,
  // #inherit,
  #initial,
  // #unset,
]

type r<'a> = {
  solid: 'a,
  // double: 'a,
  // dotted: 'a,
  // dashed: 'a,
  // wavy: 'a,
  // inherit: 'a,
  initial: 'a,
  // unset: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type output = {textDecorationStyle: value}
type resolve = value => output
type make = (. t) => string

let initial: t = #solid

let options = {
  solid: "solid",
  // double: "double",
  // dotted: "dotted",
  // dashed: "dashed",
  // wavy: "wavy",
  // inherit: "inherit",
  initial: "initial",
  // unset: "unset",
}
