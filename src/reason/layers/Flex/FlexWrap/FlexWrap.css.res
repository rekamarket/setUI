type value = string;

type options = {
  "nowrap": value,
  "wrap": value,
  "wrapReverse": value,
};

type output = {
  "flexWrap": value,
}

type cssResolve = (value) => output

type variant = {
  "nowrap": string,
  "wrap": string,
  "wrapReverse": string,
};

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module FlexWrap = {
  @genType
  type t = [
    | #nowrap
    | #wrap
    | #wrapReverse
  ]

  let initial = #nowrap;

  let style = styleVariants({
    "nowrap": "nowrap",
    "wrap": "wrap",
    "wrapReverse": "wrap-reverse",
  }, (value) => {
    let output = {
      "flexWrap": value,
    };
    output
  })

  @genType
  let resolve = (t) => {
    switch (t) {
    | #nowrap => style["nowrap"]
    | #wrap => style["wrap"]
    | #wrapReverse => style["wrapReverse"]
    };
  }
}
