module BackgroundOrigin = {
  let key = "backgroundOrigin"

  @genType
  type t = [
    | #borderBox
    | #paddingBox
    | #contentBox
    | #inherit
    | #initial
    | #revert
    | #unset
  ]

  let initial = #paddingBox;

  type value = string;

  type options = {
    "borderBox": value,
    "paddingBox": value,
    "contentBox": value,
    "inherit": value,
    "initial": value,
    "revert": value,
    "unset": value,
  };

  let options = {
    /* Keyword values */
    "borderBox": "border-box",
    "paddingBox": "padding-box",
    "contentBox": "content-box",

    /* Global values */
    "inherit": "inherit",
    "initial": "initial",
    "revert": "revert",
    "unset": "unset",
  }

  type variant = {
    "borderBox": string,
    "paddingBox": string,
    "contentBox": string,
    "inherit": string,
    "initial": string,
    "revert": string,
    "unset": string,
  };

  type output = { "backgroundOrigin": value }
  type cssResolve = (value) => output
}
