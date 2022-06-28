let resolve = (
  ~paddingInlineEnd: PaddingReflection.t,
  ~paddingInlineStart: PaddingReflection.t,
) => Cn.make([
  PaddingInlineEndResolver.make   ( . paddingInlineEnd   ),
  PaddingInlineStartResolver.make ( . paddingInlineStart ),
])
