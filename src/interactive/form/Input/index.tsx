import { FC, createElement } from 'react'
import cn from 'classnames'
import { InputTheme, InputSize, InputVariant } from 'CSS'
import { Props } from './types'
import { Root, Prefix, Suffix, Input } from './styles.css'

const InputComponent: FC<Props> = ({
  style,
  type = 'text',
  multiple = false,
  size,
  theme,
  variant,
  disabled,
  prefix,
  suffix,
  value,
  ...rest
}) => {
  return (
    <div
      className={cn([
        Root,
        InputTheme[theme] || InputTheme.default,
        InputSize[size] || InputSize.default,
        InputVariant[variant] || InputVariant.default,
      ])}
    >
      {prefix && <div className={Prefix}>{prefix}</div>}
      <input
        className={cn([Input])}
        multiple={multiple}
        disabled={disabled}
        type={type}
        style={style}
        value={value || ''}
        {...rest}
      />
      {suffix && <div className={Suffix}>{suffix}</div>}
    </div>
  )
}

export default InputComponent
