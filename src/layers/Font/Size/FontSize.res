module FontSize = {
  @genType
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

  type i = { "fontSize": t }

  type output = {
    "lineHeight": value,
    "fontSize": value
  }

  type cssResolve = (value) => output

  let initial = #none;

  let options = {
    "none"    : "0px",
    "xxxsmall": `clamp(${(  6 / 16) -> Belt.Int.toString}rem, calc(${(  6 / 16) -> Belt.Int.toString}rem + ((1vw - 0.48rem) * 0.3472)), ${((  6 / 16) -> Belt.Int.toFloat *. 1.5) -> Belt.Float.toString}rem)`,
    "xxsmall" : `clamp(${(  8 / 16) -> Belt.Int.toString}rem, calc(${(  8 / 16) -> Belt.Int.toString}rem + ((1vw - 0.48rem) * 0.3472)), ${((  8 / 16) -> Belt.Int.toFloat *. 1.5) -> Belt.Float.toString}rem)`,
    "xsmall"  : `clamp(${( 12 / 16) -> Belt.Int.toString}rem, calc(${( 12 / 16) -> Belt.Int.toString}rem + ((1vw - 0.48rem) * 0.3472)), ${(( 12 / 16) -> Belt.Int.toFloat *. 1.5) -> Belt.Float.toString}rem)`,
    "small"   : `clamp(${( 16 / 16) -> Belt.Int.toString}rem, calc(${( 16 / 16) -> Belt.Int.toString}rem + ((1vw - 0.48rem) * 0.3472)), ${(( 16 / 16) -> Belt.Int.toFloat *. 1.5) -> Belt.Float.toString}rem)`,
    "medium"  : `clamp(${( 24 / 16) -> Belt.Int.toString}rem, calc(${( 24 / 16) -> Belt.Int.toString}rem + ((1vw - 0.48rem) * 0.3472)), ${(( 24 / 16) -> Belt.Int.toFloat *. 1.5) -> Belt.Float.toString}rem)`,
    "large"   : `clamp(${( 36 / 16) -> Belt.Int.toString}rem, calc(${( 36 / 16) -> Belt.Int.toString}rem + ((1vw - 0.48rem) * 0.3472)), ${(( 36 / 16) -> Belt.Int.toFloat *. 1.5) -> Belt.Float.toString}rem)`,
    "xlarge"  : `clamp(${( 48 / 16) -> Belt.Int.toString}rem, calc(${( 48 / 16) -> Belt.Int.toString}rem + ((1vw - 0.48rem) * 0.3472)), ${(( 48 / 16) -> Belt.Int.toFloat *. 1.5) -> Belt.Float.toString}rem)`,
    "xxlarge" : `clamp(${( 96 / 16) -> Belt.Int.toString}rem, calc(${( 96 / 16) -> Belt.Int.toString}rem + ((1vw - 0.48rem) * 0.3472)), ${(( 96 / 16) -> Belt.Int.toFloat *. 1.5) -> Belt.Float.toString}rem)`,
    "xxxlarge": `clamp(${(128 / 16) -> Belt.Int.toString}rem, calc(${(128 / 16) -> Belt.Int.toString}rem + ((1vw - 0.48rem) * 0.3472)), ${((128 / 16) -> Belt.Int.toFloat *. 1.5) -> Belt.Float.toString}rem)`,
    "smaller" : "smaller",
    "larger"  : "larger",
  }
}
