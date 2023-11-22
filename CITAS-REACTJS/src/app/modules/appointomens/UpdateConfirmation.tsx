import {FC, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Form} from 'react-bootstrap'
import {Appointment} from './_models'
type Props = {
  show: boolean
  onHide: () => void
  onConfirm: (appointment: Appointment) => void
  initialAppointment: Appointment
}

const UpdateConfirmation: FC<Props> = ({show, onHide, onConfirm, initialAppointment}) => {
  const [appointment, setAppointment] = useState<Appointment>(initialAppointment)
  const handleClientChange = (event: any) => {
    console.log(event)
    setAppointment({...appointment, [event.target.id]: event.target.value})
  }
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Editar cita</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Nombre'
              id='name'
              value={appointment.name}
              onChange={(e) => handleClientChange(e)}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Email'
              id='email'
              value={appointment.email}
              onChange={(e) => handleClientChange(e)}
            />
            <Form.Label>Telefóno</Form.Label>
            <Form.Control
              type='text'
              placeholder='Telefóno'
              id='phone'
              value={appointment.phone}
              onChange={(e) => handleClientChange(e)}
            />
            <Form.Label>Sintomas</Form.Label>
            <Form.Control
              type='text'
              placeholder='Sintomas'
              id='symptom'
              value={appointment.symptom}
              onChange={(e) => handleClientChange(e)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Cancelar
        </Button>
        <Button variant='danger' onClick={() => onConfirm(appointment)}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export {UpdateConfirmation}
