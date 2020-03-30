import React from 'react'
import MaterialIcon from 'material-icons-react'
import Loader from 'react-loader-spinner'
import ReactModal from 'react-modal'
import './styles.scss'
import SubTitle from '../subTitle'

const Modal = ({
  children,
  onClose,
  title,
  isOpen,
  className,
  unclosable = false,
  loading = false
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={() => {}}
      onRequestClose={() => {}}
      contentLabel="Example Modal"
      className={`default-modal ${className}`}
      overlayClassName="default-modal-overlay"
      appElement={document.getElementById('root')}
      ariaHideApp={false}
    >
      <SubTitle>{title}</SubTitle>
      {!unclosable && (
        <div className="icon-close" onClick={onClose}>
          <MaterialIcon icon="clear" />
        </div>
      )}
      {loading ? (
        <div className={`content-loader ${className}`}>
          <Loader type="Oval" color="gray" height={50} width={50} />
        </div>
      ) : (
        <div className="content">{children}</div>
      )}
    </ReactModal>
  )
}

export default Modal
