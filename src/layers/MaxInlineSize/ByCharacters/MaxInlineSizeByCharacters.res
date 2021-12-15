module MaxInlineSizeByCharacters = {
  let key = "maxInlineSize"

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
    "none": "0",
    "small": "36ch",
    "medium": "48ch",
    "large": "64ch",
  };

  type variant = {
    "none": string,
    "small": string,
    "medium": string,
    "large": string,
  };

  type output = {
    "visibility": string,
    "--max-inline-size-by-characters": value,
  }

  type cssResolve = (value) => output
}
