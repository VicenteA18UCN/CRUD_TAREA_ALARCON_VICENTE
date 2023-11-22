/* eslint-disable react/jsx-no-target-blank */
import {useEffect} from 'react'
import {ILayout, useLayout} from '../../core'

const Footer = () => {
  const {config} = useLayout()
  useEffect(() => {
    updateDOM(config)
  }, [config])
  return (
    <>
      <div className='text-dark order-2 order-md-1'>
        <span className='text-muted fw-semibold me-1'>
          {new Date().getFullYear().toString()}&copy;
        </span>
        <a
          href='https://www.linkedin.com/in/ricardo-urvina/'
          target='_blank'
          className='text-gray-800 text-hover-primary'
        >
          Ricardo Urvina Córdova
        </a>
      </div>
    </>
  )
}

const updateDOM = (config: ILayout) => {
  if (config.app?.footer?.fixed?.desktop) {
    document.body.classList.add('data-kt-app-footer-fixed', 'true')
  }

  if (config.app?.footer?.fixed?.mobile) {
    document.body.classList.add('data-kt-app-footer-fixed-mobile', 'true')
  }
}

export {Footer}
