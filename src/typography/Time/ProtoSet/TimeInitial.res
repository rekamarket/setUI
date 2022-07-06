@module("./TimeProtoStyle.css.js") external classNameRoot: string = "className"

let className = classNameRoot

type styleProps = {
  color: Color.t,
  fontSize: FontSize.t,
  fontWeight: FontWeight.t,
  fontFamily: FontFamily.t,
  fontStyle: FontStyle.t,
  textTransform: TextTransform.t,
}

type t_span = SpanHTML.tag
type t_time = TimeHTML.tag

@genType type time = [t_span]
@genType type tag = [t_span | t_time]

let make = (
  ~tag: tag,
  ~className: string,
  ~style: option<Retype.style>=?,
  ~dateTime: option<string>=?,
  ~color: Color.t,
  ~fontFamily: FontFamily.t,
  ~fontSize: FontSize.t,
  ~fontStyle: FontStyle.t,
  ~fontWeight: FontWeight.t,
  ~textTransform: TextTransform.t,
  ~children: React.element,
) => {
  React.createElementVariadic(
    ReactDOM.stringToComponent((tag :> string)),
    ReactDOM.domProps(
      ~dateTime?,
      ~className=Cn.make([
        classNameRoot,
        className,
        ColorLayer.resolve(~color),
        FontLayer.resolve(~fontFamily, ~fontSize, ~fontStyle, ~fontWeight),
        TextTransformLayer.resolve(~textTransform),
      ]),
      ~style?,
      (),
    ),
    [children],
  )
}
