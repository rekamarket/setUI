module TextDecorationThickness = {
  let key = "textDecorationThickness"

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

  let initial = #initial;

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

  type output = { "textDecorationThickness": value }
  type cssResolve = (value) => output
}
