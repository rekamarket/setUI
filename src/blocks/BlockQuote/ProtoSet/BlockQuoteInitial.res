@module("./BlockQuoteProtoStyle.css.js") external classNameRoot: string = "className"

let className = classNameRoot

type styleProps = {
  color: Color.t,
  marginBlockEnd: MarginReflection.t,
  marginBlockStart: MarginReflection.t,
  marginInlineEnd: MarginReflection.t,
  marginInlineStart: MarginReflection.t,
  paddingBlockEnd: PaddingReflection.t,
  paddingBlockStart: PaddingReflection.t,
  paddingInlineEnd: PaddingReflection.t,
  paddingInlineStart: PaddingReflection.t,
}

@genType type blockQuote = [DivHTML.tag]
@genType type tag = [DivHTML.tag | BlockquoteHTML.tag]

let make = (
  ~tag: tag,
  ~cite: option<string>=?,
  ~className: string,
  ~style: option<Retype.style>=?,
  ~color: Color.t,
  ~marginBlockEnd: MarginReflection.t,
  ~marginBlockStart: MarginReflection.t,
  ~marginInlineEnd: MarginReflection.t,
  ~marginInlineStart: MarginReflection.t,
  ~paddingBlockEnd: PaddingReflection.t,
  ~paddingBlockStart: PaddingReflection.t,
  ~paddingInlineEnd: PaddingReflection.t,
  ~paddingInlineStart: PaddingReflection.t,
  ~children: React.element,
) => {
  React.createElementVariadic(
    ReactDOM.stringToComponent((tag :> string)),
    ReactDOM.domProps(
      ~cite?,
      ~className=Cn.make([
        classNameRoot,
        className,
        ColorLayer.resolve(~color),
        MarginLayer.resolve(
          ~marginBlockEnd,
          ~marginBlockStart,
          ~marginInlineEnd,
          ~marginInlineStart,
        ),
        PaddingLayer.resolve(
          ~paddingBlockEnd,
          ~paddingBlockStart,
          ~paddingInlineEnd,
          ~paddingInlineStart,
        ),
      ]),
      ~style?,
      (),
    ),
    [children],
  )
}
