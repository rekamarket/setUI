import { VFC } from 'react'
import {
  useFontSize,
} from 'layers/Text'
import Component, { Props } from '../Component'

const ResolveContext: VFC<Props> = (props) => {
  const fontSize = useFontSize()

  return Component({
    ...props,
    fontSize: props?.fontSize || fontSize,
  })
}

export type { Props } from './types'
export default ResolveContext
