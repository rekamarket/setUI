module CharsPerLine = {
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

  type i = { "charsPerLine": t }

  type output = { "maxWidth": value }
  type cssResolve = (value) => output

  let initial = #none;

  let options = {
    "none": "0",
    "small": "18ch",
    "medium": "24ch",
    "large": "36ch",
  };
}
