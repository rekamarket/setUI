@genType
type t = [
  | #none
  | #xsmall
  | #small
  | #medium
  | #large
  | #xlarge
  | #xxlarge
  | #pill
  | #circle
]

let args: array<t> = [#none, #xsmall, #small, #medium, #large, #xlarge, #xxlarge, #pill, #circle]

type r<'a> = {
  none: 'a,
  xsmall: 'a,
  small: 'a,
  medium: 'a,
  large: 'a,
  xlarge: 'a,
  xxlarge: 'a,
  pill: 'a,
  circle: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type output = {borderRadius: value}
type resolve = value => output
type make = (. t) => string

let initial: t = #none

let options = {
  none: "0px",
  xsmall: "4px",
  small: "6px",
  medium: "8px",
  large: "12px",
  xlarge: "16px",
  xxlarge: "20px",
  pill: "9999px",
  circle: "50%",
}
