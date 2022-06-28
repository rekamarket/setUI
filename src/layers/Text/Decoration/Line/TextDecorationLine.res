@genType
type t = [
  | #none
  | #underline
  | #overline
  | #lineThrough
  // | #blink
  // | #overline_lineThrough
  // | #overline_underline
  // | #lineThrough_underline
  // | #overline_lineThrough_underline
  // | #inherit
  // | #initial
  // | #unset
]

let args: array<t> = [
  #none,
  #underline,
  #overline,
  #lineThrough,
  // #blink,
  // #overline_lineThrough,
  // #overline_underline,
  // #lineThrough_underline,
  // #overline_lineThrough_underline,
  // #inherit,
  // #initial,
  // #unset,
]

type r<'a> = {
  none: 'a,
  underline: 'a,
  overline: 'a,
  lineThrough: 'a,
  // blink: 'a,
  // overline_lineThrough: 'a,
  // overline_underline: 'a,
  // lineThrough_underline: 'a,
  // overline_lineThrough_underline: 'a,
  // inherit: 'a,
  // initial: 'a,
  // unset: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type output = { textDecorationLine: value }
type resolve = (value) => output
type make = (. t) => string

let initial: t = #none

let options = {
  none: "none",
  underline: "underline",
  overline: "overline",
  lineThrough: "line-through",
  // blink: "blink",
  // overline_lineThrough: "overline line-through",
  // overline_underline: "overline underline",
  // lineThrough_underline: "line-through underline",
  // overline_lineThrough_underline: "overline line-through underline",
  // inherit: "inherit",
  // initial: "initial",
  // unset: "unset",
}
