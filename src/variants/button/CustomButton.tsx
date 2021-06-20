import { FC } from 'react'
import Button, { Props } from 'button'

const CustomButton: FC<Props> = (props) =>
  Button({
    ...props,
    size: 'small',
  })

export default CustomButton
