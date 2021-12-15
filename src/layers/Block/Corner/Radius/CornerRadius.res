module CornerRadius = {
  let key = "cornerRadius"

  @genType
  type t = [
    | #none
    | #small
    | #medium
    | #large
    | #pill
    | #circle
  ]

  let initial = #none;

  type value = string;

  type options = {
    "none": value,
    "small": value,
    "medium": value,
    "large": value,
    "pill": value,
    "circle": value,
  };

  let options = {
    "none": "0px",
    "small": "4px",
    "medium": "8px",
    "large": "12px",
    "pill": "9999px",
    "circle": "50%",
  }

  type variant = {
    "none": string,
    "small": string,
    "medium": string,
    "large": string,
    "pill": string,
    "circle": string,
  };

  type output = { "borderRadius": value }
  type cssResolve = (value) => output
}
