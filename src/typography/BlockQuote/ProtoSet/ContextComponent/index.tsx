import React, { VFC, cloneElement } from 'react'
import Component from '../Component'
import { FontSizeContext } from 'layers'
import type { Props } from './types'

const ContextComponent: VFC<Props> = (props) =>
  [<FontSizeContext.Provider value={props.fontSize} />].reduce(
    (prev, provider) => cloneElement(provider, {}, prev),
    <Component {...props} />
  )

export type { Props } from './types'
export default ContextComponent
