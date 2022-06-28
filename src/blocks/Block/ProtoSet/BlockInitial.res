@module("./BlockProtoStyle.css.js") external classNameRoot: string = "className"

let className = classNameRoot

type styleProps = {
  marginBlockEnd: MarginReflection.t,
  marginBlockStart: MarginReflection.t,
  marginInlineEnd: MarginReflection.t,
  marginInlineStart: MarginReflection.t,
  paddingBlockEnd: PaddingReflection.t,
  paddingBlockStart: PaddingReflection.t,
  paddingInlineEnd: PaddingReflection.t,
  paddingInlineStart: PaddingReflection.t,
}

@genType type tag = [DivHTML.tag]

let make = (
  ~tag: tag,
  ~className: string,
  ~style: option<Retype.style>=?,
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
