module BackgroundPositionIndex = {
  type value = string;

  type options = {
    "top": value,
    "bottom": value,
    "left": value,
    "right": value,
    "center": value,
    "inherit": value,
    "initial": value,
    "revert": value,
    "unset": value,
  };

  @genType
  type t = [
    | #top
    | #bottom
    | #left
    | #right
    | #center
    | #inherit
    | #initial
    | #revert
    | #unset
  ]

  type variant = {
    "top": string,
    "bottom": string,
    "left": string,
    "right": string,
    "center": string,
    "inherit": string,
    "initial": string,
    "revert": string,
    "unset": string,
  };

  @genType
  type i = { "backgroundPosition": t }

  type output = { "backgroundPosition": value }
  type cssResolve = (value) => output
  let cssResolve = (value) => {{ "backgroundPosition": value }};

  @genType
  let initial = #center;

  @genType
  let options = {
    /* Keyword values */
    "top": "top",
    "bottom": "bottom",
    "left": "left",
    "right": "right",
    "center": "center",

    /* Global values */
    "inherit": "inherit",
    "initial": "initial",
    "revert": "revert",
    "unset": "unset",
  }
}
