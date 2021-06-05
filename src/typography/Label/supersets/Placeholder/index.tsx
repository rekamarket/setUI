import { FC } from 'react'
import PlaceholderComponent, {
  Props as PlaceholderProps,
} from 'typography/Placeholder/Component'
import Component, { Props } from 'typography/Text/Component'

const Placeholder: FC<
  Omit<Props, 'children' | 'color'> & Pick<PlaceholderProps, 'length'>
> = ({ length, ...props }) =>
  Component({
    ...props,
    children: <PlaceholderComponent length={length} />,
    color: 'grey130',
  })

export default Placeholder
