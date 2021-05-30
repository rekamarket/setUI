import { FC } from 'react'
import PlaceholderComponent, {
  Props as PlaceholderProps,
} from 'typography/Placeholder/Component'
import Component, { Props } from 'typography/Heading/Component'

const Placeholder: FC<
  Omit<Props, 'children' | 'color'> & Pick<PlaceholderProps, 'length'>
> = ({ length, ...props }) =>
  Component({
    children: <PlaceholderComponent length={length} />,
    color: 'grey130',
    ...props,
  })

export default Placeholder
