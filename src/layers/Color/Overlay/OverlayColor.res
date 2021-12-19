open ColorReflection

module OverlayColor = {
  include ColorReflection

  @genType
  type i = { "color": ColorReflection.t }

  type value = string;

  let options = {
    "primary": "#2B88D8",
    "secondary": "#0078D4",
    "black": "#FFFFFF",
    "white": "#000000",
  };

  type options = {
    "primary": value,
    "secondary": value,
    "black": value,
    "white": value,
  };

  type output = { "--overlay-color": value }
  type cssResolve = (value) => output
}
