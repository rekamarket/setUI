open PStyleProps

@module("./PStyle.css.js") external classNameRoot: string = "className"

let {displayName} = module(PMeta)
let className = classNameRoot

external dangerousTagCast: TextContainerProto.p => TextContainerProto.tag = "%identity"

@react.component
let make = (
  //  ~nodeRef: option<ReactDOM.domRef>=?,
  ~tag: option<TextContainerProto.p>=?,
  ~className: option<string>=?,
  ~style: option<Retype.style>=?,
  ~color: option<Color.t>=?,
  ~fontFamily: option<FontFamily.t>=?,
  ~fontSize: option<FontSize.t>=?,
  ~fontStyle: option<FontStyle.t>=?,
  ~fontWeight: option<FontWeight.t>=?,
  ~children: React.element,
) =>
  TextContainerProto.make(
    //  ~nodeRef = ?nodeRef,
    ~tag=switch tag {
    | Some(t) => t->dangerousTagCast
    | None => #p
    },
    ~className=Cn.make([
      classNameRoot,
      switch className {
      | Some(s) => s
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
    ~children,
  )
