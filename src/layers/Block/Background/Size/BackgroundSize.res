module BackgroundSize = {
  type value = string;

  type options = {
    "cover": value,
    "contain": value,
    "50": value,
    "auto": value,
    "inherit": value,
    "initial": value,
    "revert": value,
    "unset": value,
  };

  type t = [
    | #cover
    | #contain
    | #50
    | #auto
    | #inherit
    | #initial
    | #revert
    | #unset
  ]

  type variant = {
    "cover": string,
    "contain": string,
    "50": string,
    "auto": string,
    "inherit": string,
    "initial": string,
    "revert": string,
    "unset": string,
  };

  @genType
  type i = { "backgroundSize": t }

  type output = { "backgroundSize": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "backgroundSize": value }};

  let initial = #auto;

  let options = {
    /* Keyword values */
    "cover": "cover",
    "contain": "contain",

    /* One-value syntax */
    "50": "50%",
    "auto": "auto",

    /* Global values */
    "inherit": "inherit",
    "initial": "initial",
    "revert": "revert",
    "unset": "unset",
  }
}
