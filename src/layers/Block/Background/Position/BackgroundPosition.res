module BackgroundPosition = {
  let key = "backgroundPosition"

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

  let initial = #center;

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

  type output = { "backgroundPosition": value }
  type cssResolve = (value) => output
}
