import { FC } from 'react'
import cn from 'classnames'
import FormRC from 'rc-field-form'
import Item from './Item'
import { Props } from './types'

interface I<T = unknown> extends FC<T> {
  Field: typeof Item
}

const Form: I<Props> = FormRC

Form.Field = Item

export default Form
