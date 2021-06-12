import { FC } from 'react'
import Input, { Props } from 'typography/Code/Subsets/Input'

const CustomKey: FC<Props> = (props) =>
  Input({
    ...props,
    background: 'warningPale',
    borderColor: 'primary',
    borderRadius: 'medium',
    borderWidth: 'light',
    size: 'xxxlarge',
    style: 'normal',
    weight: 'bold',
  })

export default CustomKey
