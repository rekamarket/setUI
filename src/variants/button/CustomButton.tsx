import { FC } from 'react'
import { ProtoSet, ProtoSetProps } from 'button'

const defaultStyle = {
  size: 'small',
  theme: 'black',
}

const CustomButton: FC<Omit<ProtoSetProps, 'defaultStyle'>> = (props) =>
  ProtoSet({
    ...props,
    defaultStyle,
  })

export default CustomButton
