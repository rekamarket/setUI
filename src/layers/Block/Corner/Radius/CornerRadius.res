module CornerRadius = {
  type value = string;

  type options = {
    "none": value,
    "small": value,
    "medium": value,
    "large": value,
    "pill": value,
    "circle": value,
  };

  type t = [
    | #none
    | #small
    | #medium
    | #large
    | #pill
    | #circle
  ]

  type variant = {
    "none": string,
    "small": string,
    "medium": string,
    "large": string,
    "pill": string,
    "circle": string,
  };

  @genType
  type i = { "cornerRadius": t }

  type output = { "borderRadius": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "borderRadius": value }};

  let initial = #none;

  let options = {
    "none": "0px",
    "small": "4px",
    "medium": "8px",
    "large": "12px",
    "pill": "9999px",
    "circle": "50%",
  }
}
