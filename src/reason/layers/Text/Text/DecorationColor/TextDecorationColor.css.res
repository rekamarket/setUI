type value = string;

type options = {
  "currentColor": value,
  "primary": value,
  "secondary": value,
  "black": value,
  "white": value,
};

type output = {
  "textDecorationColor": value,
}

type cssResolve = (value) => output

type variant = {
  "currentColor": string,
  "primary": string,
  "secondary": string,
  "black": string,
  "white": string,
};

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module TextDecorationColor = {
  type t = [
    | #currentColor
    | #primary
    | #secondary
    | #black
    | #white
  ]

  @genType
  type i = { "textDecorationColor": t }

  @genType
  let initial = #currentColor;

  let style = styleVariants({
    "currentColor": "currentColor",
    "primary": "#0078D4",
    "secondary": "#2B88D8",
    "black": "#000000",
    "white": "#FFFFFF",
  }, (value) => {
    { "textDecorationColor": value };
  })

  @genType
  let resolve = (t) => {
    switch (t) {
    | #currentColor => style["currentColor"]
    | #primary => style["primary"]
    | #secondary => style["secondary"]
    | #black => style["black"]
    | #white => style["white"]
    };
  }
}
