import { FC } from 'react'
import cn from 'classnames'
import Modal from 'rc-dialog'
import { Props } from './types'
import { modal } from './style.css'
import { BoxShadow, Color, FontFamily, WidthModal } from '../../theme'

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
        modal,
        BoxShadow[64],
        FontFamily.primary,
        Color[accent] || Color.white,
        WidthModal[size] || WidthModal.default,
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
