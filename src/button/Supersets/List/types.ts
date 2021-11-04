import type { ButtonLayerProps } from 'layers'

import type { Props as ListProps } from 'layout/List'

export type Props = {
  children: any
} & ButtonLayerProps &
  ListProps
