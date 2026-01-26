import { useState } from 'react'

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#242424] rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
          >
            ×
          </button>
        </div>
        {children}
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#646cff] text-white rounded-lg hover:bg-[#535bf2] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('info')

  const openModal = (type) => {
    setModalType(type)
    setIsModalOpen(true)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Modals & Dialogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <button
          onClick={() => openModal('info')}
          className="px-6 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Info Modal
        </button>
        <button
          onClick={() => openModal('warning')}
          className="px-6 py-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Warning Modal
        </button>
        <button
          onClick={() => openModal('success')}
          className="px-6 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Success Modal
        </button>
      </div>

      <div className="bg-gray-50 dark:bg-[#1a1a1a] p-6 rounded-lg">
        <p className="font-semibold mb-2">What you're learning:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>Conditional Rendering:</strong> Modal only shows when isOpen is true</li>
          <li><strong>Overlay/Backdrop:</strong> Dark overlay behind modal</li>
          <li><strong>Portal Pattern:</strong> Modal renders outside normal flow (fixed positioning)</li>
          <li><strong>State Management:</strong> Controlling modal open/close state</li>
        </ul>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalType === 'info' ? 'Information' : modalType === 'warning' ? 'Warning' : 'Success'}
      >
        {modalType === 'info' && (
          <p>This is an informational modal. It provides important information to the user.</p>
        )}
        {modalType === 'warning' && (
          <p className="text-yellow-600 dark:text-yellow-400">
            ⚠️ This is a warning modal. Be careful with this action!
          </p>
        )}
        {modalType === 'success' && (
          <p className="text-green-600 dark:text-green-400">
            ✓ This is a success modal. Your action completed successfully!
          </p>
        )}
      </Modal>
    </div>
  )
}

export default ModalPage
