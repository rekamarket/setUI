import { FormProps } from 'rc-field-form'
import { FieldProps } from 'rc-field-form/lib/Field'
import type {
  InputSizeType,
  AlignContentType,
  AlignItemsType,
  FlexDirectionType,
  FlexWrapType,
  JustifyContentType,
  GapType,
  MarginSizeType,
  PaddingSizeType,
} from 'CSS'

export type Props = FormProps & {
  alignContent?: AlignContentType
  alignItems?: AlignItemsType
  direction?: FlexDirectionType
  wrap?: FlexWrapType
  justifyContent?: JustifyContentType

  gap?: GapType
  gapX?: GapType
  gapY?: GapType

  margin?: MarginSizeType
  marginX?: MarginSizeType
  marginY?: MarginSizeType
  marginTop?: MarginSizeType
  marginRight?: MarginSizeType
  marginBottom?: MarginSizeType
  marginLeft?: MarginSizeType

  padding?: PaddingSizeType
  paddingX?: PaddingSizeType
  paddingY?: PaddingSizeType
  paddingTop?: PaddingSizeType
  paddingRight?: PaddingSizeType
  paddingBottom?: PaddingSizeType
  paddingLeft?: PaddingSizeType
}

export type PropsField = FieldProps & {
  name: string
  label?: string | React.ReactChild
  labelIcon?: React.ReactChild
  size?: InputSizeType
  noStyle?: boolean
}
