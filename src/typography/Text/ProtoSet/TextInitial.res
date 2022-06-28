@module("./TextProtoStyle.css.js") external classNameRoot: string = "className"

let className = classNameRoot

type styleProps = {
  color: Color.t,

  fontSize: FontSize.t,
  fontWeight: FontWeight.t,
  fontFamily: FontFamily.t,
  fontStyle: FontStyle.t,

  textTransform: TextTransform.t,
}

type t_abbr   = AbbrHTML.tag
type t_b      = BHTML.tag
type t_data   = DataHTML.tag
type t_dfn    = DfnHTML.tag
type t_dd     = DdHTML.tag
type t_dt     = DtHTML.tag
type t_em     = EmHTML.tag
type t_i      = IHTML.tag
type t_small  = SmallHTML.tag
type t_span   = SpanHTML.tag
type t_strong = StrongHTML.tag

@genType type abbr   = [/*t_abbr |*/t_b |  t_data |  t_dfn |  t_dd |  t_dt |   t_em |  t_i |  t_small |  t_span  |  t_strong  ]
@genType type b      = [  t_abbr |/*t_b |*/t_data |  t_dfn |  t_dd |  t_dt |   t_em |  t_i |  t_small |  t_span  |  t_strong  ]
@genType type data   = [  t_abbr |  t_b |/*t_data |*/t_dfn |  t_dd |  t_dt |   t_em |  t_i |  t_small |  t_span  |  t_strong  ]
@genType type dfn    = [  t_abbr |  t_b |  t_data |/*t_dfn |*/t_dd |  t_dt |   t_em |  t_i |  t_small |  t_span  |  t_strong  ]
@genType type dd     = [  t_abbr |  t_b |  t_data |  t_dfn |/*t_dd |*/t_dt |   t_em |  t_i |  t_small |  t_span  |  t_strong  ]
@genType type dt     = [  t_abbr |  t_b |  t_data |  t_dfn |  t_dd |/*t_dt |*/ t_em |  t_i |  t_small |  t_span  |  t_strong  ]
@genType type em     = [  t_abbr |  t_b |  t_data |  t_dfn |  t_dd |  t_dt |/* t_em |*/t_i |  t_small |  t_span  |  t_strong  ]
@genType type i      = [  t_abbr |  t_b |  t_data |  t_dfn |  t_dd |  t_dt |   t_em |/*t_i |*/t_small |  t_span  |  t_strong  ]
@genType type small  = [  t_abbr |  t_b |  t_data |  t_dfn |  t_dd |  t_dt |   t_em |  t_i |/*t_small |*/t_span  |  t_strong  ]
@genType type span   = [  t_abbr |  t_b |  t_data |  t_dfn |  t_dd |  t_dt |   t_em |  t_i |  t_small |/*t_span  |*/t_strong  ]
@genType type strong = [  t_abbr |  t_b |  t_data |  t_dfn |  t_dd |  t_dt |   t_em |  t_i |  t_small |  t_span/*|  t_strong*/]
// --> all
@genType type tag    = [  t_abbr |  t_b |  t_data |  t_dfn |  t_dd |  t_dt |   t_em |  t_i |  t_small |  t_span  |  t_strong  ]

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

  ~textTransform: TextTransform.t,

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

        TextTransformLayer.resolve(
          ~textTransform,
        ),
      ]),
      ~style = ?style,
      ()
    ),
    [children],
  )
}
