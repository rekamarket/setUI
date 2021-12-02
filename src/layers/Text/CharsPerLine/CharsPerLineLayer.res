open Js.Array2;

open CharsPerLine;
type charsPerLine = { style: CharsPerLine.variant }
@module("./CharsPerLine/CharsPerLineStyle.css.js") external charsPerLine: charsPerLine = "CharsPerLineStyle"

module CharsPerLineLayer = {
  @genType
  type i = {
    "charsPerLine": CharsPerLine.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["charsPerLine"]) {
    | #none   => charsPerLine.style["none"]
    | #small  => charsPerLine.style["small"]
    | #medium => charsPerLine.style["medium"]
    | #large  => charsPerLine.style["large"]
    },
  ] -> joinWith(" ");
}
