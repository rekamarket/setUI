import { Styles as PaddingBottom } from './bottom'
import { Styles as PaddingLeft } from './left'
import { Styles as PaddingRight } from './right'
import { Styles as PaddingTop } from './top'

export function resolve<T>(
  props: T
): Record<'top' | 'bottom' | 'left' | 'right', string> {
  let paddingTop = PaddingTop.none
  if ('paddingTop' in props) {
    paddingTop = PaddingTop[props['paddingTop']]
  } else if ('paddingY' in props) {
    paddingTop = PaddingTop[props['paddingY']]
  } else if ('padding' in props) {
    paddingTop = PaddingTop[props['padding']]
  }

  let paddingBottom = PaddingBottom.none
  if ('paddingBottom' in props) {
    paddingBottom = PaddingBottom[props['paddingBottom']]
  } else if ('paddingY' in props) {
    paddingBottom = PaddingBottom[props['paddingY']]
  } else if ('padding' in props) {
    paddingBottom = PaddingBottom[props['padding']]
  }

  let paddingLeft = PaddingLeft.none
  if ('paddingLeft' in props) {
    paddingLeft = PaddingLeft[props['paddingLeft']]
  } else if ('paddingX' in props) {
    paddingLeft = PaddingLeft[props['paddingX']]
  } else if ('padding' in props) {
    paddingLeft = PaddingLeft[props['padding']]
  }

  let paddingRight = PaddingRight.none
  if ('paddingLeft' in props) {
    paddingRight = PaddingRight[props['paddingLeft']]
  } else if ('paddingX' in props) {
    paddingRight = PaddingRight[props['paddingX']]
  } else if ('padding' in props) {
    paddingRight = PaddingRight[props['padding']]
  }

  return {
    top: paddingTop,
    bottom: paddingBottom,
    left: paddingLeft,
    right: paddingRight,
  }
}
