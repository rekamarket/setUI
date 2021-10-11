import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import Component from 'typography/Paragraph'
import { ClassName } from './styles.css'

const displayName = 'Article.Paragraph'

const Paragraph: FC<Props> = ({ className, ...props }) =>
  Component({
    ...object.mergePropsWithWarning<any>(
      defaultProps,
      props,
      displayName
    ),

    // props override
    className: cn(ClassName, className),
  })

Paragraph.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Paragraph
