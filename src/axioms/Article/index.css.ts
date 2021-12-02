// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { globalStyle, style } from '@vanilla-extract/css'
import { h1, h2, h3, h4, h5, h6, paragraph, textBlock } from '../../typography'
import { list, orderedList, unorderedList } from '../../layout'

const className = style({})

// h1
globalStyle(`${className} ${h1} + ${h1}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h1} + ${h2}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h1} + ${h3}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h1} + ${h4}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h1} + ${h5}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h1} + ${h6}`, {
  fontSize: '0 !important',
})

// globalStyle(`${className} ${h1} + ${paragraph}`, {
//   paddingTop: 0,
// })

// globalStyle(`${className} ${h1} + ${textBlock}`, {
//   paddingTop: 0,
// })

globalStyle(`${className} ${h1} + ${list}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h1} + ${orderedList}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h1} + ${unorderedList}`, {
  paddingTop: 0,
})

// h2
globalStyle(`${className} ${h2} + ${h1}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h2} + ${h2}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h2} + ${h3}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h2} + ${h4}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h2} + ${h5}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h2} + ${h6}`, {
  fontSize: '0 !important',
})

// globalStyle(`${className} ${h2} + ${paragraph}`, {
//   paddingTop: 0,
// })

// globalStyle(`${className} ${h2} + ${textBlock}`, {
//   paddingTop: 0,
// })

globalStyle(`${className} ${h2} + ${list}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h2} + ${orderedList}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h2} + ${unorderedList}`, {
  paddingTop: 0,
})

// h3
globalStyle(`${className} ${h3} + ${h1}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h3} + ${h2}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h3} + ${h3}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h3} + ${h4}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h3} + ${h5}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h3} + ${h6}`, {
  fontSize: '0 !important',
})

// globalStyle(`${className} ${h3} + ${paragraph}`, {
//   paddingTop: 0,
// })

// globalStyle(`${className} ${h3} + ${textBlock}`, {
//   paddingTop: 0,
// })

globalStyle(`${className} ${h3} + ${list}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h3} + ${orderedList}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h3} + ${unorderedList}`, {
  paddingTop: 0,
})

// h4
globalStyle(`${className} ${h4} + ${h1}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h4} + ${h2}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h4} + ${h3}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h4} + ${h4}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h4} + ${h5}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h4} + ${h6}`, {
  fontSize: '0 !important',
})

// globalStyle(`${className} ${h4} + ${paragraph}`, {
//   paddingTop: 0,
// })

// globalStyle(`${className} ${h4} + ${textBlock}`, {
//   paddingTop: 0,
// })

globalStyle(`${className} ${h4} + ${list}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h4} + ${orderedList}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h4} + ${unorderedList}`, {
  paddingTop: 0,
})

// h5
globalStyle(`${className} ${h5} + ${h1}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h5} + ${h2}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h5} + ${h3}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h5} + ${h4}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h5} + ${h5}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h5} + ${h6}`, {
  paddingTop: 0,
})

// globalStyle(`${className} ${h5} + ${paragraph}`, {
//   paddingTop: 0,
// })

// globalStyle(`${className} ${h5} + ${textBlock}`, {
//   paddingTop: 0,
// })

globalStyle(`${className} ${h5} + ${list}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h5} + ${orderedList}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h5} + ${unorderedList}`, {
  paddingTop: 0,
})

// h6
globalStyle(`${className} ${h6} + ${h1}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h6} + ${h2}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h6} + ${h3}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h6} + ${h4}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h6} + ${h5}`, {
  fontSize: '0 !important',
})

globalStyle(`${className} ${h6} + ${h6}`, {
  paddingTop: 0,
})

// globalStyle(`${className} ${h6} + ${paragraph}`, {
//   paddingTop: 0,
// })

// globalStyle(`${className} ${h6} + ${textBlock}`, {
//   paddingTop: 0,
// })

globalStyle(`${className} ${h6} + ${list}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h6} + ${orderedList}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h6} + ${unorderedList}`, {
  paddingTop: 0,
})

// paragraph
globalStyle(`${className} ${paragraph} + ${h1}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${paragraph} + ${h2}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${paragraph} + ${h3}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${paragraph} + ${h4}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${paragraph} + ${h5}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${paragraph} + ${h6}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${paragraph} + ${paragraph}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${paragraph} + ${textBlock}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${paragraph} + ${list}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${paragraph} + ${orderedList}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${paragraph} + ${unorderedList}`, {
  paddingTop: 0,
})

// textBlock
globalStyle(`${className} ${textBlock} + ${h1}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${textBlock} + ${h2}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${textBlock} + ${h3}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${textBlock} + ${h4}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${textBlock} + ${h5}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${textBlock} + ${h6}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${textBlock} + ${paragraph}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${textBlock} + ${textBlock}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${textBlock} + ${list}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${textBlock} + ${orderedList}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${textBlock} + ${unorderedList}`, {
  paddingTop: 0,
})

// list
globalStyle(`${className} ${list} + ${h1}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${list} + ${h2}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${list} + ${h3}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${list} + ${h4}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${list} + ${h5}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${list} + ${h6}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${list} + ${paragraph}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${list} + ${textBlock}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${list} + ${list}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${list} + ${orderedList}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${list} + ${unorderedList}`, {
  paddingTop: 0,
})

// orderedList
globalStyle(`${className} ${orderedList} + ${h1}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${orderedList} + ${h2}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${orderedList} + ${h3}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${orderedList} + ${h4}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${orderedList} + ${h5}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${orderedList} + ${h6}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${orderedList} + ${paragraph}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${orderedList} + ${textBlock}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${orderedList} + ${list}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${orderedList} + ${orderedList}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${orderedList} + ${unorderedList}`, {
  paddingTop: 0,
})

// unorderedList
globalStyle(`${className} ${unorderedList} + ${h1}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${unorderedList} + ${h2}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${unorderedList} + ${h3}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${unorderedList} + ${h4}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${unorderedList} + ${h5}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${unorderedList} + ${h6}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${unorderedList} + ${paragraph}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${unorderedList} + ${textBlock}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${unorderedList} + ${list}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${unorderedList} + ${orderedList}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${unorderedList} + ${unorderedList}`, {
  paddingTop: 0,
})

export default className
