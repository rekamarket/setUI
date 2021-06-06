function mergePropsWithWarning<T>(
  defaultProps,
  props,
  componentName = 'Component'
): T {
  Object.entries(props).forEach(([key, value]) => {
    if (
      Object.prototype.hasOwnProperty.call(defaultProps, key) &&
      defaultProps[key] === value
    ) {
      console.warn(
        `%cYou are passing %c${key} %cwith %c${value} %cvalue, which is already a default value for %c<${componentName} />`,
        '',
        'color:orange;font-weight:bold',
        '',
        'color:orange;font-weight:bold',
        '',
        'color:red;font-weight:bold'
      )

      // todo: Add warning for misusing `padding/margin`
    }
  })

  return {
    ...defaultProps,
    ...props,
  }
}

export default {
  mergePropsWithWarning,
}
