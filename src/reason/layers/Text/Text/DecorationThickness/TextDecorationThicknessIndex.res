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

  type t =
    | Single(single)
    | Scale(int)
    | Global(global)

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

  @genType
  let initial = Scale(0);

  let toString = (t) => {
    switch (t) {
      | Single(single) => single :> string
      | Scale(int) => int -> Belt.Int.toString
      | Global(global) => global :> string
    }
  }

  let options = {
    "auto": toString(Single(#auto)),
    "fromFont": toString(Single(#fromFont)),

    "thin": toString(Scale(1)),
    "light": toString(Scale(2)),
    "medium": toString(Scale(3)),
    "bold": toString(Scale(4)),

    "inherit": toString(Global(#inherit)),
    "initial": toString(Global(#initial)),
    "unset": toString(Global(#unset)),
  }
}
