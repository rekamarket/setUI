module TextOverflow = {
  let key = "textOverflow"

  @genType
  type t = [
    | #clip
    | #ellipsis
    | #inherit
    | #initial
    | #revert
    | #unset
  ]

  let initial = #clip;

  type value = string;

  type options = {
    "clip": value,
    "ellipsis": value,
    "inherit": value,
    "initial": value,
    "revert": value,
    "unset": value,
  };

  let options = {
    "clip": "clip",
    "ellipsis": "ellipsis",
    "inherit": "inherit",
    "initial": "initial",
    "revert": "revert",
    "unset": "unset",
  }

  type variant = {
    "clip": string,
    "ellipsis": string,
    "inherit": string,
    "initial": string,
    "revert": string,
    "unset": string,
  };

  type output = { "textOverflow": value }
  type cssResolve = (value) => output
}
