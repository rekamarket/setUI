import { VFC } from 'react'
import PlaceholderComponent, {
  Props as PlaceholderProps,
} from '../../../Placeholder/Component'
import Component, { Props } from '../../../Paragraph/Component'

const Placeholder: VFC<
  Omit<Props, 'children'> & Pick<PlaceholderProps, 'length'>
> = ({ size, length, ...props }) =>
  Component({
    children: <PlaceholderComponent length={length} />,
    ...props,
  })

export default Placeholder
