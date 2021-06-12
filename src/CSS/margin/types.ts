import type { Type } from './styles'

type MarginAll = {
  margin: Type
}

type MarginXYAxis = {
  marginX: Type
  marginY: Type
}

type MarginXTopBottom = {
  marginX: Type
  marginTop: Type
  marginBottom: Type
}

type MarginYRightLeft = {
  marginY: Type
  marginRight: Type
  marginLeft: Type
}

type MarginAllTop = {
  margin: Type
  marginTop: Type
}

type MarginAllRight = {
  margin: Type
  marginRight: Type
}

type MarginAllBottom = {
  margin: Type
  marginBottom: Type
}

type MarginAllLeft = {
  margin: Type
  marginLeft: Type
}

type MarginTopRightBottomLeft = {
  marginTop: Type
  marginRight: Type
  marginBottom: Type
  marginLeft: Type
}

export type MarginType =
  | MarginAll
  | MarginXYAxis
  | MarginXTopBottom
  | MarginYRightLeft
  | MarginAllTop
  | MarginAllRight
  | MarginAllBottom
  | MarginAllLeft
  | MarginTopRightBottomLeft
