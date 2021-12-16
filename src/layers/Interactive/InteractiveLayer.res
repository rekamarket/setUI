open Js.Array2;

open InteractiveShape;
type interactiveShape = { style: InteractiveShape.variant }
@module("./Shape/InteractiveShapeStyle.css.js") external interactiveShape: interactiveShape = "InteractiveShapeStyle"

open InteractiveSize;
type interactiveSize = { style: InteractiveSize.variant }
@module("./Size/InteractiveSizeStyle.css.js") external interactiveSize: interactiveSize = "InteractiveSizeStyle"

open InteractiveVariant;
type interactiveVariant = { style: InteractiveVariant.variant }
@module("./Variant/InteractiveVariantStyle.css.js") external interactiveVariant: interactiveVariant = "InteractiveVariantStyle"

module InteractiveLayer = {
  @genType
  type i = {
    "interactiveShape": InteractiveShape.t,
    "interactiveSize": InteractiveSize.t,
    "interactiveVariant": InteractiveVariant.t,
  }

  @genType
  let resolve = (i) => [
    switch (i["interactiveShape"]) {
    | #rect   => interactiveShape.style["rect"]
    | #square => interactiveShape.style["square"]
    | #fit    => interactiveShape.style["fit"]
    },

    switch (i["interactiveSize"]) {
    | #xsmall => interactiveSize.style["xsmall"]
    | #small  => interactiveSize.style["small"]
    | #medium => interactiveSize.style["medium"]
    | #large  => interactiveSize.style["large"]
    | #xlarge => interactiveSize.style["xlarge"]
    },

    switch (i["interactiveVariant"]) {
    | #solid      => interactiveVariant.style["solid"]
    | #ghost      => interactiveVariant.style["ghost"]
    | #borderless => interactiveVariant.style["borderless"]
    | #text       => interactiveVariant.style["text"]
    },
  ] -> joinWith(" ");
}
