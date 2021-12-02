open Js.Array2;

open AlignContent;
type alignContent = { style: AlignContent.variant }
@module("./AlignContent/AlignContentStyle.css.js") external alignContent: alignContent = "AlignContentStyle"

open AlignItems;
type alignItems = { style: AlignItems.variant }
@module("./AlignItems/AlignItemsStyle.css.js") external alignItems: alignItems = "AlignItemsStyle"

open FlexDirection;
type flexDirection = { style: FlexDirection.variant }
@module("./FlexDirection/FlexDirectionStyle.css.js") external flexDirection: flexDirection = "FlexDirectionStyle"

open FlexWrap;
type flexWrap = { style: FlexWrap.variant }
@module("./FlexWrap/FlexWrapStyle.css.js") external flexWrap: flexWrap = "FlexWrapStyle"

open Gap;
type gap = { style: Gap.variant }
@module("./Gap/GapStyle.css.js") external gap: gap = "GapStyle"

open JustifyContent;
type justifyContent = { style: JustifyContent.variant }
@module("./JustifyContent/JustifyContentStyle.css.js") external justifyContent: justifyContent = "JustifyContentStyle"

module FlexLayer = {
  @genType
  type i = {
    "alignContent": AlignContent.t,
    "alignItems": AlignItems.t,
    "flexDirection": FlexDirection.t,
    "flexWrap": FlexWrap.t,
    "gap": Gap.t,
    "justifyContent": JustifyContent.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["alignContent"]) {
    | #center        => alignContent.style["center"]
    | #start         => alignContent.style["start"]
    | #end           => alignContent.style["end"]
    | #flexStart     => alignContent.style["flexStart"]
    | #flexEnd       => alignContent.style["flexEnd"]
    | #normal        => alignContent.style["normal"]
    | #baseline      => alignContent.style["baseline"]
    | #firstBaseline => alignContent.style["firstBaseline"]
    | #lastBaseline  => alignContent.style["lastBaseline"]
    | #spaceBetween  => alignContent.style["spaceBetween"]
    | #spaceAround   => alignContent.style["spaceAround"]
    | #spaceEvenly   => alignContent.style["spaceEvenly"]
    | #stretch       => alignContent.style["stretch"]
    | #safeCenter    => alignContent.style["safeCenter"]
    | #unsafeCenter  => alignContent.style["unsafeCenter"]
    | #unset         => alignContent.style["unset"]
    },

    switch (i["alignItems"]) {
    | #normal        => alignItems.style["normal"]
    | #stretch       => alignItems.style["stretch"]
    | #center        => alignItems.style["center"]
    | #start         => alignItems.style["start"]
    | #end           => alignItems.style["end"]
    | #flexStart     => alignItems.style["flexStart"]
    | #flexEnd       => alignItems.style["flexEnd"]
    | #baseline      => alignItems.style["baseline"]
    | #firstBaseline => alignItems.style["firstBaseline"]
    | #lastBaseline  => alignItems.style["lastBaseline"]
    | #safeCenter    => alignItems.style["safeCenter"]
    | #unsafeCenter  => alignItems.style["unsafeCenter"]
    | #unset         => alignItems.style["unset"]
    },

    switch (i["flexDirection"]) {
    | #row           => flexDirection.style["row"]
    | #rowReverse    => flexDirection.style["rowReverse"]
    | #column        => flexDirection.style["column"]
    | #columnReverse => flexDirection.style["columnReverse"]
    },

    switch (i["flexWrap"]) {
    | #nowrap      => flexWrap.style["nowrap"]
    | #wrap        => flexWrap.style["wrap"]
    | #wrapReverse => flexWrap.style["wrapReverse"]
    },

    switch (i["gap"]) {
    | #none     => gap.style["none"]
    | #xxxsmall => gap.style["xxxsmall"]
    | #xxsmall  => gap.style["xxsmall"]
    | #xsmall   => gap.style["xsmall"]
    | #small    => gap.style["small"]
    | #medium   => gap.style["medium"]
    | #large    => gap.style["large"]
    | #xlarge   => gap.style["xlarge"]
    | #xxlarge  => gap.style["xxlarge"]
    | #xxxlarge => gap.style["xxxlarge"]
    },

    switch (i["justifyContent"]) {
    | #center       => justifyContent.style["center"]
    | #start        => justifyContent.style["start"]
    | #end          => justifyContent.style["end"]
    | #flexStart    => justifyContent.style["flexStart"]
    | #flexEnd      => justifyContent.style["flexEnd"]
    | #left         => justifyContent.style["left"]
    | #right        => justifyContent.style["right"]
    | #normal       => justifyContent.style["normal"]
    | #spaceBetween => justifyContent.style["spaceBetween"]
    | #spaceAround  => justifyContent.style["spaceAround"]
    | #spaceEvenly  => justifyContent.style["spaceEvenly"]
    | #stretch      => justifyContent.style["stretch"]
    | #safeCenter   => justifyContent.style["safeCenter"]
    | #unsafeCenter => justifyContent.style["unsafeCenter"]
    },
  ] -> joinWith(" ");
}
