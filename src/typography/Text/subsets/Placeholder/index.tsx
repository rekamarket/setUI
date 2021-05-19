import { FC } from 'react'
import { Placeholder as TextContent } from 'typography'
import Component, { Props } from '../../Text'

// ▁▂▃▄▅▆▇█

const Placeholder: FC<Omit<Props, 'children' | 'color'>> = (props) =>
  Component({
    children: <TextContent />,
    color: 'grey130',
    ...props,
  })

interface I<T = unknown> extends FC<T> {
  Placeholder: typeof Placeholder
}

const Text: I<Props> = (props) => Component(props)

Text.Placeholder = Placeholder

export default Text
