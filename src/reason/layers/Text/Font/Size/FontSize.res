module FontSize = {
  type t = [
    // relative
    | #larger
    | #smaller

    // scale
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

  let toString = (int) => `${int -> Belt.Int.toString}px`

  @genType
  type i = { "fontSize": t }

  type output = { "fontSize": value }
  type cssResolve = (value) => output
  let cssResolve = (value) => {{ "fontSize": value }};

  @genType
  let initial = 0;

  let a: t = #smaller;
  let smaller = (a :> string);

  let b: t = #larger;
  let larger = (b :> string);

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
    "smaller": smaller,
    "larger": larger,
  }
}
