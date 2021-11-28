module Color = {
  type value = string;

  type options = {
    "primary": value,
    "secondary": value,
    "black": value,
    "white": value,
  };

  type t = [
    | #primary
    | #secondary
    | #black
    | #white
  ]

  type variant = {
    "primary": string,
    "secondary": string,
    "black": string,
    "white": string,
  };

  @genType
  type i = { "color": t }

  type output = { "color": value }
  type cssResolve = (value) => output
  let cssResolve = (value) => {{ "color": value }};

  @genType
  let initial = #primary;

  @genType
  let options = {
    "primary": "#0078D4",
    "secondary": "#2B88D8",
    "black": "#000000",
    "white": "#FFFFFF",
  };
}
