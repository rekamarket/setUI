let resolve = (
  ~textDecorationColor    : TextDecorationColor.t    ,
  ~textDecorationLine     : TextDecorationLine.t     ,
  ~textDecorationStyle    : TextDecorationStyle.t    ,
  ~textDecorationThickness: TextDecorationThickness.t,
) => Cn.make([
  TextDecorationColorResolver.make     ( . textDecorationColor     ),
  TextDecorationLineResolver.make      ( . textDecorationLine      ),
  TextDecorationStyleResolver.make     ( . textDecorationStyle     ),
  TextDecorationThicknessResolver.make ( . textDecorationThickness ),
])
