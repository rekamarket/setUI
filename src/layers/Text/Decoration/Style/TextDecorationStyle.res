module TextDecorationStyle = {
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

  type i = { "textDecorationStyle": t }

  type output = { "textDecorationStyle": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => { "textDecorationStyle": value }

  let initial = #solid;

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
}
