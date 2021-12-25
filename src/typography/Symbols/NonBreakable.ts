import { Fragment, VFC, createElement } from 'react'

export const displayName = 'NonBreakable'

const NonBreakable: VFC = () => createElement(Fragment, {}, `\u00a0`)

NonBreakable.displayName = displayName

export default NonBreakable
