import { Styles as PaddingAfter } from './after'
import { Styles as PaddingBefore } from './before'

export function resolve<T>(props: T): Record<'start' | 'end', string> {
  let paddingInlineStart = PaddingBefore.none
  if ('spacingBefore' in props && props['spacingBefore']) {
    paddingInlineStart = PaddingBefore[props['spacingBefore']]
  } else if ('spacing' in props && props['spacing']) {
    paddingInlineStart = PaddingBefore[props['spacing']]
  }

  let paddingInlineEnd = PaddingAfter.none
  if ('spacingAfter' in props && props['spacingAfter']) {
    paddingInlineEnd = PaddingAfter[props['spacingAfter']]
  } else if ('spacing' in props && props['spacing']) {
    paddingInlineEnd = PaddingAfter[props['spacing']]
  }
  return {
    start: paddingInlineStart,
    end: paddingInlineEnd,
  }
}
