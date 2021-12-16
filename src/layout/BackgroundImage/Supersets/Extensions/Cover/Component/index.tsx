import React, { cloneElement, VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import ProtoSet from '../../../../ProtoSet'
import { ClassName } from './styles.css'
import { ColorContext, OverlayColorLayer } from 'layers'

export const displayName = 'Cover'

const Section: VFC<Props> = ({ color, className, ...props }) =>
  [<ColorContext.Provider value={color} />].reduce(
    (prev, provider) => cloneElement(provider, {}, prev),
    ProtoSet({
      ...object.mergePropsWithWarning(defaultProps, props, displayName),

      // props override
      as: 'section',

      className: cn(
        ClassName,
        className,

        OverlayColorLayer({
          color,
        })
      ),
      color,
    })
  )

Section.displayName = displayName

export type { Props } from './types'
export default Section
