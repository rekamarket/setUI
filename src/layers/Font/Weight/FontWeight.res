@genType
type t = [
  | #regular
  | #semiBold
  | #bold
]

let args: array<t> = [#regular, #semiBold]

type r<'a> = {
  regular: 'a,
  semiBold: 'a,
  bold: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type output = {fontWeight: value}
type resolve = value => output
type make = (. t) => string

let initial: t = #regular

let options = {
  regular: "500",
  semiBold: "600",
  bold: "700",
}

let context: React.Context.t<option<t>> = React.createContext(None)
let useFontWeight = () => React.useContext(context)
let provider = React.Context.provider(context)

@react.component
let component = (~value: option<t>, ~children) =>
  React.createElement(provider, {"value": value, "children": children})
