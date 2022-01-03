open Js.Array2;

open LineClamp;
type lineClamp = { style: LineClamp.variant }
@module("./LineClamp/LineClampStyle.css.js") external lineClamp: lineClamp = "LineClampStyle"

module LineClampLayer = {
  @genType
  type i = {
    "lineClamp": LineClamp.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["lineClamp"]) {
    | #none => lineClamp.style["none"]
    | #1    => lineClamp.style["1"]
    | #2    => lineClamp.style["2"]
    | #3    => lineClamp.style["3"]
    | #4    => lineClamp.style["4"]
    | #5    => lineClamp.style["5"]
    | #6    => lineClamp.style["6"]
    },
  ] -> joinWith(" ");
}
