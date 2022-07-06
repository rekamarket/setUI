open OlStyleProps

@module("./OlStyle.css.js") external classNameRoot: string = "className"

let {displayName} = module(OlMeta)
let className = classNameRoot

external dangerousTagCast: ListProto.ol => ListProto.tag = "%identity"

@react.component
let make = (
  ~tag: option<ListProto.ol>=?,
  ~className: option<string>=?,
  ~classNameLi: option<string>=?,
  ~style: option<Retype.style>=?,
  ~color: option<Color.t>=?,
  ~fontFamily: option<FontFamily.t>=?,
  ~fontSize: option<FontSize.t>=?,
  ~fontStyle: option<FontStyle.t>=?,
  ~fontWeight: option<FontWeight.t>=?,
  ~markerGap: option<MarkerGap.t>=?,
  ~markerPosition: option<MarkerPosition.t>=?,
  ~markerSize: option<MarkerSize.t>=?,
  ~markerType: option<MarkerType.t>=?,
  ~children: React.element,
) =>
  ListProto.make(
    ~tag=switch tag {
    | Some(t) => t->dangerousTagCast
    | None => #ol
    },
    ~className=Cn.make([
      classNameRoot,
      switch className {
      | Some(s) => s
      | None => ""
      },
    ]),
    ~classNameLi?,
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
    ~markerGap=switch markerGap {
    | Some(s) => s
    | None => styleProps.markerGap
    },
    ~markerPosition=switch markerPosition {
    | Some(s) => s
    | None => styleProps.markerPosition
    },
    ~markerSize=switch markerSize {
    | Some(s) => s
    | None => styleProps.markerSize
    },
    ~markerType=switch markerType {
    | Some(s) => s
    | None => styleProps.markerType
    },
    ~children,
  )
