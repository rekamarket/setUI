module BackgroundAttachment = {
  let key = "backgroundAttachment"

  @genType
  type t = [
    | #scroll
    | #fixed
    | #local
    | #inherit
    | #initial
    | #revert
    | #unset
  ]

  let initial = #scroll;

  type value = string;

  type options = {
    "scroll": value,
    "fixed": value,
    "local": value,
    "inherit": value,
    "initial": value,
    "revert": value,
    "unset": value,
  };

  let options = {
    /* Keyword values */
    "scroll": "scroll",
    "fixed": "fixed",
    "local": "local",

    /* Global values */
    "inherit": "inherit",
    "initial": "initial",
    "revert": "revert",
    "unset": "unset",
  }

  type variant = {
    "scroll": string,
    "fixed": string,
    "local": string,
    "inherit": string,
    "initial": string,
    "revert": string,
    "unset": string,
  };

  type output = { "backgroundAttachment": value }
  type cssResolve = (value) => output
}
