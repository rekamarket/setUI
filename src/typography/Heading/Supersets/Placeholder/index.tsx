import { FC } from 'react'
import PlaceholderComponent, {
  Props as PlaceholderProps,
} from '../../../Placeholder/Component'
import ProtoSet, { Props } from '../../ProtoSet'

const Placeholder: FC<
  Omit<Props, 'children' | 'color'> & Pick<PlaceholderProps, 'length'>
> = ({ length, ...props }) =>
  ProtoSet({
    children: <PlaceholderComponent length={length} />,
    color: 'grey130',
    ...props,
  })

export default Placeholder
