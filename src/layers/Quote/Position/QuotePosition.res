module QuotePosition = {
  type value = string;

  @genType
  type t = [
    | #inside
    | #outside
  ]

  type options = {
    "inside": value,
    "outside": value,
  };

  type variant = {
    "inside": string,
    "outside": string,
  };

  type i = { "quotePosition": t }

  type output = { "--quote-position": value }
  type cssResolve = (value) => output

  let initial = #outside;

  let options = {
    "inside": "inside",
    "outside": "outside",
  }
}
