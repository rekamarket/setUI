open LinkProto
open LinkDefaultProps

open Color

open FontFamily
open FontSize
open FontStyle
open FontWeight

open TextDecorationColor
open TextDecorationLine
open TextDecorationStyle
open TextDecorationThickness

open TextTransform

module LinkSet = {
  @genType
  @react.component
  let make = (
    ~href: string,
    ~className: string = "",
    ~color: Color.t = LinkDefaultProps.make.color,

    ~fontFamily: FontFamily.t = LinkDefaultProps.make.fontFamily,
    ~fontSize: FontSize.t = LinkDefaultProps.make.fontSize,
    ~fontStyle: FontStyle.t = LinkDefaultProps.make.fontStyle,
    ~fontWeight: FontWeight.t = LinkDefaultProps.make.fontWeight,

    ~textDecorationColor: TextDecorationColor.t = LinkDefaultProps.make.textDecorationColor,
    ~textDecorationLine: TextDecorationLine.t = LinkDefaultProps.make.textDecorationLine,
    ~textDecorationStyle: TextDecorationStyle.t = LinkDefaultProps.make.textDecorationStyle,
    ~textDecorationThickness: TextDecorationThickness.t = LinkDefaultProps.make.textDecorationThickness,

    ~textTransform: TextTransform.t = LinkDefaultProps.make.textTransform,

    ~children: React.element,
  ) => LinkProto.make({
    "href": href,
    "className": className,
    "color": color,
    "fontFamily": fontFamily,
    "fontSize": fontSize,
    "fontStyle": fontStyle,
    "fontWeight": fontWeight,
    "textDecorationColor": textDecorationColor,
    "textDecorationLine": textDecorationLine,
    "textDecorationStyle": textDecorationStyle,
    "textDecorationThickness": textDecorationThickness,
    "textTransform": textTransform,
    "children": children,
  })
}
