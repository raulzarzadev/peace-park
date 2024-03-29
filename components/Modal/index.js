import React from 'react'
import CrossIcon from '../icons/CrossIcon'

const Modal = React.forwardRef(
  (
    {
      title = 'Modal title',
      open,
      handleOpen = () => {},
      children
    },
    ref
  ) => {
    const modalId = `modal-${new Date().getTime()}-${Math.random()}`

    return (
      <div
        className={`top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black bg-opacity-50 z-20 ${
          open ? 'fixed' : 'hidden'
        } `}
        id={modalId}
        onClick={(e) => {
          // e.preventDefault()
          /**
           * !TODO: if e.preventDefault() is called, the modal will make fails the form inside
           *
           */
          e.stopPropagation()
          e.target.id === modalId && handleOpen()
        }}
      >
        <div className='bg-base-100 overflow-auto max-h-full rounded-lg w-full max-w-sm  '>
          <header
            className={
              'flex justify-between sticky top-0 bg-base-100 z-10 px-3 py-1'
            }
          >
            <div className={''}>
              <h5 className='font-bold max-w-[180px] truncate'>
                {title}
              </h5>
            </div>
            <button
              className={''}
              onClick={(e) => {
                e.preventDefault()
                handleOpen()
              }}
            >
              <CrossIcon />
            </button>
          </header>
          <main className={'pt-5 p-5'}>{children}</main>
        </div>
      </div>
    )
  }
)
Modal.displayName = 'Modal'

export default Modal
