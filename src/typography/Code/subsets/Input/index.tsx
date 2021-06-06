import { FC } from 'react'
import { defaultProps } from './defaultProps'
import Component, { Props as ParentProps } from '../../Component'

export type Props = Omit<ParentProps, 'as' | 'display'>

const KeyboardInput: FC<Props> = (props) =>
  Component({
    // props default values
    ...defaultProps,

    // props passed
    ...props,

    // props override
    as: 'kbd',
    display: 'inlineBlock',
  })

export default KeyboardInput
