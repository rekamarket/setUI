@module("./HeadingProtoStyle.css.js") external classNameRoot: string = "className"

let className = classNameRoot

type styleProps = {
  color: Color.t,

  fontSize: FontSize.t,
  fontWeight: FontWeight.t,
  fontFamily: FontFamily.t,
  fontStyle: FontStyle.t,
}

@genType type h1 = [#2 | #3 | #4 | #5 | #6]
@genType type h2 = [#1 | #3 | #4 | #5 | #6]
@genType type h3 = [#1 | #2 | #4 | #5 | #6]
@genType type h4 = [#1 | #2 | #3 | #5 | #6]
@genType type h5 = [#1 | #2 | #3 | #4 | #6]
@genType type h6 = [#1 | #2 | #3 | #4 | #5]

@genType type level = [#1 | #2 | #3 | #4 | #5 | #6]

let level: array<level> = [
  #1,
  #2,
  #3,
  #4,
  #5,
  #6,
]

@genType
type tag = [
| DivHTML.tag
| SpanHTML.tag
]

let make = (
//  ~nodeRef: option<ReactDOM.domRef>=?,
  ~level: level,
  ~tag: option<tag>=?,
  ~className: string,
  ~style: option<Retype.style>=?,

  ~color: Color.t,

  ~fontFamily: FontFamily.t,
  ~fontSize: FontSize.t,
  ~fontStyle: FontStyle.t,
  ~fontWeight: FontWeight.t,

  ~children: React.element,
) => {
  let element = switch tag {
  | None => switch level {
    | #1 => "h1"
    | #2 => "h2"
    | #3 => "h3"
    | #4 => "h4"
    | #5 => "h5"
    | #6 => "h6"
    }
  | Some(t) => switch t {
    | #div  => "div"
    | #span => "span"
    }
  }

  let (ariaLevel, role) = switch tag {
  | None => (None, None)
  | Some(_) => (switch level {
    | #1 => 1
    | #2 => 2
    | #3 => 3
    | #4 => 4
    | #5 => 5
    | #6 => 6
    } -> Some, "heading" -> Some)
  }

  <Color.component value=(color -> Some)>
    <FontSize.component value=(fontSize -> Some)>
      <FontWeight.component value=(fontWeight -> Some)>
        {React.createElementVariadic(
          ReactDOM.stringToComponent(element),
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
            ~ariaLevel = ?ariaLevel,
            ~role = ?role,
            ()
          ),
          [children],
        )}
      </FontWeight.component>
    </FontSize.component>
  </Color.component>
}
