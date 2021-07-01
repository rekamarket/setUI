export function resolve<T>(props: T) {
  if ('overline' in props && 'lineThrough' in props && 'underline' in props) {
    return 'overline line-through underline'
  } else if ('overline' in props && 'lineThrough' in props) {
    return 'overline line-through'
  } else if ('overline' in props && 'underline' in props) {
    return 'overline underline'
  } else if ('lineThrough' in props && 'underline' in props) {
    return 'line-through underline'
  } else if ('overline' in props) {
    return 'overline'
  } else if ('lineThrough' in props) {
    return 'line-through'
  } else if ('underline' in props) {
    return 'underline'
  } else if ('decoration' in props) {
    return props['decoration']
  } else {
    return undefined
  }
}
