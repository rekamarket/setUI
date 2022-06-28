@genType
type t = [
  | #none
  | #uppercase
  | #lowercase
  | #capitalize
  // | #fullWidth
  // | #fullSizeKana
]

let args: array<t> = [
  #none,
  #uppercase,
  #lowercase,
  #capitalize,
  // #fullWidth,
  // #fullSizeKana,
]

type r<'a> = {
  none: 'a,
  uppercase: 'a,
  lowercase: 'a,
  capitalize: 'a,
  // fullWidth: 'a,
  // fullSizeKana: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type output = { textTransform: value }
type resolve = (value) => output
type make = (. t) => string

let initial: t = #none

let options = {
  none: "none",
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  // fullWidth: "full-width",
  // fullSizeKana: "full-size-kana",
}
