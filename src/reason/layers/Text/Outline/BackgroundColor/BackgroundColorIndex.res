module BackgroundColorIndex = {
  type value = string;

  type options = {
    "primary": value,
    "secondary": value,
    "black": value,
    "white": value,
    "transparent": value,
    "initial": value,
  };

  type t = [
    | #primary
    | #secondary
    | #black
    | #white
    | #transparent
    | #initial
  ]

  type variant = {
    "primary": string,
    "secondary": string,
    "black": string,
    "white": string,
    "transparent": string,
    "initial": string,
  };

  @genType
  type i = { "backgroundColor": t }

  type output = { "backgroundColor": value }
  type cssResolve = (value) => output
  let cssResolve = (value) => {{ "backgroundColor": value }};

  @genType
  let initial = #initial;

  let options = {
    "primary": "#0078D4",
    "secondary": "#2B88D8",
    "black": "#000000",
    "white": "#FFFFFF",
    "transparent": "transparent",
    "initial": "initial",
  }
}
