import type { Props as ProtoProps, StyleProps } from '../ProtoComponent'

export type DefaultStyleProps = Partial<StyleProps>

export type Props = ProtoProps & {
  defaultStyle: DefaultStyleProps
}
