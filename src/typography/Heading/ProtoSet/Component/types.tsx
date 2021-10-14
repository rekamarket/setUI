import type { DisplayType } from 'CSS'
import type { TextLayerProps } from 'layers'
import type { MarginProps, PaddingProps } from 'layers/Block'
import { WeightType } from '../css'

export const LevelKeys = [1, 2, 3, 4, 5, 6]
export type LevelType = 1 | 2 | 3 | 4 | 5 | 6

type Styles = MarginProps & PaddingProps & TextLayerProps & WeightType

type StyleProps = {
  display?: DisplayType
} & Styles

export type PropsRequired = {
  level: LevelType
}

export type Props = PropsRequired &
  StyleProps & {
    className?: string
    title?: string
  }
