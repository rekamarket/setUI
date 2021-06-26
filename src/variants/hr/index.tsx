import { FC } from 'react'
import { ProtoSet } from 'typography/ThematicBreak'
import type { ProtoSetProps } from 'typography/ThematicBreak'

const defaultStyle = {
  color: 'black',
  weight: 'bold',
  offset: 'none',
}

const CustomHR: FC<Omit<ProtoSetProps, 'defaultStyle'>> = (props) =>
  ProtoSet({
    ...props,
    defaultStyle,
  })

export default CustomHR
