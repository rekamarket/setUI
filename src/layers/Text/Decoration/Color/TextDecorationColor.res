module TextDecorationColor = {
  let key = "textDecorationColor"

  @genType
  type t = [
    | #currentColor
    | #primary
    | #secondary
    | #black
    | #white
  ]

  let initial = #currentColor;

  type value = string;

  type options = {
    "currentColor": value,
    "primary": value,
    "secondary": value,
    "black": value,
    "white": value,
  };

  let options = {
    "currentColor": "currentColor",
    "primary": "#0078D4",
    "secondary": "#2B88D8",
    "black": "#000000",
    "white": "#FFFFFF",
  }

  type variant = {
    "currentColor": string,
    "primary": string,
    "secondary": string,
    "black": string,
    "white": string,
  };

  type output = { "textDecorationColor": value }
  type cssResolve = (value) => output
}
