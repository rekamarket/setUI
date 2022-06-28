let resolve = (
  ~marginBlockEnd: MarginReflection.t,
  ~marginBlockStart: MarginReflection.t,
  ~marginInlineEnd: MarginReflection.t,
  ~marginInlineStart: MarginReflection.t,
) => Cn.make([
  MarginBlockEndResolver.make    ( . marginBlockEnd    ),
  MarginBlockStartResolver.make  ( . marginBlockStart  ),
  MarginInlineEndResolver.make   ( . marginInlineEnd   ),
  MarginInlineStartResolver.make ( . marginInlineStart ),
])
