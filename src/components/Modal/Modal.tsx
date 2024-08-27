import { Modal } from '@mui/material'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: any
}

export const ModalComponent = (props: ModalProps) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {props.children}
    </Modal>
  )
}
