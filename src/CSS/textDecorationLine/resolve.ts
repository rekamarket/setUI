import { Style } from './styles.css'

export function resolve<T>(props: T) {
  if ('overline' in props && 'lineThrough' in props && 'underline' in props) {
    return Style.overline_lineThrough_underline
  } else if ('overline' in props && 'lineThrough' in props) {
    return Style.overline_lineThrough
  } else if ('overline' in props && 'underline' in props) {
    return Style.overline_underline
  } else if ('lineThrough' in props && 'underline' in props) {
    return Style.lineThrough_underline
  } else if ('overline' in props) {
    return Style.overline
  } else if ('lineThrough' in props) {
    return Style.lineThrough
  } else if ('underline' in props) {
    return Style.underline
  } else if ('decorationLine' in props) {
    return Style[props['decorationLine']]
  } else {
    return Style.none
  }
}
