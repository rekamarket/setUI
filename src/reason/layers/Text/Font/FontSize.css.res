type relative = [
  | #smaller
  | #larger
]

type value = string

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
  "smaller": value,
  "larger": value,
};

type output = {
  "fontSize": value,
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
  "smaller": string,
  "larger": string,
};

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module FontSize = {
  type t =
    | Scale(int)
    | Relative(relative)

  let initial = Scale(0);

  let toString = (t) => {
    switch (t) {
      | Scale(int) => int -> Belt.Int.toString
      | Relative(relative) => {
        switch (relative) {
          | #smaller => relative :> string
          | #larger => relative :> string
        }
      }
    }
  }

  let style = styleVariants({
    "none": toString(Scale(0)),
    "xxxsmall": toString(Scale(4)),
    "xxsmall": toString(Scale(8)),
    "xsmall": toString(Scale(12)),
    "small": toString(Scale(16)),
    "medium": toString(Scale(24)),
    "large": toString(Scale(36)),
    "xlarge": toString(Scale(48)),
    "xxlarge": toString(Scale(96)),
    "xxxlarge": toString(Scale(128)),
    "smaller": toString(Relative(#smaller)),
    "larger": toString(Relative(#larger)),
  }, (value) => {
    { "fontSize": value }
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
      | #smaller => style["smaller"]
      | #larger => style["larger"]
    };
  }
}
