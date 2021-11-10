import type { Type } from './styles.css'

type SpacingAll = {
  Spacing: Type
}

type SpacingBeforeAfter = {
  SpacingBefore: Type
  SpacingAfter: Type
}

type SpacingAllBefore = {
  Spacing: Type
  SpacingBefore: Type
}

type SpacingAllAfter = {
  Spacing: Type
  SpacingAfter: Type
}

export type SpacingProps =
  | SpacingAll
  | SpacingBeforeAfter
  | SpacingAllBefore
  | SpacingAllAfter
