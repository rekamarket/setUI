// Generated by ReScript, PLEASE EDIT WITH CARE

import * as FontSize from "./FontSize.js";
import * as FontFamily from "../Family/FontFamily.js";
import * as Core from "@capsizecss/core";
import * as Css from "@vanilla-extract/css";

var make = Css.styleVariants(FontSize.options, (function (value) {
        var capSize = Core.createStyleObject({
              capHeight: value,
              lineGap: value / 4 | 0,
              fontMetrics: {
                familyName: FontFamily.name.display,
                capHeight: 700,
                ascent: 968,
                descent: -251,
                lineGap: 0,
                unitsPerEm: 1000,
                xHeight: 525
              }
            });
        return {
                transform: "translateY(.1rem)",
                fontSize: capSize.fontSize,
                lineHeight: capSize.lineHeight,
                ":before": {
                  content: "\"\"",
                  marginBottom: capSize["::before"].marginBottom,
                  display: "table"
                },
                ":after": {
                  content: "\"\"",
                  marginTop: capSize["::after"].marginTop,
                  display: "table"
                }
              };
      }));

var options = FontSize.options;

export {
  options ,
  make ,
  
}
/* make Not a pure module */