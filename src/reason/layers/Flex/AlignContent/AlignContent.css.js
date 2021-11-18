// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Css from "@vanilla-extract/css";

var style = Css.styleVariants({
      center: "center",
      start: "start",
      end: "end",
      flexStart: "flex-start",
      flexEnd: "flex-end",
      normal: "normal",
      baseline: "baseline",
      firstBaseline: "first baseline",
      lastBaseline: "last baseline",
      spaceBetween: "space-between",
      spaceAround: "space-around",
      spaceEvenly: "space-evenly",
      stretch: "stretch",
      safeCenter: "safe center",
      unsafeCenter: "unsafe center",
      unset: "unset",
      normal: "normal"
    }, (function (value) {
        return {
                alignContent: value
              };
      }));

function resolve(t) {
  if (t === "spaceAround") {
    return style.spaceAround;
  } else if (t === "lastBaseline") {
    return style.lastBaseline;
  } else if (t === "stretch") {
    return style.stretch;
  } else if (t === "end") {
    return style.end;
  } else if (t === "start") {
    return style.start;
  } else if (t === "center") {
    return style.center;
  } else if (t === "firstBaseline") {
    return style.firstBaseline;
  } else if (t === "baseline") {
    return style.baseline;
  } else if (t === "spaceBetween") {
    return style.spaceBetween;
  } else if (t === "unset") {
    return style.unset;
  } else if (t === "flexStart") {
    return style.flexStart;
  } else if (t === "unsafeCenter") {
    return style.unsafeCenter;
  } else if (t === "normal") {
    return style.normal;
  } else if (t === "flexEnd") {
    return style.flexEnd;
  } else if (t === "safeCenter") {
    return style.safeCenter;
  } else {
    return style.spaceEvenly;
  }
}

var AlignContent = {
  initial: "normal",
  style: style,
  resolve: resolve
};

export {
  AlignContent ,
  
}
/* style Not a pure module */
