import { VFC } from 'react'
import PlaceholderComponent, {
  Props as PlaceholderProps,
} from '../../../Placeholder/Component'
import Component, { Props } from '../../../Stack/Component'

const Placeholder: VFC<
  Omit<Props, 'children'> & Pick<PlaceholderProps, 'size' | 'length'>
> = ({ size, length, ...props }) =>
  Component({
    children: (
      <PlaceholderComponent color="grey160" size={size} length={length} />
    ),
    ...props,
  })

export default Placeholder
