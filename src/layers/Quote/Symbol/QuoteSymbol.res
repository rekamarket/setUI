module QuoteSymbol = {
  let key = "quoteSymbol"

  @genType
  type t = [
    | #none
    | #LeftDouble
    | #RightDouble
    | #RightDoubleAngle
    | #LeftDoubleAngle
  ]

  let initial = #none;

  type value = string;

  type options = {
    "none": value,
    "LeftDouble": value,
    "RightDouble": value,
    "RightDoubleAngle": value,
    "LeftDoubleAngle": value,
  };

  let options = {
    "none": "none",
    "LeftDouble": `"“"`, // U+201C -  Left Double Quotation Mark
    "RightDouble": `"”"`, // U+201D -  Right Double Quotation Mark
    "RightDoubleAngle": `"»"`, // U+00BB -  Right-Pointing Double Angle Quotation Mark
    "LeftDoubleAngle": `"«"`, // U+00AB -  Left-Pointing Double Angle Quotation Mark
  }

  type variant = {
    "none": string,
    "LeftDouble": string,
    "RightDouble": string,
    "RightDoubleAngle": string,
    "LeftDoubleAngle": string,
  };

  type output = { "--quote-symbol": value }
  type cssResolve = (value) => output
}
