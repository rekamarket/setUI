import { FC } from 'react'
import Component, { Props } from '../../Component'

const KeyboardInput: FC<Omit<Props, 'as' | 'display'>> = (props) =>
  Component({
    // props default values
    borderColor: 'grey160',
    borderWidth: 'thin',
    borderRadius: 'small',
    paddingY: 'xsmall',
    paddingX: 'xxsmall',
    weight: 'bold',
    background: 'grey10',

    // props passed
    ...props,

    // props override
    as: 'kbd',
    display: 'inlineBlock',
  })

export default KeyboardInput
