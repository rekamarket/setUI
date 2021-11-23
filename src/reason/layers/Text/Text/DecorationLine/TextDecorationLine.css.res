type value = string

type options = {
  "none": value,
  "underline": value,
  "overline": value,
  "lineThrough": value,
  "blink": value,
  "overline_lineThrough": value,
  "overline_underline": value,
  "lineThrough_underline": value,
  "overline_lineThrough_underline": value,
  "inherit": value,
  "initial": value,
  "unset": value,
};

type output = {
  "textDecorationLine": value,
}

type cssResolve = (value) => output

type variant = {
  "none": string,
  "underline": string,
  "overline": string,
  "lineThrough": string,
  "blink": string,
  "overline_lineThrough": string,
  "overline_underline": string,
  "lineThrough_underline": string,
  "overline_lineThrough_underline": string,
  "inherit": string,
  "initial": string,
  "unset": string,
};

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module TextDecorationLine = {
  type t = [
    | #none
    | #underline
    | #overline
    | #lineThrough
    | #blink
    | #overline_lineThrough
    | #overline_underline
    | #lineThrough_underline
    | #overline_lineThrough_underline
    | #inherit
    | #initial
    | #unset
  ]

  @genType
  type i = { "textDecorationLine": t }

  @genType
  let initial = #none;

  let style = styleVariants({
    "none": "none",
    "underline": "underline",
    "overline": "overline",
    "lineThrough": "line-through",
    "blink": "blink",
    "overline_lineThrough": "overline line-through",
    "overline_underline": "overline underline",
    "lineThrough_underline": "line-through underline",
    "overline_lineThrough_underline": "overline line-through underline",
    "inherit": "inherit",
    "initial": "initial",
    "unset": "unset",
  }, (value) => {
    { "textDecorationLine": value }
  })

  @genType
  let resolve = (t) => {
    switch (t) {
      | #none => style["none"]
      | #underline => style["underline"]
      | #overline => style["overline"]
      | #lineThrough => style["lineThrough"]
      | #blink => style["blink"]
      | #overline_lineThrough => style["overline_lineThrough"]
      | #overline_underline => style["overline_underline"]
      | #lineThrough_underline => style["lineThrough_underline"]
      | #overline_lineThrough_underline => style["overline_lineThrough_underline"]
      | #inherit => style["inherit"]
      | #initial => style["initial"]
      | #unset => style["unset"]
    };
  }
}
