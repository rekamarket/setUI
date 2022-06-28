@module("./TextContainerProtoStyle.css.js") external classNameRoot: string = "className"

let className = classNameRoot

type styleProps = {
  color: Color.t,

  fontSize: FontSize.t,
  fontWeight: FontWeight.t,
  fontFamily: FontFamily.t,
  fontStyle: FontStyle.t,
}

@genType type p = [DivHTML.tag]
@genType type tag = [DivHTML.tag | PHTML.tag]

let make = (
//  ~nodeRef: option<ReactDOM.domRef>=?,
  ~tag: tag,
  ~className: string,
  ~style: option<Retype.style>=?,

  ~color: Color.t,

  ~fontFamily: FontFamily.t,
  ~fontSize: FontSize.t,
  ~fontStyle: FontStyle.t,
  ~fontWeight: FontWeight.t,

  ~children: React.element,
) => {
  React.createElementVariadic(
    ReactDOM.stringToComponent(tag :> string),
    ReactDOM.domProps(
      // ~ref = ?nodeRef,
      ~className = Cn.make([
        classNameRoot,
        className,

        ColorLayer.resolve(
          ~color,
        ),

        FontLayer.resolve(
          ~fontFamily,
          ~fontSize,
          ~fontStyle,
          ~fontWeight,
        ),
      ]),
      ~style = ?style,
      ()
    ),
    [children],
  )
}
