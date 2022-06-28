let resolve = (
  ~fontFamily: FontFamily.t,
  ~fontSize  : FontSize.t  ,
  ~fontStyle : FontStyle.t ,
  ~fontWeight: FontWeight.t,
) => Cn.make([
  FontFamilyResolver.make ( . fontFamily ),
  FontSizeResolver.make   ( . fontSize   ),
  FontStyleResolver.make  ( . fontStyle  ),
  FontWeightResolver.make ( . fontWeight ),
])
