@genType
type t = [
  | #thin
  | #bold
  | #initial
]
// | #unset

let args: array<t> = [
  // #auto,
  // #fromFont,
  #thin,
  // #light,
  // #medium,
  #bold,
  // #inherit,
  #initial,
  // #unset,
]

type r<'a> = {
  // auto: 'a,
  // fromFont: 'a,
  thin: 'a,
  // light: 'a,
  // medium: 'a,
  bold: 'a,
  // inherit: 'a,
  initial: 'a,
  // unset: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type output = {textDecorationThickness: value}
type resolve = value => output
type make = (. t) => string

let initial: t = #initial

let options = {
  // auto: "auto",
  // fromFont: "fromFont",

  thin: "1px",
  // light: "2px",
  // medium: "4px",
  bold: "3px",
  // inherit: "inherit",
  initial: "initial",
  // unset: "unset",
}
