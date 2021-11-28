import type { DisplayType } from 'CSS'
import type { Props as TextLayerProps } from 'reason/layers/Text'
import type { Props as BlockLayerProps } from 'reason/layers/Block'
import { CharsPerLineType, WeightType } from '../css'

export const LevelKeys = [1, 2, 3, 4, 5, 6]
export type LevelType = 1 | 2 | 3 | 4 | 5 | 6

type Styles = BlockLayerProps &
  TextLayerProps &
  CharsPerLineType &
  WeightType

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
