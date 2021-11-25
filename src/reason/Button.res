open ColorIndex

module Button = {
  @genType
  @react.component
  let make = (~count: int, ~color: ColorIndex.t) => {
    let times = switch count {
    | 1 => "once"
    | 2 => "twice"
    | n => Belt.Int.toString(n) ++ " times"
    }
    let msg = "Click me " ++ times

    <button className={color :> string}> {msg->React.string} </button>
  }
}
