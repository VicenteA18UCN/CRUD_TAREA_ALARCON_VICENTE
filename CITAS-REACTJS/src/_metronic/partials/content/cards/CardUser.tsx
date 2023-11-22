/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useState} from 'react'
import {Link} from 'react-router-dom'
import {KTIcon} from '../../../helpers'
import {DeleteUserConfirmation} from '../../../../app/modules/users/DeleteUserConfirmation'
import {UpdateUserConfirmation} from '../../../../app/modules/users/UpdateUserConfirmation'
import {Appointment, User} from '../../../../app/modules/appointomens/_models'

type Props = {
  id: number
  name: string
  email: string
  password: string
  deleteUser: (id: number) => void
  updateUser: (id: number, updatedUser: User) => void
}

const CardUser: FC<Props> = ({id, name, email, password, deleteUser, updateUser}) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [showUpdateConfirmation, setShowUpdateConfirmation] = useState(false)
  const user: User = {
    id: id,
    name: name,
    email: email,
    password: password,
  }
  const handleUpdateClick = () => {
    setShowUpdateConfirmation(true)
  }

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true)
  }

  const handleUpdateConfirmed = (user: User) => {
    updateUser(id, user)
    setShowUpdateConfirmation(false)
  }

  const handleDeleteConfirmed = () => {
    deleteUser(id)
    setShowDeleteConfirmation(false)
  }

  const handleUpdateCancel = () => {
    setShowUpdateConfirmation(false)
  }

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false)
  }

  return (
    <>
      <div className='card-header border-0 pt-9'>
        <div className='card-title m-0'>
          <div className='symbol symbol-50px bg-light'>
            <div className='fs-3 fw-bolder text-dark'>Nombre: {name}</div>
          </div>
        </div>

        <div className='card-toolbar'>
          <div className='d-flex justify-content-end flex-shrink-0'>
            <a
              href='#'
              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
              onClick={handleUpdateClick}
            >
              <KTIcon iconName='pencil' className='fs-3' />
            </a>
            <a
              href='#'
              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
              onClick={() => handleDeleteClick()}
            >
              <KTIcon iconName='trash' className='fs-3' />
            </a>
          </div>
        </div>
      </div>

      <div className='card-body p-9'>
        <h3>Correo</h3>
        <p className='text-gray-400 fw-bold fs-5 mt-1 mb-7'>{email}</p>
      </div>

      <DeleteUserConfirmation
        show={showDeleteConfirmation}
        onHide={handleDeleteCancel}
        onConfirm={handleDeleteConfirmed}
      />

      <UpdateUserConfirmation
        show={showUpdateConfirmation}
        onHide={handleUpdateCancel}
        onConfirm={handleUpdateConfirmed}
        initialUser={user}
      />
    </>
  )
}

export {CardUser}
