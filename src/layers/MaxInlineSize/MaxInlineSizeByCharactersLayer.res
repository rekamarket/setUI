open Js.Array2;

open MaxInlineSizeByCharacters;
type maxInlineSize = { style: MaxInlineSizeByCharacters.variant }
@module("./MaxInlineSizeByCharacters/MaxInlineSizeByCharactersStyle.css.js") external maxInlineSize: maxInlineSize = "MaxInlineSizeByCharactersStyle"

module MaxInlineSizeByCharactersLayer = {
  @genType
  type i = {
    "maxInlineSize": MaxInlineSizeByCharacters.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["maxInlineSize"]) {
    | #none   => maxInlineSize.style["none"]
    | #small  => maxInlineSize.style["small"]
    | #medium => maxInlineSize.style["medium"]
    | #large  => maxInlineSize.style["large"]
    },
  ] -> joinWith(" ");
}
