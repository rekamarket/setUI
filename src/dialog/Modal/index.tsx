import { FC } from 'react'
import cn from 'classnames'
import Modal from 'rc-dialog'
import { BoxShadow, Color, FontFamily } from 'CSS'
import { ModalWidth } from '../css'
import { Props } from './types'
import { ClassName } from './styles.css'

export const ModalComponent: FC<Props> = ({
  // rc-dialog
  prefixCls,
  className,
  style,
  zIndex,
  bodyStyle,
  maskStyle,
  visible,
  animation,
  maskAnimation,
  transitionName,
  maskTransitionName,
  title,
  footer,
  closable,
  mask,
  maskClosable,
  keyboard,
  mousePosition,
  onClose,
  afterClose,
  getContainer,
  destroyOnClose,
  closeIcon,
  forceRender,
  focusTriggerAfterClose,
  modalRender,
  children,

  // custom
  size,
  accent,
}) => {
  return (
    <Modal
      prefixCls={prefixCls}
      className={cn([
        className,
        ClassName,
        BoxShadow[64],
        FontFamily.primary,
        Color[accent] || Color.white,
        ModalWidth[size] || ModalWidth.default,
      ])}
      style={style}
      zIndex={zIndex}
      bodyStyle={bodyStyle}
      maskStyle={maskStyle}
      visible={visible}
      animation={animation}
      maskAnimation={maskAnimation}
      transitionName={transitionName}
      maskTransitionName={maskTransitionName}
      title={title}
      footer={footer}
      closable={closable}
      mask={mask}
      maskClosable={maskClosable}
      keyboard={keyboard}
      mousePosition={mousePosition}
      onClose={onClose}
      afterClose={afterClose}
      getContainer={getContainer}
      destroyOnClose={destroyOnClose}
      closeIcon={closeIcon}
      forceRender={forceRender}
      focusTriggerAfterClose={focusTriggerAfterClose}
      modalRender={modalRender}
    >
      {children}
    </Modal>
  )
}

export default ModalComponent
