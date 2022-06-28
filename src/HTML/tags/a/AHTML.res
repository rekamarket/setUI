@genType
type tag = [#a]

let tag: tag = #a

module ReferrerPolicy = {
  @genType
  type t =
  | NoReferrer
  | NoReferrerWhenDowngrade
  | Origin
  | OriginWhenCrossOrigin
  | SameOrigin
  | StrictOrigin
  | StrictOriginWhenCrossOrigin
  | UnsafeUrl

  let default: t = NoReferrer

  let toString = (t) => switch t {
  | NoReferrer                  => "no-referrer"
  | NoReferrerWhenDowngrade     => "no-referrer-when-downgrade"
  | Origin                      => "origin"
  | OriginWhenCrossOrigin       => "origin-when-cross-origin"
  | SameOrigin                  => "same-origin"
  | StrictOrigin                => "strict-origin"
  | StrictOriginWhenCrossOrigin => "strict-origin-when-cross-origin"
  | UnsafeUrl                   => "unsafe-url"
  }
}

module Target = {
  @genType
  type t =
  | Self
  | Blank
  | Parent
  | Top

  let default: t = Self

  let toString = (t) => switch t {
  | Self   => "_self"
  | Blank  => "_blank"
  | Parent => "_parent"
  | Top    => "_top"
  }
}
