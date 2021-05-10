import {
  createTheme,
  globalStyle,
  mapToStyles,
  style,
} from '@vanilla-extract/css'
import { ZIndexMap } from '../../theme'

export const modal = style({})

globalStyle('.rc-dialog-root', {})

globalStyle('.rc-dialog-mask', {
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  backgroundColor: 'rgba(55, 55, 55, 0.6)',
  height: '100%',
  filter: 'alpha(opacity=50)',
  zIndex: ZIndexMap.modal,
})
globalStyle('.rc-dialog-mask-hidden', {
  display: 'none',
})

globalStyle('.rc-dialog-wrap', {
  position: 'fixed',
  overflow: 'auto',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: ZIndexMap.modal,
  outline: 0,
  cursor: 'pointer',
})

globalStyle('.rc-dialog', {
  position: 'relative',
  margin: '10% auto',
  cursor: 'initial',
})

globalStyle('.rc-dialog-content', {
  position: 'relative',
  backgroundColor: '#ffffff',
  border: 'none',
  borderTop: '4px solid currentColor',
  borderRadius: 0,
  backgroundClip: 'padding-box',
})

globalStyle('.rc-dialog-header', {
  padding: '12px 60px 16px 16px',
  borderRadius: 0,
  background: '#fff',
  color: '#666',
  borderBottom: '1px solid #e9e9e9',
})

globalStyle('.rc-dialog-close', {
  cursor: 'pointer',
  border: 0,
  background: 'transparent',
  position: 'absolute',
  right: 20,
  top: 12,
  color: '#201F1E',
  width: 30,
  height: 30,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  transition: '.2s background ease-in',
})
globalStyle('.rc-dialog-close:hover', {
  background: 'rgba(0, 0, 0, .2)',
})

globalStyle('.rc-dialog-close-x', {
  position: 'relative',
  top: 2,
})
globalStyle('.rc-dialog-close-x:after', {
  content: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.1016 1.60156L8.20312 7.5L14.1016 13.3984L13.3984 14.1016L7.5 8.20312L1.60156 14.1016L0.898438 13.3984L6.79688 7.5L0.898438 1.60156L1.60156 0.898438L7.5 6.79688L13.3984 0.898438L14.1016 1.60156Z' fill='%23201F1E'/%3E%3C/svg%3E%0A")`,
})

globalStyle('.rc-dialog-body', {
  padding: 0,
  color: 'initial',
})
