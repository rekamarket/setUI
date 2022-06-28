open BlockQuoteStyleProps

@module("./BlockQuoteStyle.css.js") external classNameRoot: string = "className"

external dangerousTagCast: BlockQuoteProto.blockQuote => BlockQuoteProto.tag = "%identity"

let {displayName} = module(BlockQuoteMeta)
let className = classNameRoot

@react.component
let make = (
  ~tag: option<BlockQuoteProto.blockQuote>=?,
  ~cite: option<string>=?,
  ~className: option<string>=?,
  ~style: option<Retype.style>=?,
  ~color: option<Color.t>=?,
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
  BlockQuoteProto.make(
    ~tag=switch tag {
    | Some(t) => t->dangerousTagCast
    | None => #blockquote
    },
    ~cite?,
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
