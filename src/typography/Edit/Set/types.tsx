import type {
  BackgroundColorType,
  ColorType,
  FontFamilyType,
  FontSizeType,
  FontWeightType,
  PaddingSizeType,
  PaddingType,
} from 'CSS'

export type AsType = 'del' | 'ins'

type BasicProps = {
  cite?: string
  datetime?: string
  className?: string
}

type StyleProps = {
  as?: AsType

  background?: BackgroundColorType
  color?: ColorType

  weight?: FontWeightType
  type?: FontFamilyType
  size?: FontSizeType
}

export type { PaddingType } from 'CSS'
export type Props = BasicProps & StyleProps & PaddingType
export type PropsRequired = BasicProps &
  Required<StyleProps> &
  Required<PaddingType>
