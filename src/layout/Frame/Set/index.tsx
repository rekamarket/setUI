import { cloneElement, FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import ProtoSet from '../ProtoSet'
import { ClassName } from './styles.css'
import { article } from 'axioms'
import { FontSizeContext } from 'layers/Text'

export const displayName = 'Frame'

const Set: FC<Props> = ({ className, fontSize, ...props }) =>
  [<FontSizeContext.Provider value={fontSize} />].reduce(
    (prev, provider) => cloneElement(provider, {}, prev),
    ProtoSet({
      as: 'div',
      ...object.mergePropsWithWarning<any>(defaultProps, props),

      // props override
      fontSize: fontSize || defaultProps.fontSize,
      className: cn(ClassName, className, article),
    })
  )

Set.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Set
