@module("./ParagraphProtoStyle.css.js") external classNameRoot: string = "className"

let className = classNameRoot

type styleProps = {
  color: Color.t,
  fontSize: FontSize.t,
  fontWeight: FontWeight.t,
  fontFamily: FontFamily.t,
  fontStyle: FontStyle.t,
  lineClamp: LineClamp.t,
  marginBlockEnd: MarginReflection.t,
  marginBlockStart: MarginReflection.t,
  marginInlineEnd: MarginReflection.t,
  marginInlineStart: MarginReflection.t,
  paddingBlockEnd: PaddingReflection.t,
  paddingBlockStart: PaddingReflection.t,
  paddingInlineEnd: PaddingReflection.t,
  paddingInlineStart: PaddingReflection.t,
}

@genType type p = [DivHTML.tag]
@genType type tag = [DivHTML.tag | PHTML.tag]

let make = (
  ~tag: tag,
  ~className: string,
  ~style: option<Retype.style>=?,
  ~color: Color.t,
  ~fontFamily: FontFamily.t,
  ~fontSize: FontSize.t,
  ~fontStyle: FontStyle.t,
  ~fontWeight: FontWeight.t,
  ~lineClamp: LineClamp.t,
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
  <Color.component value={color->Some}>
    <FontSize.component value={fontSize->Some}>
      {React.createElementVariadic(
        ReactDOM.stringToComponent((tag :> string)),
        ReactDOM.domProps(
          ~className=Cn.make([
            classNameRoot,
            className,
            ColorLayer.resolve(~color),
            FontLayer.resolve(~fontFamily, ~fontSize, ~fontStyle, ~fontWeight),
            LineClampLayer.resolve(~lineClamp),
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
      )}
    </FontSize.component>
  </Color.component>
}
