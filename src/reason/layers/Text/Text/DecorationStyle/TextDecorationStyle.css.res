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

type output = {
  "textDecorationStyle": value,
}

type cssResolve = (value) => output

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

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module TextDecorationStyle = {
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

  @genType
  type i = { "textDecorationStyle": t }

  @genType
  let initial = #solid;

  let style = styleVariants({
    "solid": "solid",
    "double": "double",
    "dotted": "dotted",
    "dashed": "dashed",
    "wavy": "wavy",
    "inherit": "inherit",
    "initial": "initial",
    "unset": "unset",
  }, (value) => {
    { "textDecorationStyle": value };
  })

  @genType
  let resolve = (t) => {
    switch (t) {
    | #solid => style["solid"]
    | #double => style["double"]
    | #dotted => style["dotted"]
    | #dashed => style["dashed"]
    | #wavy => style["wavy"]
    | #inherit => style["inherit"]
    | #initial => style["initial"]
    | #unset => style["unset"]
    };
  }
}
