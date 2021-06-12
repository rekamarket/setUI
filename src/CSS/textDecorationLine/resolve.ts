export const resolve = ({
  isOverLine,
  isThrowLine,
  isUnderLine,
}: {
  isOverLine?: boolean
  isThrowLine?: boolean
  isUnderLine?: boolean
}): Type => {
  if (isOverLine && isThrowLine && isUnderLine) {
    return 'overline_lineThrough_underline'
  } else if (isOverLine && isThrowLine) {
    return 'overline_lineThrough'
  } else if (isOverLine && isUnderLine) {
    return 'overline_underline'
  } else if (isThrowLine && isUnderLine) {
    return 'lineThrough_underline'
  } else if (isOverLine) {
    return 'overline'
  } else if (isThrowLine) {
    return 'lineThrough'
  } else if (isUnderLine) {
    return 'underline'
  } else {
    return 'none'
  }
}
