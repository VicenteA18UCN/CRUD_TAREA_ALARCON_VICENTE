/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {CardUser} from '../../../_metronic/partials/content/cards/CardUser'
import {useState} from 'react'
import {CreateAppModal} from '../../../_metronic/partials'
import axios from 'axios'
import {CreateUserConfirmation} from '../../modules/users/CreateUserConfirmation'
import {User} from '../../modules/appointomens/_models'
import {useNavigate} from 'react-router-dom'

const URL_API = 'http://localhost:8000/api/'

const defaultUser: User = {
  id: 0,
  name: '',
  email: '',
  password: '',
}

const DashboardUser = () => {
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)

  const [users, setUsers] = useState<any[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    const response = await axios
      .get(`${URL_API}users`)
      .then((res) => {
        console.log(res.data)
        setUsers(res.data)
      })
      .catch((error) => console.log(error))
  }

  const createUser = async (user: User) => {
    await axios
      .post(`${URL_API}users`, user)
      .then((res) => {
        getAllUsers()
        setShowCreateAppModal(false)
      })
      .catch((error) => console.log(error))
  }

  const deleteUser = async (id) => {
    await axios
      .delete(`${URL_API}users/${id}`)
      .then((res) => {
        getAllUsers()
      })
      .catch((error) => console.log(error))
  }

  const updateUser = async (id, updatedUser) => {
    await axios
      .put(`${URL_API}users/${id}`, updatedUser)
      .then((res) => {
        getAllUsers()
      })
      .catch((error) => console.log(error))
  }

  const handleButton = () => {
    navigate('/dashboard')
  }

  return (
    <>
      {/* begin::Row */}
      <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        <div className='d-flex flex-wrap flex-stack mb-6'>
          <h3 className='fw-bolder my-2'>
            Lista de Usuarios
            <span className='fs-6 text-gray-400 fw-bold ms-1'>Active</span>
          </h3>
          <div className='d-flex flex-wrap my-2'>
            <a
              href='#'
              onClick={() => {
                handleButton()
              }}
              className='btn btn-sm fw-bold btn-primary'
            >
              Lista Citas
            </a>
          </div>
          <div className='d-flex flex-wrap my-2'>
            <a
              href='#'
              onClick={() => {
                setShowCreateAppModal(true)
              }}
              className='btn btn-sm fw-bold btn-primary'
            >
              Nuevo Usuario
            </a>
          </div>
        </div>

        <div className='row g-6 g-xl-9'>
          {users.map((user, index) => {
            return (
              <div key={index} className='col-md-6 col-xl-4'>
                <CardUser
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  password={user.password}
                  deleteUser={deleteUser}
                  updateUser={updateUser}
                />
              </div>
            )
          })}
        </div>
      </div>
      {/* end::Row */}
      <CreateUserConfirmation
        show={showCreateAppModal}
        onHide={() => setShowCreateAppModal(false)}
        onConfirm={createUser}
        newUser={defaultUser}
      />
    </>
  )
}

const DashboardUsers: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardUser />
    </>
  )
}

export {DashboardUsers}
