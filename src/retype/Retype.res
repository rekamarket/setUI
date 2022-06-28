@genType.import(("react", "CSSProperties"))
type style = ReactDOM.Style.t

@genType.import(("react", "FocusEvent"))
type focusEvent = ReactEvent.Focus.t

@genType.import(("react", "KeyboardEvent"))
type keyboardEvent = ReactEvent.Keyboard.t

@genType.import(("react", "MouseEvent"))
type mouseEvent = ReactEvent.Mouse.t

@genType.import(("react", "TouchEvent"))
type touchEvent = ReactEvent.Touch.t

@genType.import(("react", "RefObject"))
type ref<'a> = {.."a": string} as 'a
