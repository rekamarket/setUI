import type { Type } from './styles'

type PaddingAll = {
  padding: Type
}

type PaddingXYAxis = {
  paddingX: Type
  paddingY: Type
}

type PaddingXTopBottom = {
  paddingX: Type
  paddingTop: Type
  paddingBottom: Type
}

type PaddingYRightLeft = {
  paddingY: Type
  paddingRight: Type
  paddingLeft: Type
}

type PaddingAllTop = {
  padding: Type
  paddingTop: Type
}

type PaddingAllRight = {
  padding: Type
  paddingRight: Type
}

type PaddingAllBottom = {
  padding: Type
  paddingBottom: Type
}

type PaddingAllLeft = {
  padding: Type
  paddingLeft: Type
}

type PaddingTopRightBottomLeft = {
  paddingTop: Type
  paddingRight: Type
  paddingBottom: Type
  paddingLeft: Type
}

export type PaddingType =
  | PaddingAll
  | PaddingXYAxis
  | PaddingXTopBottom
  | PaddingYRightLeft
  | PaddingAllTop
  | PaddingAllRight
  | PaddingAllBottom
  | PaddingAllLeft
  | PaddingTopRightBottomLeft
