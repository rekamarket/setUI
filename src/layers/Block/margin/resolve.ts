import { Styles as MarginBottom } from './bottom'
import { Styles as MarginLeft } from './left'
import { Styles as MarginRight } from './right'
import { Styles as MarginTop } from './top'

export function resolve<T>(
  props: T
): Record<'top' | 'bottom' | 'left' | 'right', string> {
  let marginTop = MarginTop.none
  if ('marginTop' in props && props['marginTop']) {
    marginTop = MarginTop[props['marginTop']]
  } else if ('marginY' in props && props['marginY']) {
    marginTop = MarginTop[props['marginY']]
  } else if ('margin' in props && props['margin']) {
    marginTop = MarginTop[props['margin']]
  }

  let marginBottom = MarginBottom.none
  if ('marginBottom' in props && props['marginBottom']) {
    marginBottom = MarginBottom[props['marginBottom']]
  } else if ('marginY' in props && props['marginY']) {
    marginBottom = MarginBottom[props['marginY']]
  } else if ('margin' in props && props['margin']) {
    marginBottom = MarginBottom[props['margin']]
  }

  let marginLeft = MarginLeft.none
  if ('marginLeft' in props && props['marginLeft']) {
    marginLeft = MarginLeft[props['marginLeft']]
  } else if ('marginX' in props && props['marginX']) {
    marginLeft = MarginLeft[props['marginX']]
  } else if ('margin' in props && props['margin']) {
    marginLeft = MarginLeft[props['margin']]
  }

  let marginRight = MarginRight.none
  if ('marginLeft' in props && props['marginLeft']) {
    marginRight = MarginRight[props['marginLeft']]
  } else if ('marginX' in props && props['marginX']) {
    marginRight = MarginRight[props['marginX']]
  } else if ('margin' in props && props['margin']) {
    marginRight = MarginRight[props['margin']]
  }

  return {
    top: marginTop,
    bottom: marginBottom,
    left: marginLeft,
    right: marginRight,
  }
}
