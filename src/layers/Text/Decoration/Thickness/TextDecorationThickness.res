module TextDecorationThickness = {
  type single = [
    | #auto
    | #fromFont
  ]

  type pixels = [
    | #thin
    | #light
    | #medium
    | #bold
  ]

  type global = [
    | #inherit
    | #initial
    | #unset
  ]

  @genType
  type t = [
    | #auto
    | #fromFont
    | #thin
    | #light
    | #medium
    | #bold
    | #inherit
    | #initial
    | #unset
  ]

  type value = string

  type options = {
    "auto": value,
    "fromFont": value,
    "thin": value,
    "light": value,
    "medium": value,
    "bold": value,
    "inherit": value,
    "initial": value,
    "unset": value,
  };

  type variant = {
    "auto": string,
    "fromFont": string,
    "thin": string,
    "light": string,
    "medium": string,
    "bold": string,
    "inherit": string,
    "initial": string,
    "unset": string,
  };

  type i = { "textDecorationThickness": t }

  type output = { "textDecorationThickness": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => { "textDecorationThickness": value }

  let initial = #initial;

  let options = {
    "auto": "auto",
    "fromFont": "fromFont",

    "thin": "1px",
    "light": "2px",
    "medium": "3px",
    "bold": "4px",

    "inherit": "inheritValue",
    "initial": "initial",
    "unset": "unset",
  }
}
