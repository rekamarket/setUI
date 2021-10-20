import { cloneElement, FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import ProtoSet from '../../../../ProtoSet'
import { ClassName } from './styles.css'
import { ColorContext } from 'layers/Text'
import { ShadowLayer } from './layers'

const shadow = new ShadowLayer()

export const displayName = 'Cover'

const Section: FC<Props> = ({ color, className, ...props }) =>
  [<ColorContext.Provider value={color} />].reduce(
    (prev, provider) => cloneElement(provider, {}, prev),
    ProtoSet({
      ...object.mergePropsWithWarning(defaultProps, props, displayName),

      // props override
      as: 'section',
      className: cn(ClassName, className, shadow.set({ overlay: color }).box),
      color: color,
    })
  )

Section.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Section
