import React, { useCallback } from 'react'
import Modal from '../../../components/modal'
import Button from '../../../components/button'
import './styles.scss'

const ModalSave = ({ isOpen, onClose, msg, data, sendData }) => {
  const handleOnClose = useCallback(() => {
    onClose()
  }, [])

  const handleYesClick = useCallback(() => {
    onClose()
    sendData(data)
  }, [])

  return (
    <Modal
      onClose={handleOnClose}
      className="modal-save-wrapper"
      title="Atenção!"
      isOpen={isOpen}
    >
      <div className="modal-save">
        <p>{msg}</p>

        <div className="footer">
          <Button className="btn-green" onClick={handleYesClick}>
            Sim
          </Button>
          <Button className="btn-red" onClick={handleOnClose}>
            Não
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalSave
