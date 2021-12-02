module MaxInlineSizeByCharacters = {
  type value = string;

  type options = {
    "none": value,
    "small": value,
    "medium": value,
    "large": value,
  };

  @genType
  type t = [
    | #none
    | #small
    | #medium
    | #large
  ]

  type variant = {
    "none": string,
    "small": string,
    "medium": string,
    "large": string,
  };

  type i = { "maxInlineSize": t }

  type output = { "--max-inline-size-by-characters": value }
  type cssResolve = (value) => output

  let initial = #none;

  let options = {
    "none": "0",
    "small": "36ch",
    "medium": "48ch",
    "large": "64ch",
  };
}
