@module("./FrameProtoStyle.css.js") external classNameRoot: string = "className"

let className = classNameRoot

type styleProps = {
  align: TextAlign.t,
  color: Color.t,
  size: FrameSize.t,
  marginBlockEnd: MarginReflection.t,
  marginBlockStart: MarginReflection.t,
  marginInlineEnd: MarginReflection.t,
  marginInlineStart: MarginReflection.t,
  paddingBlockEnd: PaddingReflection.t,
  paddingBlockStart: PaddingReflection.t,
  paddingInlineEnd: PaddingReflection.t,
  paddingInlineStart: PaddingReflection.t,
}

@genType type section = [DivHTML.tag]
@genType type tag = [DivHTML.tag | SectionHTML.tag]

let make = (
  ~tag: tag,
  ~className: string,
  ~style: option<Retype.style>=?,
  ~align: TextAlign.t,
  ~color: Color.t,
  ~size: FrameSize.t,
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
      ~className=Cn.make([
        classNameRoot,
        className,
        ContentLayer.resolve(~align),
        ColorLayer.resolve(~color),
        FrameLayer.resolve(~size),
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
