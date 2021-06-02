import { style, globalStyle } from '@vanilla-extract/css'
import { FontWeightMap } from 'CSS'

export const ClassName = style({
  border: '1px solid #333',
})

globalStyle('.rc-tabs-dropdown', {
  position: 'absolute',
  background: '#fefefe',
  border: '1px solid black',
  maxHeight: 200,
  overflow: 'auto',
})

globalStyle('.rc-tabs-dropdown-hidden', {
  display: 'none',
})

globalStyle('.rc-tabs-dropdown-menu', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
})

globalStyle('.rc-tabs-dropdown-menu-item', {
  padding: '4px 8px',
})

globalStyle('.rc-tabs-dropdown-menu-item-selected', {
  background: 'red',
})

globalStyle('.rc-tabs-dropdown-menu-item-disabled', {
  opacity: 0.3,
  cursor: 'not-allowed',
})

globalStyle('.rc-tabs-content', {
  display: 'flex',
  width: '100%',
})

globalStyle('.rc-tabs-content-holder', {
  flex: 'auto',
})

globalStyle('.rc-tabs-content-animated', {
  transition: 'margin 0.3s',
})

globalStyle('.rc-tabs-tabpane', {
  width: '100%',
  flex: 'none',
})

globalStyle(
  `
.rc-tabs-top,
.rc-tabs-bottom,
`,
  {
    flexDirection: 'column',
  }
)

globalStyle('.rc-tabs-top .rc-tabs-ink-bar', {
  height: 3,
})
globalStyle('.rc-tabs-bottom .rc-tabs-ink-bar', {
  height: 3,
})

globalStyle('.rc-tabs-top .rc-tabs-ink-bar', {
  bottom: 0,
})

globalStyle('.rc-tabs-bottom .rc-tabs-nav', {
  order: 1,
})

globalStyle('.rc-tabs-bottom .rc-tabs-content', {
  order: 0,
})

globalStyle('.rc-tabs-bottom .rc-tabs-ink-bar', {
  top: 0,
})

globalStyle(
  `
.rc-tabs-left.rc-tabs-editable .rc-tabs-tab,
.rc-tabs-right.rc-tabs-editable .rc-tabs-tab,
`,
  {
    paddingRight: 32,
  }
)

globalStyle(
  `
.rc-tabs-left .rc-tabs-nav-wrap,
.rc-tabs-right .rc-tabs-nav-wrap,
`,
  {
    flexDirection: 'column',
  }
)

globalStyle(
  `
.rc-tabs-left .rc-tabs-ink-bar,
.rc-tabs-right .rc-tabs-ink-bar,
`,
  {
    width: 3,
  }
)

globalStyle(
  `
.rc-tabs-left .rc-tabs-nav,
.rc-tabs-right .rc-tabs-nav,
`,
  {
    flexDirection: 'column',
    minWidth: 50,
  }
)

globalStyle(
  `
.rc-tabs-left .rc-tabs-nav-list,
.rc-tabs-right .rc-tabs-nav-list,
.rc-tabs-left .rc-tabs-nav-operations,
.rc-tabs-right .rc-tabs-nav-operations,
`,
  {
    flex: '1 0 auto',
    flexDirection: 'column',
  }
)

globalStyle('.rc-tabs-left .rc-tabs-ink-bar', {
  right: 0,
})

globalStyle('.rc-tabs-right .rc-tabs-nav', {
  order: 1,
})

globalStyle('.rc-tabs-right .rc-tabs-content', {
  order: 0,
})

globalStyle('.rc-tabs-right .rc-tabs-ink-bar', {
  left: 0,
})

globalStyle('.rc-tabs-rtl', {
  direction: 'rtl',
})

globalStyle('.rc-tabs-dropdown-rtl', {
  direction: 'rtl',
})

globalStyle('.rc-tabs', {
  display: 'grid',
  overflow: 'hidden',
})

globalStyle('.rc-tabs-nav', {
  display: 'flex',
  flex: 'none',
  position: 'relative',
  borderBottom: '1px solid var(--color)',
})

globalStyle(
  `
.rc-tabs-nav-measure,
.rc-tabs-nav-wrap,
`,
  {
    transform: 'translate(0)',
    position: 'relative',
    display: 'inline-block',
    flex: 'auto',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'flex',
  }
)

globalStyle(
  `
.rc-tabs-nav-measure-ping-left::before,
.rc-tabs-nav-wrap-ping-left::before,
.rc-tabs-nav-measure-ping-right::after,
.rc-tabs-nav-wrap-ping-right::after,
`,
  {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
  }
)

globalStyle(
  `
.rc-tabs-nav-measure-ping-left::before,
.rc-tabs-nav-wrap-ping-left::before,
`,
  {
    left: 0,
    borderLeft: '1px solid red',
  }
)

globalStyle(
  `
.rc-tabs-nav-measure-ping-right::after,
.rc-tabs-nav-wrap-ping-right::after,
`,
  {
    right: 0,
    borderRight: '1px solid red',
  }
)

globalStyle(
  `
.rc-tabs-nav-measure-ping-top::before,
.rc-tabs-nav-wrap-ping-top::before,
.rc-tabs-nav-measure-ping-bottom::after,
.rc-tabs-nav-wrap-ping-bottom::after,
`,
  {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
  }
)

globalStyle(
  `
.rc-tabs-nav-measure-ping-top::before,
.rc-tabs-nav-wrap-ping-top::before,
`,
  {
    top: 0,
    borderTop: '1px solid red',
  }
)

globalStyle(
  `
.rc-tabs-nav-measure-ping-bottom::after,
.rc-tabs-nav-wrap-ping-bottom::after,
`,
  {
    bottom: 0,
    borderTop: '1px solid red',
  }
)

globalStyle('.rc-tabs-nav-list', {
  display: 'flex',
  position: 'relative',
  transition: 'transform 0.3s',
})

globalStyle('.rc-tabs-nav-operations', {
  display: 'flex',
})

globalStyle('.rc-tabs-nav-operations-hidden', {
  position: 'absolute',
  visibility: 'hidden',
  pointerEvents: 'none',
})

globalStyle('.rc-tabs-nav-more', {
  border: '1px solid blue',
  background: 'rgba(255, 0, 0, 0.1)',
})

globalStyle('.rc-tabs-nav-add', {
  border: '1px solid green',
  background: 'rgba(0, 255, 0, 0.1)',
})

globalStyle('.rc-tabs-tab', {
  border: 0,
  margin: 0,
  display: 'flex',
  outline: 'none',
  cursor: 'pointer',
  position: 'relative',
  alignItems: 'center',
})

globalStyle(
  `
.rc-tabs-tab-btn,
.rc-tabs-tab-remove,
`,
  {
    border: 0,
    background: 'transparent',
  }
)

globalStyle('.rc-tabs-tab-btn', {})

globalStyle('.rc-tabs-tab-remove:hover', {
  color: 'red',
})

globalStyle('.rc-tabs-tab-active > .rc-tabs-tab-btn > *', {
  fontWeight: FontWeightMap.bold,
})

globalStyle('.rc-tabs-ink-bar', {
  position: 'absolute',
  background: 'var(--color)',
  pointerEvents: 'none',
})

globalStyle('.rc-tabs-ink-bar-animated', {
  transition: 'all 0.3s',
})

globalStyle('.rc-tabs-extra-content', {
  flex: 'none',
})
