@genType
let resolve = (
  ~markerGap: MarkerGap.t,
  ~markerPosition: MarkerPosition.t,
  ~markerSize: MarkerSize.t,
  ~markerType: MarkerType.t,
) =>
  Cn.make([
    MarkerGapResolver.make(. markerGap),
    MarkerPositionResolver.make(. markerPosition),
    MarkerSizeResolver.make(. markerSize),
    MarkerTypeResolver.make(. markerType),
  ])
