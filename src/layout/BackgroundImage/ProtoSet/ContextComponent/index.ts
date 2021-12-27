import { VFC, createElement, cloneElement } from 'react'
import Component from '../Component'
import { ColorContext } from 'layers'
import type { Props } from './types'

const ContextComponent: VFC<Props> = (props) =>
  [
    createElement(ColorContext.Provider, {
      value: props.color,
    }),
  ].reduce(
    (prev, provider) => cloneElement(provider, {}, prev),
    Component(props)
  )

export type { Props } from './types'
export default ContextComponent
