type value = int;

type options = {
  "none": value,
  "xxxsmall": value,
  "xxsmall": value,
  "xsmall": value,
  "small": value,
  "medium": value,
  "large": value,
  "xlarge": value,
  "xxlarge": value,
  "xxxlarge": value,
};

type output = {
  "gap": value,
}

type cssResolve = (value) => output

type variant = {
  "none": string,
  "xxxsmall": string,
  "xxsmall": string,
  "xsmall": string,
  "small": string,
  "medium": string,
  "large": string,
  "xlarge": string,
  "xxlarge": string,
  "xxxlarge": string,
};

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module Gap = {
  @genType
  type t = [
    | #none
    | #xxxsmall
    | #xxsmall
    | #xsmall
    | #small
    | #medium
    | #large
    | #xlarge
    | #xxlarge
    | #xxxlarge
  ]

  let initial = #none;

  @genType
  let style = styleVariants({
    "none": 0,
    "xxxsmall": 4,
    "xxsmall": 8,
    "xsmall": 12,
    "small": 16,
    "medium": 24,
    "large": 36,
    "xlarge": 48,
    "xxlarge": 96,
    "xxxlarge": 128,
  }, (value) => {
    let output = {
      "gap": value,
    };
    output
  })

  @genType
  let resolve = (t) => {
    switch (t) {
      | #none => style["none"]
      | #xxxsmall => style["xxxsmall"]
      | #xxsmall => style["xxsmall"]
      | #xsmall => style["xsmall"]
      | #small => style["small"]
      | #medium => style["medium"]
      | #large => style["large"]
      | #xlarge => style["xlarge"]
      | #xxlarge => style["xxlarge"]
      | #xxxlarge => style["xxxlarge"]
    };
  }
}
