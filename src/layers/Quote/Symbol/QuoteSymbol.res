module QuoteSymbol = {
  type value = string;

  @genType
  type t = [
    | #none
    | #LeftDouble
    | #RightDouble
    | #RightDoubleAngle
    | #LeftDoubleAngle
  ]

  type options = {
    "none": value,
    "LeftDouble": value,
    "RightDouble": value,
    "RightDoubleAngle": value,
    "LeftDoubleAngle": value,
  };

  type variant = {
    "none": string,
    "LeftDouble": string,
    "RightDouble": string,
    "RightDoubleAngle": string,
    "LeftDoubleAngle": string,
  };

  type i = { "quoteSymbol": t }
  type output = { "--quote-symbol": value }
  type cssResolve = (value) => output

  let initial = #none;

  let options = {
    "none": "none",
    "LeftDouble": `"“"`, // U+201C -  Left Double Quotation Mark
    "RightDouble": `"”"`, // U+201D -  Right Double Quotation Mark
    "RightDoubleAngle": `"»"`, // U+00BB -  Right-Pointing Double Angle Quotation Mark
    "LeftDoubleAngle": `"«"`, // U+00AB -  Left-Pointing Double Angle Quotation Mark
  }
}
