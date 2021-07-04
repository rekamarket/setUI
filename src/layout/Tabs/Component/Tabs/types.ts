import { TabsProps } from 'rc-tabs'
import type { BlockLayerProps } from 'layers'
import { ThemeType } from '../css'

export type Props = TabsProps & {
  theme?: ThemeType
} & BlockLayerProps
