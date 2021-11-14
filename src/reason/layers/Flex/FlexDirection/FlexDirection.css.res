type value = string;

type options = {
  "row": value,
  "rowReverse": value,
  "column": value,
  "columnReverse": value,
};

type output = {
  "flexDirection": value,
}

type cssResolve = (value) => output

type variant = {
  "row": string,
  "rowReverse": string,
  "column": string,
  "columnReverse": string,
};

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module FlexDirection = {
  @genType
  type t = [
    | #row
    | #rowReverse
    | #column
    | #columnReverse
  ]

  let initial = #row;

  let style = styleVariants({
    "row": "row",
    "rowReverse": "row-reverse",
    "column": "column",
    "columnReverse": "column-Reverse",
  }, (value) => {
    let output = {
      "flexDirection": value,
    };
    output
  })

  @genType
  let resolve = (t) => {
    switch (t) {
    | #row => style["row"]
    | #rowReverse => style["rowReverse"]
    | #column => style["column"]
    | #columnReverse => style["columnReverse"]
    };
  }
}
