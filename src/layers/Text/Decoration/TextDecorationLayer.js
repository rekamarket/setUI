// Generated by ReScript, PLEASE EDIT WITH CARE

import * as TextDecorationLineStyleCssJs from "./Line/TextDecorationLineStyle.css.js";
import * as TextDecorationColorStyleCssJs from "./Color/TextDecorationColorStyle.css.js";
import * as TextDecorationStyleStyleCssJs from "./Style/TextDecorationStyleStyle.css.js";
import * as TextDecorationThicknessStyleCssJs from "./Thickness/TextDecorationThicknessStyle.css.js";

var textDecorationColor = TextDecorationColorStyleCssJs.TextDecorationColorStyle;

var textDecorationLine = TextDecorationLineStyleCssJs.TextDecorationLineStyle;

var textDecorationStyle = TextDecorationStyleStyleCssJs.TextDecorationStyleStyle;

var textDecorationThickness = TextDecorationThicknessStyleCssJs.TextDecorationThicknessStyle;

function resolve(i) {
  var match = i.textDecorationColor;
  var match$1 = i.textDecorationLine;
  var match$2 = i.textDecorationStyle;
  var match$3 = i.textDecorationThickness;
  return [
            match === "secondary" ? textDecorationColor.style.secondary : (
                match === "primary" ? textDecorationColor.style.primary : (
                    match === "currentColor" ? textDecorationColor.style.currentColor : (
                        match === "black" ? textDecorationColor.style.black : textDecorationColor.style.white
                      )
                  )
              ),
            match$1 === "none" ? textDecorationLine.style.none : (
                match$1 === "initial" ? textDecorationLine.style.initial : (
                    match$1 === "overline_underline" ? textDecorationLine.style.overline_underline : (
                        match$1 === "underline" ? textDecorationLine.style.underline : (
                            match$1 === "lineThrough_underline" ? textDecorationLine.style.lineThrough_underline : (
                                match$1 === "lineThrough" ? textDecorationLine.style.lineThrough : (
                                    match$1 === "overline_lineThrough" ? textDecorationLine.style.overline_lineThrough : (
                                        match$1 === "unset" ? textDecorationLine.style.unset : (
                                            match$1 === "inherit" ? textDecorationLine.style.inherit : (
                                                match$1 === "overline_lineThrough_underline" ? textDecorationLine.style.overline_lineThrough_underline : (
                                                    match$1 === "blink" ? textDecorationLine.style.blink : textDecorationLine.style.overline
                                                  )
                                              )
                                          )
                                      )
                                  )
                              )
                          )
                      )
                  )
              ),
            match$2 === "wavy" ? textDecorationStyle.style.wavy : (
                match$2 === "solid" ? textDecorationStyle.style.solid : (
                    match$2 === "dashed" ? textDecorationStyle.style.dashed : (
                        match$2 === "unset" ? textDecorationStyle.style.unset : (
                            match$2 === "inherit" ? textDecorationStyle.style.inherit : (
                                match$2 === "dotted" ? textDecorationStyle.style.dotted : (
                                    match$2 === "double" ? textDecorationStyle.style.double : textDecorationStyle.style.initial
                                  )
                              )
                          )
                      )
                  )
              ),
            match$3 === "bold" ? textDecorationThickness.style.bold : (
                match$3 === "initial" ? textDecorationThickness.style.initial : (
                    match$3 === "thin" ? textDecorationThickness.style.thin : (
                        match$3 === "light" ? textDecorationThickness.style.light : (
                            match$3 === "medium" ? textDecorationThickness.style.medium : (
                                match$3 === "fromFont" ? textDecorationThickness.style.fromFont : (
                                    match$3 === "unset" ? textDecorationThickness.style.unset : (
                                        match$3 === "inherit" ? textDecorationThickness.style.inherit : textDecorationThickness.style.auto
                                      )
                                  )
                              )
                          )
                      )
                  )
              )
          ].join(" ");
}

var TextDecorationLayer = {
  resolve: resolve
};

export {
  textDecorationColor ,
  textDecorationLine ,
  textDecorationStyle ,
  textDecorationThickness ,
  TextDecorationLayer ,
  
}
/* textDecorationColor Not a pure module */