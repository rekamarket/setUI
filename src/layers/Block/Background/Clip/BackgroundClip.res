module BackgroundClip = {
  let key = "backgroundClip"

  @genType
  type t = [
    | #borderBox
    | #paddingBox
    | #contentBox
    | #text
    | #inherit
    | #initial
    | #revert
    | #unset
  ]

  let initial = #borderBox;

  type value = string;

  type options = {
    "borderBox": value,
    "paddingBox": value,
    "contentBox": value,
    "text": value,
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
    "text": "text",

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
    "text": string,
    "inherit": string,
    "initial": string,
    "revert": string,
    "unset": string,
  };

  type output = { "backgroundClip": value }
  type cssResolve = (value) => output
}
