module FontSizeIndex = {
  type relative = [
    | #smaller
    | #larger
  ]

  type t =
    | String(string)
    | Relative(relative)

  type value = string;

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

  type m = Int(int) | Relative(relative)

  let toString: (m) => string = switch (m) {
    | Relative(relative) => relative :> string
    | Int(int) => `${int -> Belt.Int.toString}px`
  }

  @genType
  type i = { "fontSize": t }

  type output = { "fontSize": value }
  type cssResolve = (value) => output
  let cssResolve = (value) => {{ "fontSize": value }};

  @genType
  let initial = 0;

  let options = {
    "none": toString(0),
    "xxxsmall": toString(4),
    "xxsmall": toString(8),
    "xsmall": toString(12),
    "small": toString(16),
    "medium": toString(24),
    "large": toString(36),
    "xlarge": toString(48),
    "xxlarge": toString(96),
    "xxxlarge": toString(128),
    "smaller": toString(Relative(#smaller)),
    "larger": toString(Relative(#larger)),
  }
}
