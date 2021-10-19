import React, { VFC } from 'react'
import cn from 'classnames'
import Component from '../Component'
import { FontSizeContext } from 'layers/Text'
import type { Props } from './types'

const ContextComponent: VFC<Props> = ({
  fontSize,
  ...props
}) =>
  [
    <FontSizeContext.Provider value={fontSize} />,
  ].reduce(
    (prev, provider) => React.cloneElement(provider, {}, prev),
    <Component fontSize={fontSize} {...props} />
  )

export type { Props } from './types'
export default ContextComponent
