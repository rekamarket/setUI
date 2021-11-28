module FontStyle = {
  type value = string;

  type t = [
    | #normal
    | #italic
    | #oblique
    | #inherit
    | #initial
    | #unset
  ]

  type options = {
    "normal": value,
    "italic": value,
    "oblique": value,
    "inherit": value,
    "initial": value,
    "unset": value,
  };

  type variant = {
    "normal": string,
    "italic": string,
    "oblique": string,
    "inherit": string,
    "initial": string,
    "unset": string,
  };

  @genType
  type i = { "fontStyle": t }

  type output = { "fontStyle": value }
  type cssResolve = (value) => output
  let cssResolve = (value) => {{ "fontStyle": value }};

  @genType
  let initial = #normal;

  let options = {
    "normal": "normal",
    "italic": "italic",
    "oblique": "oblique",
    "inherit": "inherit",
    "initial": "initial",
    "unset": "unset",
  }
}
