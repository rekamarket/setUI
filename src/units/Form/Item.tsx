import { FC, cloneElement } from 'react'
import { Field } from 'rc-field-form'
import cn from 'classnames'
import { PropsField } from './types'
import { Label, Title, Error } from './styles.css'
import { InputFontSize } from '../../theme'

const Item: FC<PropsField> = ({
  name,
  label,
  labelIcon,
  noStyle,
  size,
  children,
  ...restProps
}) => {
  if (noStyle) {
    return (
      <Field name={name} {...restProps}>
        {(control, meta, form) => {
          const childNode =
            typeof children === 'function'
              ? children(control, meta, form)
              : cloneElement(children as React.ReactElement, {
                  ...control,
                  name,
                  size,
                })

          return childNode
        }}
      </Field>
    )
  }

  return (
    <Field name={name} {...restProps}>
      {(control, meta, form) => {
        const error: string = form.getFieldError(name)[0] || ''

        const childNode =
          typeof children === 'function'
            ? children(control, meta, form)
            : cloneElement(children as React.ReactElement, {
                ...control,
                name,
                size,
              })

        return (
          <label
            className={cn([
              Label,
              InputFontSize[size] || InputFontSize.default,
            ])}
          >
            {label && (
              <div className={Title}>
                {labelIcon}
                {label}
              </div>
            )}
            {childNode}
            {error && <div className={Error}>{error}</div>}
          </label>
        )
      }}
    </Field>
  )
}

export default Item
