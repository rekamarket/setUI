module BorderStyle = {
  type value = string;

  type options = {
    "none": value,
    "hidden": value,
    "dotted": value,
    "dashed": value,
    "solid": value,
    "double": value,
    "groove": value,
    "ridge": value,
    "inset": value,
    "outset": value,
    "inherit": value,
    "initial": value,
    "revert": value,
    "unset": value,
  };

  type t = [
    | #none
    | #hidden
    | #dotted
    | #dashed
    | #solid
    | #double
    | #groove
    | #ridge
    | #inset
    | #outset
    | #inherit
    | #initial
    | #revert
    | #unset
  ]

  type variant = {
    "none": string,
    "hidden": string,
    "dotted": string,
    "dashed": string,
    "solid": string,
    "double": string,
    "groove": string,
    "ridge": string,
    "inset": string,
    "outset": string,
    "inherit": string,
    "initial": string,
    "revert": string,
    "unset": string,
  };

  @genType
  type i = { "borderStyle": t }

  type output = { "borderStyle": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "borderStyle": value }};

  let initial = #none;

  let options = {
    /* Keyword values */
    "none": "none",
    "hidden": "hidden",
    "dotted": "dotted",
    "dashed": "dashed",
    "solid": "solid",
    "double": "double",
    "groove": "groove",
    "ridge": "ridge",
    "inset": "inset",
    "outset": "outset",

    /* Global values */
    "inherit": "inherit",
    "initial": "initial",
    "revert": "revert",
    "unset": "unset",
  }
}
