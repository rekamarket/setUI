open FrameStyleProps

@module("./FrameStyle.css.js") external classNameRoot: string = "className"

external dangerousTagCast: FrameProto.section => FrameProto.tag = "%identity"

let {displayName} = module(FrameMeta)
let className = classNameRoot

@react.component
let make = (
  ~tag: option<FrameProto.section>=?,
  ~className: option<string>=?,
  ~style: option<Retype.style>=?,
  ~align: option<TextAlign.t>=?,
  ~color: option<Color.t>=?,
  ~size: option<FrameSize.t>=?,
  ~marginBlockEnd: option<MarginReflection.t>=?,
  ~marginBlockStart: option<MarginReflection.t>=?,
  ~marginInlineEnd: option<MarginReflection.t>=?,
  ~marginInlineStart: option<MarginReflection.t>=?,
  ~paddingBlockEnd: option<PaddingReflection.t>=?,
  ~paddingBlockStart: option<PaddingReflection.t>=?,
  ~paddingInlineEnd: option<PaddingReflection.t>=?,
  ~paddingInlineStart: option<PaddingReflection.t>=?,
  ~children: React.element,
) =>
  FrameProto.make(
    ~tag=switch tag {
    | Some(t) => t->dangerousTagCast
    | None => #section
    },
    ~className=Cn.make([
      classNameRoot,
      switch className {
      | Some(c) => c
      | None => ""
      },
    ]),
    ~style?,
    ~align=switch align {
    | Some(s) => s
    | None => styleProps.align
    },
    ~color=switch color {
    | Some(s) => s
    | None => styleProps.color
    },
    ~size=switch size {
    | Some(s) => s
    | None => styleProps.size
    },
    ~marginBlockEnd=switch marginBlockEnd {
    | Some(s) => s
    | None => styleProps.marginBlockEnd
    },
    ~marginBlockStart=switch marginBlockStart {
    | Some(s) => s
    | None => styleProps.marginBlockStart
    },
    ~marginInlineEnd=switch marginInlineEnd {
    | Some(s) => s
    | None => styleProps.marginInlineEnd
    },
    ~marginInlineStart=switch marginInlineStart {
    | Some(s) => s
    | None => styleProps.marginInlineStart
    },
    ~paddingBlockEnd=switch paddingBlockEnd {
    | Some(s) => s
    | None => styleProps.paddingBlockEnd
    },
    ~paddingBlockStart=switch paddingBlockStart {
    | Some(s) => s
    | None => styleProps.paddingBlockStart
    },
    ~paddingInlineEnd=switch paddingInlineEnd {
    | Some(s) => s
    | None => styleProps.paddingInlineEnd
    },
    ~paddingInlineStart=switch paddingInlineStart {
    | Some(s) => s
    | None => styleProps.paddingInlineStart
    },
    ~children,
  )
