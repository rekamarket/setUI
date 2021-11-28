module BackgroundAttachment = {
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

  type variant = {
    "scroll": string,
    "fixed": string,
    "local": string,
    "inherit": string,
    "initial": string,
    "revert": string,
    "unset": string,
  };

  @genType
  type i = { "backgroundAttachment": t }

  type output = { "backgroundAttachment": value }
  type cssResolve = (value) => output
  let cssResolve = (value) => {{ "backgroundAttachment": value }};

  @genType
  let initial = #scroll;

  @genType
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
}
