module TextDecorationStyle = {
  let key = "textDecorationStyle"

  @genType
  type t = [
    | #solid
    | #double
    | #dotted
    | #dashed
    | #wavy
    | #inherit
    | #initial
    | #unset
  ]

  let initial = #solid;

  type value = string;

  type options = {
    "solid": value,
    "double": value,
    "dotted": value,
    "dashed": value,
    "wavy": value,
    "inherit": value,
    "initial": value,
    "unset": value,
  };

  let options = {
    "solid": "solid",
    "double": "double",
    "dotted": "dotted",
    "dashed": "dashed",
    "wavy": "wavy",
    "inherit": "inherit",
    "initial": "initial",
    "unset": "unset",
  }

  type variant = {
    "solid": string,
    "double": string,
    "dotted": string,
    "dashed": string,
    "wavy": string,
    "inherit": string,
    "initial": string,
    "unset": string,
  };

  type output = { "textDecorationStyle": value }
  type cssResolve = (value) => output
}
