open Js.Array2;
open PaddingReflection;

open PaddingInlineEnd;
type paddingInlineEnd = { style: PaddingReflection.variant }
@module("./InlineEnd/PaddingInlineEndStyle.css.js") external paddingInlineEnd: paddingInlineEnd = "PaddingInlineEndStyle"

open PaddingInlineStart;
type paddingInlineStart = { style: PaddingReflection.variant }
@module("./InlineStart/PaddingInlineStartStyle.css.js") external paddingInlineStart: paddingInlineStart = "PaddingInlineStartStyle"

module PaddingInlineLayer = {
  @genType
  type i = {
    "paddingInlineEnd": PaddingInlineEnd.t,
    "paddingInlineStart": PaddingInlineStart.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["paddingInlineEnd"]) {
    | #none     => paddingInlineEnd.style["none"]
    | #xxxsmall => paddingInlineEnd.style["xxxsmall"]
    | #xxsmall  => paddingInlineEnd.style["xxsmall"]
    | #xsmall   => paddingInlineEnd.style["xsmall"]
    | #small    => paddingInlineEnd.style["small"]
    | #medium   => paddingInlineEnd.style["medium"]
    | #large    => paddingInlineEnd.style["large"]
    | #xlarge   => paddingInlineEnd.style["xlarge"]
    | #xxlarge  => paddingInlineEnd.style["xxlarge"]
    | #xxxlarge => paddingInlineEnd.style["xxxlarge"]
    },

    switch (i["paddingInlineStart"]) {
    | #none     => paddingInlineStart.style["none"]
    | #xxxsmall => paddingInlineStart.style["xxxsmall"]
    | #xxsmall  => paddingInlineStart.style["xxsmall"]
    | #xsmall   => paddingInlineStart.style["xsmall"]
    | #small    => paddingInlineStart.style["small"]
    | #medium   => paddingInlineStart.style["medium"]
    | #large    => paddingInlineStart.style["large"]
    | #xlarge   => paddingInlineStart.style["xlarge"]
    | #xxlarge  => paddingInlineStart.style["xxlarge"]
    | #xxxlarge => paddingInlineStart.style["xxxlarge"]
    },
  ] -> joinWith(" ");
}
