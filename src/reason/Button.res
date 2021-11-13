open Color

module Button = {
  @genType
  @react.component
  let make = (~count: int, ~color: Color.t) => {
    let times = switch count {
    | 1 => "once"
    | 2 => "twice"
    | n => Belt.Int.toString(n) ++ " times"
    }
    let msg = "Click me " ++ times

    <button className={Color.resolve(color)}> {msg->React.string} </button>
  }
}
