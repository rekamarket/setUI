module TextTransform = {
  @genType
  type t = [
    | #none
    | #uppercase
    | #lowercase
    | #capitalize
    | #fullWidth
    | #fullSizeKana
  ]

  type value = string;

  type options = {
    "none": value,
    "uppercase": value,
    "lowercase": value,
    "capitalize": value,
    "fullWidth": value,
    "fullSizeKana": value,
  };

  type variant = {
    "none": string,
    "uppercase": string,
    "lowercase": string,
    "capitalize": string,
    "fullWidth": string,
    "fullSizeKana": string,
  };

  type i = { "textTransform": t }

  type output = { "textTransform": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => { "textTransform": value }

  let initial = #none;

  let options = {
    "none": "none",
    "uppercase": "uppercase",
    "lowercase": "lowercase",
    "capitalize": "capitalize",
    "fullWidth": "full-width",
    "fullSizeKana": "full-size-kana",
  }
}
