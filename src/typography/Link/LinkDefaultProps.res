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

module LinkDefaultProps = {
  type make = {
    color: Color.t,

    fontSize: FontSize.t,
    fontWeight: FontWeight.t,
    fontFamily: FontFamily.t,
    fontStyle: FontStyle.t,

    textDecorationColor: TextDecorationColor.t,
    textDecorationLine: TextDecorationLine.t,
    textDecorationStyle: TextDecorationStyle.t,
    textDecorationThickness: TextDecorationThickness.t,

    textTransform: TextTransform.t,
  }

  @genType
  let make = {
    color: #primary,

    fontSize: #medium,
    fontWeight: #normal,
    fontFamily: #primary,
    fontStyle: #normal,

    textDecorationColor: #currentColor,
    textDecorationLine: #underline,
    textDecorationStyle: #solid,
    textDecorationThickness: #thin,

    textTransform: #none,
  }
}
