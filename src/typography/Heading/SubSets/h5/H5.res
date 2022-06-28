open H5StyleProps

@module("./H5Style.css.js") external classNameRoot: string = "className"

let {displayName} = module(H5Meta)
let className = classNameRoot

external dangerousLevelCast: HeadingProto.h5 => HeadingProto.level = "%identity"

@react.component
let make = (
  ~level: option<HeadingProto.h5>=?,
  ~tag: option<HeadingProto.tag>=?,
  ~className: option<string>=?,
  ~style: option<Retype.style>=?,
  ~align: option<TextAlign.t>=?,
  ~color: option<Color.t>=?,
  ~fontFamily: option<FontFamily.t>=?,
  ~fontSize: option<FontSize.t>=?,
  ~fontStyle: option<FontStyle.t>=?,
  ~fontWeight: option<FontWeight.t>=?,
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
  HeadingProto.make(
    ~level=switch level {
    | Some(l) => l->dangerousLevelCast
    | None => #5
    },
    ~tag?,
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
    ~fontFamily=switch fontFamily {
    | Some(s) => s
    | None => styleProps.fontFamily
    },
    ~fontSize=switch fontSize {
    | Some(s) => s
    | None => styleProps.fontSize
    },
    ~fontStyle=switch fontStyle {
    | Some(s) => s
    | None => styleProps.fontStyle
    },
    ~fontWeight=switch fontWeight {
    | Some(s) => s
    | None => styleProps.fontWeight
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
