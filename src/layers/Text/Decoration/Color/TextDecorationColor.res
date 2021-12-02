module TextDecorationColor = {
  type value = string;

  type options = {
    "currentColor": value,
    "primary": value,
    "secondary": value,
    "black": value,
    "white": value,
  };

  @genType
  type t = [
    | #currentColor
    | #primary
    | #secondary
    | #black
    | #white
  ]

  type variant = {
    "currentColor": string,
    "primary": string,
    "secondary": string,
    "black": string,
    "white": string,
  };

  type i = { "textDecorationColor": t }

  type output = { "textDecorationColor": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "textDecorationColor": value }};

  let initial = #currentColor;

  let options = {
    "currentColor": "currentColor",
    "primary": "#0078D4",
    "secondary": "#2B88D8",
    "black": "#000000",
    "white": "#FFFFFF",
  }
}
