open Cx

open Color
open ColorLayer

open FontFamily
open FontSize
open FontStyle
open FontWeight
open FontLayer

open TextDecorationColor
open TextDecorationLine
open TextDecorationStyle
open TextDecorationThickness
open TextDecorationLayer

open TextTransform
open TextTransformLayer

module LinkProto = {
  type props = {
    "href": string,
    "className": string,

    "color": Color.t,

    "fontFamily": FontFamily.t,
    "fontSize": FontSize.t,
    "fontStyle": FontStyle.t,
    "fontWeight": FontWeight.t,

    "textDecorationColor": TextDecorationColor.t,
    "textDecorationLine": TextDecorationLine.t,
    "textDecorationStyle": TextDecorationStyle.t,
    "textDecorationThickness": TextDecorationThickness.t,

    "textTransform": TextTransform.t,

    "children": React.element,
  }

  @obj external makeProps:(
    ~href: string,
    ~className: string,

    ~color: Color.t,

    ~fontFamily: FontFamily.t,
    ~fontSize: FontSize.t,
    ~fontStyle: FontStyle.t,
    ~fontWeight: FontWeight.t,

    ~textDecorationColor: TextDecorationColor.t,
    ~textDecorationLine: TextDecorationLine.t,
    ~textDecorationStyle: TextDecorationStyle.t,
    ~textDecorationThickness: TextDecorationThickness.t,

    ~textTransform: TextTransform.t,

    ~children: React.element,
    unit
  ) => props = ""

  let make = (props: props) => {
    React.createElementVariadic(
      ReactDOM.stringToComponent("a"),
      ReactDOM.domProps(
        ~className = cx([
          props["className"],

          ColorLayer.resolve(
            ~color = props["color"],
          ),

          FontLayer.resolve(
            ~fontFamily = props["fontFamily"],
            ~fontSize = props["fontSize"],
            ~fontStyle = props["fontStyle"],
            ~fontWeight = props["fontWeight"],
          ),

          TextDecorationLayer.resolve(
            ~textDecorationColor = props["textDecorationColor"],
            ~textDecorationLine = props["textDecorationLine"],
            ~textDecorationStyle = props["textDecorationStyle"],
            ~textDecorationThickness = props["textDecorationThickness"],
          ),

          TextTransformLayer.resolve(
            ~textTransform = props["textTransform"],
          ),
        ]),
        ~href = props["href"],
        ()
      ),
      [props["children"]],
    )
  }
}
