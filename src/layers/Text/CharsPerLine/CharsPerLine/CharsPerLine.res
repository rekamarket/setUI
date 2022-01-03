module CharsPerLine = {
  let key = "charsPerLine"

  @genType
  type t = [
    | #none
    | #small
    | #medium
    | #large
  ]

  let initial = #none;

  type value = string;

  type options = {
    "none": value,
    "small": value,
    "medium": value,
    "large": value,
  };

  let options = {
    "none": "max-content",
    "small": "18ch",
    "medium": "24ch",
    "large": "36ch",
  };

  type variant = {
    "none": string,
    "small": string,
    "medium": string,
    "large": string,
  };

  type output = { "maxWidth": value }
  type cssResolve = (value) => output
}
