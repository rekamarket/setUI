module TextDecorationThicknessIndex = {
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

  @genType
  type i = { "textDecorationThickness": t }

  type output = { "textDecorationThickness": value }
  type cssResolve = (value) => output
  let cssResolve = (value) => { "textDecorationThickness": value }

  let toString = (int) => `${int -> Belt.Int.toString}px`

  let a: single = #auto;
  let auto = (a :> string);

  let b: single = #fromFont;
  let fromFont = (b :> string);

  let c: global = #inherit;
  let inheritValue = (c :> string);

  let d: global = #initial;
  @genType
  let initial = (d :> string);

  let e: global = #unset;
  let unset = (e :> string);

  let options = {
    "auto": auto,
    "fromFont": fromFont,

    "thin": toString(1),
    "light": toString(2),
    "medium": toString(3),
    "bold": toString(4),

    "inherit": inheritValue,
    "initial": initial,
    "unset": unset,
  }
}
