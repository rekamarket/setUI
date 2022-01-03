module WordBreak = {
  let key = "wordBreak"

  @genType
  type t = [
    | #normal
    | #breakAll
    | #keepAll
    | #breakWord /* deprecated */
    | #inherit
    | #initial
    | #revert
    | #unset
  ]

  let initial = #normal;

  type value = string;

  type options = {
    "normal": value,
    "breakAll": value,
    "keepAll": value,
    "breakWord": value,
    "inherit": value,
    "initial": value,
    "revert": value,
    "unset": value,
  };

  let options = {
    "normal": "normal",
    "breakAll": "break-all",
    "keepAll": "keep-all",
    "breakWord": "break-word",
    "inherit": "inherit",
    "initial": "initial",
    "revert": "revert",
    "unset": "unset",
  }

  type variant = {
    "normal": string,
    "breakAll": string,
    "keepAll": string,
    "breakWord": string,
    "inherit": string,
    "initial": string,
    "revert": string,
    "unset": string,
  };

  type output = { "wordBreak": value }
  type cssResolve = (value) => output
}
