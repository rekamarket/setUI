@genType
type t = [
  | #row
  | #rowReverse
  | #column
  | #columnReverse
]

let args: array<t> = [#row, #rowReverse, #column, #columnReverse]

type r<'a> = {
  row: 'a,
  rowReverse: 'a,
  column: 'a,
  columnReverse: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type output = {flexDirection: value}
type resolve = value => output
type make = (. t) => string

let initial: t = #row

let options = {
  row: "row",
  rowReverse: "row-reverse",
  column: "column",
  columnReverse: "column-reverse",
}
