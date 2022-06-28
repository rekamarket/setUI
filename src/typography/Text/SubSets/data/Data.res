open DataStyleProps

@module("./DataStyle.css.js") external classNameRoot: string = "className"

let { displayName } = module(DataMeta)
let className = classNameRoot

external dangerousTagCast: TextProto.data => TextProto.tag = "%identity";

@react.component
let make = (
//  ~nodeRef: option<ReactDOM.domRef>=?,
  ~tag: option<TextProto.data>=?,
  ~className: option<string>=?,
  ~style: option<Retype.style>=?,

  ~color: option<Color.t>=?,

  ~fontFamily: option<FontFamily.t>=?,
  ~fontSize: option<FontSize.t>=?,
  ~fontStyle: option<FontStyle.t>=?,
  ~fontWeight: option<FontWeight.t>=?,

  ~textTransform: option<TextTransform.t>=?,

  ~children: React.element,
) => {
  let colorCtx = Color.useColor()
  let fontSizeCtx = FontSize.useFontSize()

  TextProto.make(
  //  ~nodeRef = ?nodeRef,
    ~tag = switch tag {
    | Some(t) => t -> dangerousTagCast
    | None => #data
    },

    ~className = Cn.make([classNameRoot, switch className {
    | Some(c) => c
    | None => ""
    }]),
    ~style = ?style,

    ~color = switch color {
    | Some(s) => s
    | None => switch colorCtx {
      | Some(l) => l
      | None => styleProps.color
      }
    },

    ~fontFamily = switch fontFamily {
    | Some(s) => s
    | None => styleProps.fontFamily
    },
    ~fontSize = switch fontSize {
    | Some(s) => s
    | None => switch fontSizeCtx {
      | Some(l) => l
      | None => styleProps.fontSize
      }
    },
    ~fontStyle = switch fontStyle {
    | Some(s) => s
    | None => styleProps.fontStyle
    },
    ~fontWeight = switch fontWeight {
    | Some(s) => s
    | None => styleProps.fontWeight
    },

    ~textTransform = switch textTransform {
    | Some(s) => s
    | None => styleProps.textTransform
    },

    ~children,
  )
}
