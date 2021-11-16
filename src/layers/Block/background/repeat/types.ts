import type { Type } from './styles.css'

// interface RepeatX {
//   readonly repeatX?: boolean
// }
// interface RepeatY {
//   readonly repeatY?: boolean
// }
// interface Repeat {
//   readonly repeat?: boolean
// }
// interface Space {
//   readonly space?: boolean
// }
// interface Round {
//   readonly round?: boolean
// }
// interface NoRepeat {
//   readonly noRepeat?: boolean
// }

export type BackgroundRepeatProps =
  // | RepeatX
  // | RepeatY
  // | Repeat
  // | Space
  // | Round
  // | NoRepeat
  | {
      backgroundRepeat?: Type
    }
