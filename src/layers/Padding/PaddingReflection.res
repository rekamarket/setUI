@genType
type t = [
| #size0
| #size50
| #size100
| #size150
| #size200
| #size250
| #size300
| #size350
| #size400
| #size450
| #size500
| #size550
| #size600
| #size700
| #size800
]

let args: array<t> = [
  #size0,
  #size50,
  #size100,
  #size150,
  #size200,
  #size250,
  #size300,
  #size350,
  #size400,
  #size450,
  #size500,
  #size550,
  #size600,
  #size700,
  #size800,
]

type r<'a> = {
  size0: 'a,
  size50: 'a,
  size100: 'a,
  size150: 'a,
  size200: 'a,
  size250: 'a,
  size300: 'a,
  size350: 'a,
  size400: 'a,
  size450: 'a,
  size500: 'a,
  size550: 'a,
  size600: 'a,
  size700: 'a,
  size800: 'a,
}

type value = string
type options = r<value>
type variant = r<string>
type make = (. t) => string

let initial: t = #size0

let options = {
  size0: "0px",
  size50: "4px",
  size100: "8px",
  size150: "12px",
  size200: "16px",
  size250: "20px",
  size300: "24px",
  size350: "28px",
  size400: "32px",
  size450: "36px",
  size500: "40px",
  size550: "44px",
  size600: "48px",
  size700: "56px",
  size800: "64px",
}
