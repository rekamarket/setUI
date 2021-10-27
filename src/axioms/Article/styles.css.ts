import { globalStyle, style } from '@vanilla-extract/css'
import { h1, h2, h3, h4, h5, h6, paragraph } from 'typography'

const className = style({})

// h1
globalStyle(`${className} ${h1} + ${h1}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h1} + ${h2}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h1} + ${h3}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h1} + ${h4}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h1} + ${h5}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h1} + ${h6}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h1} + ${paragraph}`, {
  paddingTop: 0,
})

// h2
globalStyle(`${className} ${h2} + ${h1}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h2} + ${h2}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h2} + ${h3}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h2} + ${h4}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h2} + ${h5}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h2} + ${h6}`, {
  paddingTop: 0,
})
globalStyle(`${className} ${h2} + ${paragraph}`, {
  paddingTop: 0,
})

// h3
globalStyle(`${className} ${h3} + ${h1}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h3} + ${h2}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h3} + ${h3}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h3} + ${h4}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h3} + ${h5}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h3} + ${h6}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h3} + ${paragraph}`, {
  paddingTop: 0,
})

// h4
globalStyle(`${className} ${h4} + ${h1}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h4} + ${h2}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h4} + ${h3}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h4} + ${h4}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h4} + ${h5}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h4} + ${h6}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h4} + ${paragraph}`, {
  paddingTop: 0,
})

// h5
globalStyle(`${className} ${h5} + ${h1}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h5} + ${h2}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h5} + ${h3}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h5} + ${h4}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h5} + ${h5}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h5} + ${h6}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h5} + ${paragraph}`, {
  paddingTop: 0,
})

// h6
globalStyle(`${className} ${h6} + ${h1}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h6} + ${h2}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h6} + ${h3}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h6} + ${h4}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h6} + ${h5}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h6} + ${h6}`, {
  paddingTop: 0,
})

globalStyle(`${className} ${h6} + ${paragraph}`, {
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

export default className
