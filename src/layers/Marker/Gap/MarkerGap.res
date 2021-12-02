module MarkerGap = {
  type value = int;

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

  type i = { "--marker-gap": t }

  type output = { "--marker-gap": value }
  type cssResolve = (value) => output

  let initial = #none;

  let options = {
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
  }
}
