import { VFC, createElement } from 'react'
import cn from 'classnames'
import { Props } from './types'
import {
  ClassName,
  RootStart,
  RootEnd,
  RootHasIcon,
  RootLoading,
  ContentStart,
  Content,
  ContentEnd,
  Loader,
} from './styles.css'
import Component from '../HostComponent'
import { LoaderIcon } from '../../../injections'

const slotMiddle = createElement('span', {
  className: Content,
})

const Button: VFC<Props> = ({
  className,
  iconNode,
  iconPosition = 'start',
  loading = false,
  loadingNode = LoaderIcon,
  ...props
}) => {
  const node = loading ? loadingNode : iconNode

  if (node) {
    switch (iconPosition) {
      case 'start': {
        return Component({
          ...props,
          className: cn(
            className,
            ClassName,
            RootStart,
            iconNode && RootHasIcon,
            loading && RootLoading
          ),

          slotStart: createElement(
            'span',
            {
              className: cn(ContentStart, loading && Loader),
            },
            node
          ),

          slotMiddle,
        })
      }

      case 'end': {
        return Component({
          ...props,
          className: cn(
            className,
            ClassName,
            RootEnd,
            iconNode && RootHasIcon,
            loading && RootLoading
          ),

          slotMiddle,

          slotEnd: createElement(
            'span',
            {
              className: cn(ContentEnd, loading && Loader),
            },
            node
          ),
        })
      }

      default: {
        throw new Error('unknown `iconPosition` property for <Button />')
      }
    }
  }

  return Component({
    ...props,
    className: cn(className, ClassName),
    slotMiddle,
  })
}

export type { Props } from './types'
export default Button
