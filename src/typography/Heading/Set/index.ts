import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useColor, useFontSize } from 'layers'
import { NonSemantic, Props as ProtoProps } from '../types'
import ProtoSet, { mimicryAs, AsType } from '../ProtoSet'
import { defaultProps } from './defaultProps'
import { ClassName } from './styles.css'

export const displayName = `Heading`

export interface Props extends NonSemantic, Pick<ProtoProps, 'level'> {
  as?: AsType
}

const Component: VFC<Props> = ({
  as,
  level,
  className,
  children,
  fontSize: fontSizeFromProps,
  color: colorFromProps,
  ...rest
}) => {
  if (typeof as === 'string' && as !== 'div') {
    console.warn(`
      You are using <${displayName} as="{${as}}"" level={${level}} />, which is the same as <H${level}.Mimic as="${as}" />, please consider using less generic component
    `)
  }

  const semantics =
    typeof as === 'string'
      ? mimicryAs<AsType>(level)(as)
      : {
          OVERRIDE_TAG_SEMANTICS: false,
          level,
        }

  const color = useColor()
  const fontSize = useFontSize()

  return ProtoSet({
    ...semantics,

    ...object.mergePropsWithWarning(
      defaultProps,
      {
        fontSize: fontSizeFromProps || fontSize,
        color: colorFromProps || color,
        ...rest,
      },
      displayName
    ),

    // override
    children,
    className: cn(ClassName, className),
  })
}

Component.displayName = displayName

export default Component
export { ClassName as heading } from './styles.css'
export { defaultProps as styles } from './defaultProps'
