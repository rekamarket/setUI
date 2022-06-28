@genType
let resolve = (~color: LitonColor.t, ~size: LitonSize.t, ~variant: LitonVariant.t) =>
  Cn.make([
    LitonColorResolver.make(. color),
    LitonSizeResolver.make(. size),
    LitonVariantResolver.make(. variant),
  ])
