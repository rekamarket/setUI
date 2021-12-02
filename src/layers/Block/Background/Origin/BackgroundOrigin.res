module BackgroundOrigin = {
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

  type t = [
    | #borderBox
    | #paddingBox
    | #contentBox
    | #inherit
    | #initial
    | #revert
    | #unset
  ]

  type variant = {
    "borderBox": string,
    "paddingBox": string,
    "contentBox": string,
    "inherit": string,
    "initial": string,
    "revert": string,
    "unset": string,
  };

  @genType
  type i = { "backgroundOrigin": t }

  type output = { "backgroundOrigin": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "backgroundOrigin": value }};

  let initial = #paddingBox;

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
}
