@module("./ListProtoStyle.css.js") external classNameRoot: string = "className"

let className = classNameRoot

type styleProps = {
  color: Color.t,
  fontFamily: FontFamily.t,
  fontSize: FontSize.t,
  fontStyle: FontStyle.t,
  fontWeight: FontWeight.t,
  markerGap: MarkerGap.t,
  markerPosition: MarkerPosition.t,
  markerSize: MarkerSize.t,
  markerType: MarkerType.t,
}

@genType type ul = [DivHTML.tag | OlHTML.tag]
@genType type ol = [DivHTML.tag | UlHTML.tag]
@genType type tag = [DivHTML.tag | UlHTML.tag | OlHTML.tag]

let make = (
  ~tag: tag,
  ~className: string,
  ~classNameLi: option<string>=?,
  ~style: option<Retype.style>=?,
  ~color: Color.t,
  ~fontFamily: FontFamily.t,
  ~fontSize: FontSize.t,
  ~fontStyle: FontStyle.t,
  ~fontWeight: FontWeight.t,
  ~markerGap: MarkerGap.t,
  ~markerPosition: MarkerPosition.t,
  ~markerSize: MarkerSize.t,
  ~markerType: MarkerType.t,
  ~children: React.element,
) => {
  <Color.component value={color->Some}>
    <FontSize.component value={fontSize->Some}>
      <FontWeight.component value={fontWeight->Some}>
        {React.createElementVariadic(
          ReactDOM.stringToComponent((tag :> string)),
          ReactDOM.domProps(
            ~className=Cn.make([
              classNameRoot,
              className,
              ColorLayer.resolve(~color),
              FontLayer.resolve(~fontFamily, ~fontSize, ~fontStyle, ~fontWeight),
              MarkerLayer.resolve(~markerGap, ~markerPosition, ~markerSize, ~markerType),
            ]),
            ~style?,
            (),
          ),
          [
            children->React.Children.map(child =>
              React.createElementVariadic(
                "li"->ReactDOM.stringToComponent,
                ReactDOM.domProps(
                  ~className=switch classNameLi {
                  | Some(c) => c
                  | None => ""
                  },
                  (),
                ),
                [child],
              )
            ),
          ],
        )}
      </FontWeight.component>
    </FontSize.component>
  </Color.component>
}
