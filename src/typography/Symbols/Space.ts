import { Fragment, VFC, createElement } from 'react'

export const displayName = 'Space'

const Space: VFC = () => createElement(Fragment, {}, `\u0020`)

Space.displayName = displayName

export default Space
