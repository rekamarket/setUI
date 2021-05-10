import { FC, createElement } from 'react'
import cn from 'classnames'
import { Props } from './types'
import { Root, Prefix, Suffix, Input } from './styles'
import { InputTheme, InputSize, InputVariant } from '../../theme'

const InputComponent: FC<Props> = ({
  size,
  theme,
  variant,
  disabled,
  prefix,
  suffix,
  children,
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
      <input className={cn([Input])} disabled={disabled} {...rest} />
      {suffix && <div className={Suffix}>{suffix}</div>}
    </div>
  )
}

export default InputComponent
