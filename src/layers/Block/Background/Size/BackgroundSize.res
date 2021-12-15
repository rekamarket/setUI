module BackgroundSize = {
  let key = "backgroundSize"

  @genType
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

  let initial = #auto;

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

  type output = { "backgroundSize": value }
  type cssResolve = (value) => output
}
