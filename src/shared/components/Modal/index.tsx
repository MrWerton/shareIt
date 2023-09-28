import { ReactNode } from 'react'
import Modal from 'react-modal'
import styles from './styles.module.scss'

interface IModalProps {
  children: ReactNode
  title: string
  modalStatus: boolean
  handleOpenModal: () => void
}

export const ModalComponent = ({
  children,
  title,
  modalStatus,
  handleOpenModal
}: IModalProps) => {
  return (
    <Modal
      data-testid="modal"
      ariaHideApp={false}
      isOpen={modalStatus}
      closeTimeoutMS={200}
      onRequestClose={handleOpenModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={() => handleOpenModal()}>
        Fechar
      </button>
      <div className={styles.header_modal}>
        <h2>{title}</h2>
      </div>
      {children}
    </Modal>
  )
}