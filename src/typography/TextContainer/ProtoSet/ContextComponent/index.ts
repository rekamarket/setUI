import { VFC, createElement, cloneElement } from 'react'
import Component from '../Component'
import type { Props } from '../Component'
import { ColorContext, FontSizeContext } from 'layers'

const ContextComponent: VFC<Props> = (props) =>
  [
    createElement(ColorContext.Provider, {
      value: props.color,
    }),

    createElement(FontSizeContext.Provider, {
      value: props.fontSize,
    }),
  ].reduce(
    (prev, provider) => cloneElement(provider, {}, prev),
    Component(props)
  )

export default ContextComponent
