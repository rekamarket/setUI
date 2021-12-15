module Color = {
  let key = "color"

  @genType
  type t = [
    | #primary
    | #secondary
    | #black
    | #white
  ]

  let initial = #primary;

  type value = string;

  type options = {
    "primary": value,
    "secondary": value,
    "black": value,
    "white": value,
  };

  let options = {
    "primary": "#0078D4",
    "secondary": "#2B88D8",
    "black": "#000000",
    "white": "#FFFFFF",
  };

  type variant = {
    "primary": string,
    "secondary": string,
    "black": string,
    "white": string,
  };

  type output = { "color": value }
  type cssResolve = (value) => output
}
