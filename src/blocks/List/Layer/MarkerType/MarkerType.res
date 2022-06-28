@genType
type t = [
  | #none
  | #bullet
  | #circle
]

let args: array<t> = [#none, #bullet, #circle]

type r<'a> = {
  none: 'a,
  bullet: 'a,
  circle: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type output = {@as("--marker-type") symbol: string}
type resolve = value => output
type make = (. t) => string

let initial: t = #none

let options = {
  none: "none",
  bullet: `"•"`, // U+2022 - Bullet
  circle: `"●"`, // U+25CF - Black Circle
}
