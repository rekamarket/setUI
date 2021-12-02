module Color = {
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

  type variant = {
    "primary": string,
    "secondary": string,
    "black": string,
    "white": string,
  };

  let options = {
    "primary": "#0078D4",
    "secondary": "#2B88D8",
    "black": "#000000",
    "white": "#FFFFFF",
  };

  type output = { "color": value }
  type cssResolve = (value) => output
}
