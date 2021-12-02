open Color

module OverlayColor = {
  @genType
  type t = Color.t
  let initial = Color.initial;
  type options = Color.options;
  type variant = Color.variant;

  let options = {
    "primary": "#2B88D8",
    "secondary": "#0078D4",
    "black": "#FFFFFF",
    "white": "#000000",
  };

  type output = { "--overlay-color": Color.value }
  type cssResolve = (Color.value) => output
}
