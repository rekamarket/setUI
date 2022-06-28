@genType
type t = [
  | #none
  | #1
  | #2
  | #3
  | #4
  | #5
  | #6
]

let args: array<t> = [#none, #1, #2, #3, #4, #5, #6]

type r<'a> = {
  none: 'a,
  \"1": 'a,
  \"2": 'a,
  \"3": 'a,
  \"4": 'a,
  \"5": 'a,
  \"6": 'a,
}

type value = {
  overflow: string,
  display: string,
  @as("-webkit-line-clamp") clamp: string,
  @as("-webkit-box-orient") orient: string,
}
type options = r<value>
type variant = r<string>
type output = {
  overflow: string,
  display: string,
  @as("-webkit-line-clamp") clamp: string,
  @as("-webkit-box-orient") orient: string,
}
type resolve = value => output
type make = (. t) => string

let initial: t = #none

let options: options = {
  none: {
    overflow: "initial",
    display: "initial",
    clamp: "initial",
    orient: "initial",
  },
  \"1": {
    overflow: "hidden",
    display: "-webkit-box",
    clamp: "1",
    orient: "vertical",
  },
  \"2": {
    overflow: "hidden",
    display: "-webkit-box",
    clamp: "2",
    orient: "vertical",
  },
  \"3": {
    overflow: "hidden",
    display: "-webkit-box",
    clamp: "3",
    orient: "vertical",
  },
  \"4": {
    overflow: "hidden",
    display: "-webkit-box",
    clamp: "4",
    orient: "vertical",
  },
  \"5": {
    overflow: "hidden",
    display: "-webkit-box",
    clamp: "5",
    orient: "vertical",
  },
  \"6": {
    overflow: "hidden",
    display: "-webkit-box",
    clamp: "6",
    orient: "vertical",
  },
}
