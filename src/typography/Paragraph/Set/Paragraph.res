open ParagraphStyleProps

@module("./ParagraphStyle.css.js") external classNameRoot: string = "className"

external dangerousTagCast: ParagraphProto.p => ParagraphProto.tag = "%identity"

let {displayName} = module(ParagraphMeta)
let className = classNameRoot

@react.component
let make = (
  ~tag: option<ParagraphProto.p>=?,
  ~className: option<string>=?,
  ~style: option<Retype.style>=?,
  ~color: option<Color.t>=?,
  ~fontFamily: option<FontFamily.t>=?,
  ~fontSize: option<FontSize.t>=?,
  ~fontStyle: option<FontStyle.t>=?,
  ~fontWeight: option<FontWeight.t>=?,
  ~lineClamp: option<LineClamp.t>=?,
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
  ParagraphProto.make(
    ~tag=switch tag {
    | Some(t) => t->dangerousTagCast
    | None => #p
    },
    ~className=Cn.make([
      classNameRoot,
      switch className {
      | Some(c) => c
      | None => ""
      },
    ]),
    ~style?,
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
    ~lineClamp=switch lineClamp {
    | Some(s) => s
    | None => styleProps.lineClamp
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
