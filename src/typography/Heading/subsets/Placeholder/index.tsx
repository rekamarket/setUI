import { FC } from 'react'
import { Placeholder as TextContent } from 'typography'
import HeadingOrigin, { Props } from '../../Heading'

// ▁▂▃▄▅▆▇█

const Placeholder: FC<Omit<Props, 'children' | 'color'>> = (props) =>
  HeadingOrigin({
    children: <TextContent />,
    color: 'grey130',
    ...props,
  })

interface I<T = unknown> extends FC<T> {
  Placeholder: typeof Placeholder
}

const Heading: I<Props> = (props) => HeadingOrigin(props)

Heading.Placeholder = Placeholder

export default Heading
