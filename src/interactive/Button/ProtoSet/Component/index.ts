import { VFC, createElement } from 'react'
import cn from 'classnames'
import { Props } from './types'
import {
  ClassName,
  ClassNameHasIcon,
  ContentStart,
  Content,
} from './styles.css'
import Component from '../HostComponent'
import { LoaderIcon } from '../../../injections'

const Button: VFC<Props> = (props) => {
  switch (true) {
    case props.loading: {
      const {
        className,
        loading = false,
        loadingNode = LoaderIcon,
        ...rest
      } = props

      return Component({
        ...rest,
        className: cn(ClassName, className, loading && ClassNameHasIcon),

        slotStart: createElement(
          'span',
          {
            className: ContentStart,
          },
          loadingNode
        ),

        slotMiddle: createElement('span', {
          className: Content,
        }),
      })
    }

    default: {
      return Component(props)
    }
  }
}

export type { Props } from './types'
export default Button
