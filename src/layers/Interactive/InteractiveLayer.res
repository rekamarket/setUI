open Js.Array2;

open InteractiveSize;
type interactiveSize = { style: InteractiveSize.variant }
@module("./Size/InteractiveSizeStyle.css.js") external interactiveSize: interactiveSize = "InteractiveSizeStyle"

open InteractiveVariant;
type interactiveVariant = { style: InteractiveVariant.variant }
@module("./Variant/InteractiveVariantStyle.css.js") external interactiveVariant: interactiveVariant = "InteractiveVariantStyle"

module InteractiveLayer = {
  @genType
  type i = {
    "size": InteractiveSize.t,
    "variant": InteractiveVariant.t,
  }

  @genType
  let resolve = (i) => [
    switch (i["size"]) {
    | #xsmall => interactiveSize.style["xsmall"]
    | #small  => interactiveSize.style["small"]
    | #medium => interactiveSize.style["medium"]
    | #large  => interactiveSize.style["large"]
    | #xlarge => interactiveSize.style["xlarge"]
    },

    switch (i["variant"]) {
    | #solid      => interactiveVariant.style["solid"]
    | #ghost      => interactiveVariant.style["ghost"]
    | #borderless => interactiveVariant.style["borderless"]
    | #text       => interactiveVariant.style["text"]
    },
  ] -> joinWith(" ");
}
