open LitonProto

external asPropsType: 'a => {"props": {"className": string}} = "%identity"

let {displayName} = module(ButtonMeta)

@react.component
let make = (
  ~className: option<string>=?,
  ~style: option<Retype.style>=?,
  ~justifySelf: option<JustifySelf.t>=?,
  ~inlineSize: option<InlineSize.t>=?,
  ~color: option<LitonColor.t>=?,
  ~size: option<LitonSize.t>=?,
  ~variant: option<LitonVariant.t>=?,
  ~textTransform: option<TextTransform.t>=?,
  ~tabIndex: option<int>=?,
  ~onBlur: option<Retype.focusEvent => unit>=?,
  ~onClick: option<Retype.mouseEvent => unit>=?,
  ~onFocus: option<Retype.focusEvent => unit>=?,
  ~onMouseDown: option<Retype.mouseEvent => unit>=?,
  ~onMouseLeave: option<Retype.mouseEvent => unit>=?,
  ~onMouseUp: option<Retype.mouseEvent => unit>=?,
  ~onTouchEnd: option<Retype.touchEvent => unit>=?,
  ~onTouchMove: option<Retype.touchEvent => unit>=?,
  ~onTouchStart: option<Retype.touchEvent => unit>=?,
  ~autofocus: option<bool>=?,
  ~disabled: option<bool>=?,
  ~\"type": option<ButtonHTML.buttonType>=?,
  ~children: React.element,
  ~loading: option<bool>,
  ~icon: option<React.element>,
  ~iconPosition: option<LitonProto.IconPosition.t>=?,
) => {
  let justifySelf = switch justifySelf {
  | Some(s) => s
  | None => styleProps.justifySelf
  }

  let inlineSize = switch inlineSize {
  | Some(s) => s
  | None => styleProps.inlineSize
  }

  let color = switch color {
  | Some(s) => s
  | None => styleProps.color
  }

  let size = switch size {
  | Some(s) => s
  | None => styleProps.size
  }

  let variant = switch variant {
  | Some(s) => s
  | None => styleProps.variant
  }

  let textTransform = switch textTransform {
  | Some(s) => s
  | None => styleProps.textTransform
  }

  let type_ = switch \"type" {
  | Some(s) => (s :> string)
  | None => (ButtonHTML.buttonTypeDefault :> string)
  }

  <button
    className={Cn.make([
      LitonProto.cn.root,
      switch className {
      | Some(c) => c
      | None => ""
      },
      switch iconPosition {
      | Some(p) =>
        switch p {
        | #start => FlexDirectionResolver.make(. #row)
        | #end => FlexDirectionResolver.make(. #rowReverse)
        }
      | None => FlexDirectionResolver.make(. #row)
      },
      JustifySelfLayer.resolve(~justifySelf),
      InlineSizeLayer.resolve(~inlineSize),
      LitonLayer.resolve(~color, ~size, ~variant),
      TextTransformLayer.resolve(~textTransform),
    ])}
    ?style
    ?tabIndex
    ?onBlur
    ?onClick
    ?onFocus
    ?onMouseDown
    ?onMouseLeave
    ?onMouseUp
    ?onTouchEnd
    ?onTouchMove
    ?onTouchStart
    autoFocus=?autofocus
    ?disabled
    type_>
    {switch icon {
    | Some(i) =>
      switch loading {
      | Some(b) =>
        switch b {
        | true => <LitonProto.Loader className=LitonProto.cn.appearIn />
        | false =>
          i
          ->React.Children.only
          ->React.cloneElement({
            "aria-hidden": true,
            "className": Cn.make([
              switch Js.Types.classify((i->asPropsType)["props"]["className"]) {
              | JSString(s) => s
              | _ => ""
              },
              LitonProto.cn.icon,
              LitonProto.cn.appearIn,
            ]),
          })
        }
      | None =>
        i
        ->React.Children.only
        ->React.cloneElement({
          "aria-hidden": true,
          "className": Cn.make([
            switch Js.Types.classify((i->asPropsType)["props"]["className"]) {
            | JSString(s) => s
            | _ => ""
            },
            LitonProto.cn.icon,
            LitonProto.cn.appearIn,
          ]),
        })
      }
    | None =>
      switch loading {
      | Some(b) =>
        switch b {
        | true =>
          <LitonProto.Loader className={LitonProto.cn.centered ++ " " ++ LitonProto.cn.appearIn} />
        | false => React.null
        }
      | None => React.null
      }
    }}
    <span
      className={LitonProto.cn.content ++
      " " ++
      switch icon {
      | Some(_) => LitonProto.cn.appearIn
      | None =>
        switch loading {
        | Some(b) =>
          switch b {
          | true => LitonProto.cn.appearOut
          | false => LitonProto.cn.appearIn
          }
        | None => LitonProto.cn.appearIn
        }
      }}>
      {children}
    </span>
  </button>
}
