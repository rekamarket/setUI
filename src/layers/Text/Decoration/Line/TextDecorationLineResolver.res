type t = TextDecorationLine.t
type variant = TextDecorationLine.variant

@module("./TextDecorationLineStyle.css.js") external style: variant = "make"

let make = (. key: t) => switch (key) {
| #none                           => style.none
| #underline                      => style.underline
| #overline                       => style.overline
| #lineThrough                    => style.lineThrough
// | #blink                          => style.blink
// | #overline_lineThrough           => style.overline_lineThrough
// | #overline_underline             => style.overline_underline
// | #lineThrough_underline          => style.lineThrough_underline
// | #overline_lineThrough_underline => style.overline_lineThrough_underline
// | #inherit                        => style.inherit
// | #initial                        => style.initial
// | #unset                          => style.unset
}
