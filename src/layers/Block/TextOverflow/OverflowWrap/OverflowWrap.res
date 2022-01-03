module OverflowWrap = {
  let key = "overflowWrap"

  @genType
  type t = [
    | #normal
    | #breakWord
    | #anywhere
    | #inherit
    | #initial
    | #revert
    | #unset
  ]

  let initial = #normal;

  type value = string;

  type options = {
    "normal": value,
    "breakWord": value,
    "anywhere": value,
    "inherit": value,
    "initial": value,
    "revert": value,
    "unset": value,
  };

  let options = {
    "normal": "normal",
    "breakWord": "break-word",
    "anywhere": "anywhere",
    "inherit": "inherit",
    "initial": "initial",
    "revert": "revert",
    "unset": "unset",
  }

  type variant = {
    "normal": string,
    "breakWord": string,
    "anywhere": string,
    "inherit": string,
    "initial": string,
    "revert": string,
    "unset": string,
  };

  type output = { "overflowWrap": value }
  type cssResolve = (value) => output
}
