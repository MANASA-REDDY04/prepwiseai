import React from 'react'

const Modal = ({children, isOpen, onClose, title, hideHeader}) => {

    if(!isOpen) return null;
  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/40'>
        {/* Modal content */}
         <div className={`relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden`}>
        {/* Modal Header */}
        {!hideHeader && (
            <div className='flex items-center justify-between p-4 border-b border-gray-200'>
                <h3 className='md:text-lg font-medium text-gray-900'>{title}</h3>
            </div>
        )}
        <button
          type='button'
          className='absolute top-3 right-3 p-1 text-gray-400 bg-transparent hover:bg-orange-100 hover:text-gray-900 rounded-lg text-xs w-6 h-6 flex justify-center items-center cursor-pointer transition-colors duration-150'
          onClick={onClose}
          aria-label='Close modal'
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 12"
            width="16"
            height="16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2 2l8 8M10 2L2 10"
            />
          </svg>
        </button>
        {/* Modal Body (Scrollable) */}
        <div className='flex-1 overflow-y-auto custom-scrollbar'>
            {children}
        </div>
    </div>
    </div>
  )
}

export default Modal
