// Generated by ReScript, PLEASE EDIT WITH CARE

import * as GapStyleCssJs from "./Gap/GapStyle.css.js";
import * as FlexWrapStyleCssJs from "./FlexWrap/FlexWrapStyle.css.js";
import * as AlignItemsStyleCssJs from "./AlignItems/AlignItemsStyle.css.js";
import * as AlignContentStyleCssJs from "./AlignContent/AlignContentStyle.css.js";
import * as FlexDirectionStyleCssJs from "./FlexDirection/FlexDirectionStyle.css.js";
import * as JustifyContentStyleCssJs from "./JustifyContent/JustifyContentStyle.css.js";

var alignContent = AlignContentStyleCssJs.AlignContentStyle;

var alignItems = AlignItemsStyleCssJs.AlignItemsStyle;

var flexDirection = FlexDirectionStyleCssJs.FlexDirectionStyle;

var flexWrap = FlexWrapStyleCssJs.FlexWrapStyle;

var gap = GapStyleCssJs.GapStyle;

var justifyContent = JustifyContentStyleCssJs.JustifyContentStyle;

function resolve(i) {
  var match = i.alignContent;
  var match$1 = i.alignItems;
  var match$2 = i.flexDirection;
  var match$3 = i.flexWrap;
  var match$4 = i.gap;
  var match$5 = i.justifyContent;
  return [
            match === "spaceAround" ? alignContent.style.spaceAround : (
                match === "lastBaseline" ? alignContent.style.lastBaseline : (
                    match === "stretch" ? alignContent.style.stretch : (
                        match === "end" ? alignContent.style.end : (
                            match === "start" ? alignContent.style.start : (
                                match === "center" ? alignContent.style.center : (
                                    match === "firstBaseline" ? alignContent.style.firstBaseline : (
                                        match === "baseline" ? alignContent.style.baseline : (
                                            match === "spaceBetween" ? alignContent.style.spaceBetween : (
                                                match === "unset" ? alignContent.style.unset : (
                                                    match === "flexStart" ? alignContent.style.flexStart : (
                                                        match === "unsafeCenter" ? alignContent.style.unsafeCenter : (
                                                            match === "normal" ? alignContent.style.normal : (
                                                                match === "flexEnd" ? alignContent.style.flexEnd : (
                                                                    match === "safeCenter" ? alignContent.style.safeCenter : alignContent.style.spaceEvenly
                                                                  )
                                                              )
                                                          )
                                                      )
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
            match$1 === "stretch" ? alignItems.style.stretch : (
                match$1 === "end" ? alignItems.style.end : (
                    match$1 === "start" ? alignItems.style.start : (
                        match$1 === "center" ? alignItems.style.center : (
                            match$1 === "firstBaseline" ? alignItems.style.firstBaseline : (
                                match$1 === "baseline" ? alignItems.style.baseline : (
                                    match$1 === "unset" ? alignItems.style.unset : (
                                        match$1 === "flexStart" ? alignItems.style.flexStart : (
                                            match$1 === "unsafeCenter" ? alignItems.style.unsafeCenter : (
                                                match$1 === "normal" ? alignItems.style.normal : (
                                                    match$1 === "flexEnd" ? alignItems.style.flexEnd : (
                                                        match$1 === "safeCenter" ? alignItems.style.safeCenter : alignItems.style.lastBaseline
                                                      )
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
            match$2 === "row" ? flexDirection.style.row : (
                match$2 === "columnReverse" ? flexDirection.style.columnReverse : (
                    match$2 === "rowReverse" ? flexDirection.style.rowReverse : flexDirection.style.column
                  )
              ),
            match$3 === "wrapReverse" ? flexWrap.style.wrapReverse : (
                match$3 === "nowrap" ? flexWrap.style.nowrap : flexWrap.style.wrap
              ),
            match$4 === "none" ? gap.style.none : (
                match$4 === "xxlarge" ? gap.style.xxlarge : (
                    match$4 === "xlarge" ? gap.style.xlarge : (
                        match$4 === "large" ? gap.style.large : (
                            match$4 === "xxsmall" ? gap.style.xxsmall : (
                                match$4 === "xsmall" ? gap.style.xsmall : (
                                    match$4 === "medium" ? gap.style.medium : (
                                        match$4 === "small" ? gap.style.small : (
                                            match$4 === "xxxlarge" ? gap.style.xxxlarge : gap.style.xxxsmall
                                          )
                                      )
                                  )
                              )
                          )
                      )
                  )
              ),
            match$5 === "left" ? justifyContent.style.left : (
                match$5 === "spaceAround" ? justifyContent.style.spaceAround : (
                    match$5 === "right" ? justifyContent.style.right : (
                        match$5 === "stretch" ? justifyContent.style.stretch : (
                            match$5 === "end" ? justifyContent.style.end : (
                                match$5 === "start" ? justifyContent.style.start : (
                                    match$5 === "center" ? justifyContent.style.center : (
                                        match$5 === "spaceBetween" ? justifyContent.style.spaceBetween : (
                                            match$5 === "flexStart" ? justifyContent.style.flexStart : (
                                                match$5 === "unsafeCenter" ? justifyContent.style.unsafeCenter : (
                                                    match$5 === "normal" ? justifyContent.style.normal : (
                                                        match$5 === "flexEnd" ? justifyContent.style.flexEnd : (
                                                            match$5 === "safeCenter" ? justifyContent.style.safeCenter : justifyContent.style.spaceEvenly
                                                          )
                                                      )
                                                  )
                                              )
                                          )
                                      )
                                  )
                              )
                          )
                      )
                  )
              )
          ].join(" ");
}

var FlexLayer = {
  resolve: resolve
};

export {
  alignContent ,
  alignItems ,
  flexDirection ,
  flexWrap ,
  gap ,
  justifyContent ,
  FlexLayer ,
  
}
/* alignContent Not a pure module */
