open Js.Array2;

open BackgroundAttachment;
type backgroundAttachment = { style: BackgroundAttachment.variant }
@module("./Attachment/BackgroundAttachmentStyle.css.js") external backgroundAttachment: backgroundAttachment = "BackgroundAttachmentStyle"

open BackgroundClip;
type backgroundClip = { style: BackgroundClip.variant }
@module("./Clip/BackgroundClipStyle.css.js") external backgroundClip: backgroundClip = "BackgroundClipStyle"

open BackgroundColor;
type backgroundColor = { style: BackgroundColor.variant }
@module("./Color/BackgroundColorStyle.css.js") external backgroundColor: backgroundColor = "BackgroundColorStyle"

open BackgroundOpacity;
type backgroundOpacity = { style: BackgroundOpacity.variant }
@module("./Opacity/BackgroundOpacityStyle.css.js") external backgroundOpacity: backgroundOpacity = "BackgroundOpacityStyle"

open BackgroundOrigin;
type backgroundOrigin = { style: BackgroundOrigin.variant }
@module("./Origin/BackgroundOriginStyle.css.js") external backgroundOrigin: backgroundOrigin = "BackgroundOriginStyle"

open BackgroundPosition;
type backgroundPosition = { style: BackgroundPosition.variant }
@module("./Position/BackgroundPositionStyle.css.js") external backgroundPosition: backgroundPosition = "BackgroundPositionStyle"

open BackgroundRepeat;
type backgroundRepeat = { style: BackgroundRepeat.variant }
@module("./Repeat/BackgroundRepeatStyle.css.js") external backgroundRepeat: backgroundRepeat = "BackgroundRepeatStyle"

open BackgroundSize;
type backgroundSize = { style: BackgroundSize.variant }
@module("./Size/BackgroundSizeStyle.css.js") external backgroundSize: backgroundSize = "BackgroundSizeStyle"

module BackgroundLayer = {
  @genType
  type i = {
    "backgroundAttachment": BackgroundAttachment.t,
    "backgroundClip": BackgroundClip.t,
    "backgroundColor": BackgroundColor.t,
    "backgroundOpacity": BackgroundOpacity.t,
    "backgroundOrigin": BackgroundOrigin.t,
    "backgroundPosition": BackgroundPosition.t,
    "backgroundRepeat": BackgroundRepeat.t,
    "backgroundSize": BackgroundSize.t,
  }

  @genType
  let resolve = (i) => [
    switch (i["backgroundAttachment"]) {
    | #scroll  => backgroundAttachment.style["scroll"]
    | #fixed   => backgroundAttachment.style["fixed"]
    | #local   => backgroundAttachment.style["local"]
    | #inherit => backgroundAttachment.style["inherit"]
    | #initial => backgroundAttachment.style["initial"]
    | #revert  => backgroundAttachment.style["revert"]
    | #unset   => backgroundAttachment.style["unset"]
    },

    switch (i["backgroundClip"]) {
    | #borderBox  => backgroundClip.style["borderBox"]
    | #paddingBox => backgroundClip.style["paddingBox"]
    | #contentBox => backgroundClip.style["contentBox"]
    | #text       => backgroundClip.style["text"]
    | #inherit    => backgroundClip.style["inherit"]
    | #initial    => backgroundClip.style["initial"]
    | #revert     => backgroundClip.style["revert"]
    | #unset      => backgroundClip.style["unset"]
    },

    switch (i["backgroundColor"]) {
    | #primary   => backgroundColor.style["primary"]
    | #secondary => backgroundColor.style["secondary"]
    | #white     => backgroundColor.style["white"]
    | #black     => backgroundColor.style["black"]
    },

    switch (i["backgroundOpacity"]) {
    | #0   => backgroundOpacity.style["0"]
    | #10  => backgroundOpacity.style["10"]
    | #20  => backgroundOpacity.style["20"]
    | #30  => backgroundOpacity.style["30"]
    | #40  => backgroundOpacity.style["40"]
    | #50  => backgroundOpacity.style["50"]
    | #60  => backgroundOpacity.style["60"]
    | #70  => backgroundOpacity.style["70"]
    | #80  => backgroundOpacity.style["80"]
    | #90  => backgroundOpacity.style["90"]
    | #100 => backgroundOpacity.style["100"]
    },

    switch (i["backgroundOrigin"]) {
    | #borderBox  => backgroundOrigin.style["borderBox"]
    | #paddingBox => backgroundOrigin.style["paddingBox"]
    | #contentBox => backgroundOrigin.style["contentBox"]
    | #inherit    => backgroundOrigin.style["inherit"]
    | #initial    => backgroundOrigin.style["initial"]
    | #revert     => backgroundOrigin.style["revert"]
    | #unset      => backgroundOrigin.style["unset"]
    },

    switch (i["backgroundPosition"]) {
    | #top     => backgroundPosition.style["top"]
    | #bottom  => backgroundPosition.style["bottom"]
    | #left    => backgroundPosition.style["left"]
    | #right   => backgroundPosition.style["right"]
    | #center  => backgroundPosition.style["center"]
    | #inherit => backgroundPosition.style["inherit"]
    | #initial => backgroundPosition.style["initial"]
    | #revert  => backgroundPosition.style["revert"]
    | #unset   => backgroundPosition.style["unset"]
    },

    switch (i["backgroundRepeat"]) {
    | #repeatX        => backgroundRepeat.style["repeatX"]
    | #repeatY        => backgroundRepeat.style["repeatY"]
    | #repeat         => backgroundRepeat.style["repeat"]
    | #space          => backgroundRepeat.style["space"]
    | #round          => backgroundRepeat.style["round"]
    | #noRepeat       => backgroundRepeat.style["noRepeat"]
    | #repeat_Space   => backgroundRepeat.style["repeat_Space"]
    | #repeat_Repeat  => backgroundRepeat.style["repeat_Repeat"]
    | #round_Space    => backgroundRepeat.style["round_Space"]
    | #noRepeat_Round => backgroundRepeat.style["noRepeat_Round"]
    | #inherit        => backgroundRepeat.style["inherit"]
    | #initial        => backgroundRepeat.style["initial"]
    | #revert         => backgroundRepeat.style["revert"]
    | #unset          => backgroundRepeat.style["unset"]
    },

    switch (i["backgroundSize"]) {
    | #cover   => backgroundSize.style["cover"]
    | #contain => backgroundSize.style["contain"]
    | #50      => backgroundSize.style["50"]
    | #auto    => backgroundSize.style["auto"]
    | #inherit => backgroundSize.style["inherit"]
    | #initial => backgroundSize.style["initial"]
    | #revert  => backgroundSize.style["revert"]
    | #unset   => backgroundSize.style["unset"]
    },
  ] -> joinWith(" ");
}
