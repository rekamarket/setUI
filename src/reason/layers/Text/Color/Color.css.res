type value = string;

type options = {
  "primary": value,
  "secondary": value,
  "black": value,
  "white": value,
};

type output = {
  "color": value,
}

type cssResolve = (value) => output

type variant = {
  "primary": string,
  "secondary": string,
  "black": string,
  "white": string,
};

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module Color = {
  @genType
  type t = [
    | #primary
    | #secondary
    | #black
    | #white
  ]

  @genType
  let initial = #primary;

  @genType
  let style = styleVariants({
    "primary": "#0078D4",
    "secondary": "#2B88D8",
    "black": "#000000",
    "white": "#FFFFFF",
  }, (value) => {
    let output = {
      "color": value,
    };
    output
  })

  @genType
  let resolve = (t) => {
    switch (t) {
    | #primary => style["primary"]
    | #secondary => style["secondary"]
    | #black => style["black"]
    | #white => style["white"]
    };
  }
}
