open Js.Array2;
open Padding;

open PaddingBlockEnd;
type paddingBlockEnd = { style: Padding.variant }
@module("./BlockEnd/PaddingBlockEndStyle.css.js") external paddingBlockEnd: paddingBlockEnd = "PaddingBlockEndStyle"

open PaddingBlockStart;
type paddingBlockStart = { style: Padding.variant }
@module("./BlockStart/PaddingBlockStartStyle.css.js") external paddingBlockStart: paddingBlockStart = "PaddingBlockStartStyle"

open PaddingInlineEnd;
type paddingInlineEnd = { style: Padding.variant }
@module("./InlineEnd/PaddingInlineEndStyle.css.js") external paddingInlineEnd: paddingInlineEnd = "PaddingInlineEndStyle"

open PaddingInlineStart;
type paddingInlineStart = { style: Padding.variant }
@module("./InlineStart/PaddingInlineStartStyle.css.js") external paddingInlineStart: paddingInlineStart = "PaddingInlineStartStyle"

module PaddingLayer = {
  @genType
  type i = {
    "paddingBlockEnd": PaddingBlockEnd.t,
    "paddingBlockStart": PaddingBlockStart.t,
    "paddingInlineEnd": PaddingInlineEnd.t,
    "paddingInlineStart": PaddingInlineStart.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["paddingBlockEnd"]) {
    | #none     => paddingBlockEnd.style["none"]
    | #xxxsmall => paddingBlockEnd.style["xxxsmall"]
    | #xxsmall  => paddingBlockEnd.style["xxsmall"]
    | #xsmall   => paddingBlockEnd.style["xsmall"]
    | #small    => paddingBlockEnd.style["small"]
    | #medium   => paddingBlockEnd.style["medium"]
    | #large    => paddingBlockEnd.style["large"]
    | #xlarge   => paddingBlockEnd.style["xlarge"]
    | #xxlarge  => paddingBlockEnd.style["xxlarge"]
    | #xxxlarge => paddingBlockEnd.style["xxxlarge"]
    },

    switch (i["paddingBlockStart"]) {
    | #none     => paddingBlockStart.style["none"]
    | #xxxsmall => paddingBlockStart.style["xxxsmall"]
    | #xxsmall  => paddingBlockStart.style["xxsmall"]
    | #xsmall   => paddingBlockStart.style["xsmall"]
    | #small    => paddingBlockStart.style["small"]
    | #medium   => paddingBlockStart.style["medium"]
    | #large    => paddingBlockStart.style["large"]
    | #xlarge   => paddingBlockStart.style["xlarge"]
    | #xxlarge  => paddingBlockStart.style["xxlarge"]
    | #xxxlarge => paddingBlockStart.style["xxxlarge"]
    },

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
