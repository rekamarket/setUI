module BackgroundClip = {
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

  @genType
  type i = { "backgroundClip": t }

  type output = { "backgroundClip": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "backgroundClip": value }};

  let initial = #borderBox;

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
}
