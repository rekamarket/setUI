import type { DisplayType } from 'CSS'
import type { BlockLayerProps, TextLayerProps } from 'layers'
import { WeightType } from '../css'

export type LevelType = 1 | 2 | 3 | 4 | 5 | 6

type BasicProps = {
  level: LevelType
  className?: string
  title?: string
}

type Styles = BlockLayerProps & TextLayerProps & WeightType

type StyleProps = {
  display?: DisplayType
} & Styles

export type Props = BasicProps & StyleProps
export type PropsRequired = BasicProps & Required<StyleProps>
