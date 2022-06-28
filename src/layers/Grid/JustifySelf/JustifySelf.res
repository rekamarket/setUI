@genType
type t = [
  | #auto
  | #normal
  | #stretch
  | #center
  | #start
  | #end
  | #baseline
]

let args: array<t> = [#auto, #normal, #stretch, #center, #start, #end, #baseline]

type r<'a> = {
  auto: 'a,
  normal: 'a,
  stretch: 'a,
  center: 'a,
  start: 'a,
  end: 'a,
  baseline: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type output = {justifySelf: value}
type resolve = value => output
type make = (. t) => string

let initial: t = #auto

let options = {
  auto: "auto",
  normal: "normal",
  stretch: "stretch",
  center: "center",
  start: "start",
  end: "end",
  baseline: "baseline",
}
