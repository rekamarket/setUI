@module("./LitonProtoStyle.css.js") external root: string = "root"
@module("./LitonProtoStyle.css.js") external content: string = "content"
@module("./LitonProtoStyle.css.js") external icon: string = "icon"
@module("./LitonProtoStyle.css.js") external loader: string = "loader"
@module("./LitonProtoStyle.css.js") external centered: string = "centered"
@module("./LitonProtoStyle.css.js") external appearIn: string = "appearIn"
@module("./LitonProtoStyle.css.js") external appearOut: string = "appearOut"

type cn = {
  root: string,
  content: string,
  icon: string,
  loader: string,
  centered: string,
  appearIn: string,
  appearOut: string,
}

let cn = {
  root: root,
  content: content,
  icon: icon,
  loader: loader,
  centered: centered,
  appearIn: appearIn,
  appearOut: appearOut,
}

type styleProps = {
  justifySelf: JustifySelf.t,
  inlineSize: InlineSize.t,
  color: LitonColor.t,
  size: LitonSize.t,
  variant: LitonVariant.t,
  textTransform: TextTransform.t,
}

let styleProps = {
  justifySelf: #auto,
  inlineSize: #fitContent,
  color: #blue,
  size: #m,
  variant: #solid,
  textTransform: #uppercase,
}

module IconPosition = {
  @genType type t = [#start | #end]
}

module Loader = {
  @react.component
  let make = (~className: option<string>=?) => {
    <svg
      className={loader ++
      " " ++
      switch className {
      | Some(c) => c
      | None => ""
      }}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M205 48c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18h6c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24a3 3 0 0 1 0 6z"
        transform="translate(-181 -42)"
      />
    </svg>
  }
}
