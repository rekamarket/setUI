module TextTransform = {
  let key = "textTransform"

  @genType
  type t = [
    | #none
    | #uppercase
    | #lowercase
    | #capitalize
    | #fullWidth
    | #fullSizeKana
  ]

  let initial = #none;

  type value = string;

  type options = {
    "none": value,
    "uppercase": value,
    "lowercase": value,
    "capitalize": value,
    "fullWidth": value,
    "fullSizeKana": value,
  };

  let options = {
    "none": "none",
    "uppercase": "uppercase",
    "lowercase": "lowercase",
    "capitalize": "capitalize",
    "fullWidth": "full-width",
    "fullSizeKana": "full-size-kana",
  }

  type variant = {
    "none": string,
    "uppercase": string,
    "lowercase": string,
    "capitalize": string,
    "fullWidth": string,
    "fullSizeKana": string,
  };

  type output = { "textTransform": value }
  type cssResolve = (value) => output
}
