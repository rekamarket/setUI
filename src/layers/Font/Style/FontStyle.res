module FontStyle = {
  let key = "fontStyle"

  @genType
  type t = [
    | #normal
    | #italic
    | #oblique
    | #inherit
    | #initial
    | #unset
  ]

  let initial = #normal;

  type value = string;

  type options = {
    "normal": value,
    "italic": value,
    "oblique": value,
    "inherit": value,
    "initial": value,
    "unset": value,
  };

  let options = {
    "normal": "normal",
    "italic": "italic",
    "oblique": "oblique",
    "inherit": "inherit",
    "initial": "initial",
    "unset": "unset",
  }

  type variant = {
    "normal": string,
    "italic": string,
    "oblique": string,
    "inherit": string,
    "initial": string,
    "unset": string,
  };

  type output = { "fontStyle": value }
  type cssResolve = (value) => output
}
