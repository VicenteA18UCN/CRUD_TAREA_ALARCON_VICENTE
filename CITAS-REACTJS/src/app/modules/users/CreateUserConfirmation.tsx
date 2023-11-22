import {FC, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Form} from 'react-bootstrap'
import {User} from '../appointomens/_models'
type Props = {
  show: boolean
  onHide: () => void
  onConfirm: (user: User) => void
  newUser: User
}

const CreateUserConfirmation: FC<Props> = ({show, onHide, onConfirm, newUser}) => {
  const [user, setUser] = useState<User>(newUser)
  const handleClientChange = (event: any) => {
    console.log(event)
    setUser({...user, [event.target.id]: event.target.value})
  }
  console.log(user)
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
              onChange={(e) => handleClientChange(e)}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Email'
              id='email'
              onChange={(e) => handleClientChange(e)}
            />
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type='password'
              placeholder='Contraseña'
              id='password'
              onChange={(e) => handleClientChange(e)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Cancelar
        </Button>
        <Button variant='danger' onClick={() => onConfirm(user)}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export {CreateUserConfirmation}
