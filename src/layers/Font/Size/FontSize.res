@genType
type t = [
  | #none
  | #"5xs"
  | #"4xs"
  | #"3xs"
  | #"2xs"
  | #xs
  | #s
  | #m
  | #l
  | #xl
  | #"2xl"
  | #"3xl"
  | #"4xl"
  | #"5xl"
]

let args: array<t> = [
  #none,
  #"5xs",
  #"4xs",
  #"3xs",
  #"2xs",
  #xs,
  #s,
  #m,
  #l,
  #xl,
  #"2xl",
  #"3xl",
  #"4xl",
  #"5xl",
]

type r<'a> = {
  none: 'a,
  \"5xs": 'a,
  \"4xs": 'a,
  \"3xs": 'a,
  \"2xs": 'a,
  xs: 'a,
  s: 'a,
  m: 'a,
  l: 'a,
  xl: 'a,
  \"2xl": 'a,
  \"3xl": 'a,
  \"4xl": 'a,
  \"5xl": 'a,
}

type value = int
type options = r<value>
type variant = r<string>

type output = {
  transform: string,
  fontSize: string,
  lineHeight: string,
  @as(":before") before: CapSize.before,
  @as(":after") after: CapSize.after,
}

type resolve = value => output
type make = (. t) => string

let initial: t = #m

let options = {
  none: 0,
  \"5xs": 10,
  \"4xs": 12,
  \"3xs": 14,
  \"2xs": 15,
  xs: 16,
  s: 18,
  m: 20,
  l: 24,
  xl: 26,
  \"2xl": 30,
  \"3xl": 38,
  \"4xl": 46,
  \"5xl": 60,
}

let context: React.Context.t<option<t>> = React.createContext(None)
let useFontSize = () => React.useContext(context)
let provider = React.Context.provider(context)

@react.component
let component = (~value: option<t>, ~children) =>
  React.createElement(provider, {"value": value, "children": children})
