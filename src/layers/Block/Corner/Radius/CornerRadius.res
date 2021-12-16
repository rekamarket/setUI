module CornerRadius = {
  let key = "cornerRadius"

  @genType
  type t = [
    | #none
    | #xsmall
    | #small
    | #medium
    | #large
    | #xlarge
    | #pill
    | #circle
  ]

  let initial = #none;

  type value = string;

  type options = {
    "none": value,
    "xsmall": value,
    "small": value,
    "medium": value,
    "large": value,
    "xlarge": value,
    "pill": value,
    "circle": value,
  };

  let options = {
    "none": "0px",
    "xsmall": "4px",
    "small": "6px",
    "medium": "8px",
    "large": "12px",
    "xlarge": "16px",
    "pill": "9999px",
    "circle": "50%",
  }

  type variant = {
    "none": string,
    "xsmall": string,
    "small": string,
    "medium": string,
    "large": string,
    "xlarge": string,
    "pill": string,
    "circle": string,
  };

  type output = { "borderRadius": value }
  type cssResolve = (value) => output
}
