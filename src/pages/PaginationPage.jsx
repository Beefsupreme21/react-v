import { useState } from 'react'

function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Sample data
  const allItems = Array.from({ length: 47 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `This is item number ${i + 1} in the list.`
  }))

  // Calculate pagination
  const totalPages = Math.ceil(allItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = allItems.slice(startIndex, endIndex)

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Pagination</h1>

      <div className="mb-6 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Showing {startIndex + 1}-{Math.min(endIndex, allItems.length)} of {allItems.length} items
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {currentItems.map(item => (
          <div
            key={item.id}
            className="bg-gray-50 dark:bg-[#1a1a1a] p-4 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
          // Show first page, last page, current page, and pages around current
          if (
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - 1 && page <= currentPage + 1)
          ) {
            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page
                    ? 'bg-[#646cff] text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                } transition-colors`}
              >
                {page}
              </button>
            )
          } else if (page === currentPage - 2 || page === currentPage + 2) {
            return <span key={page} className="px-2">...</span>
          }
          return null
        })}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Next
        </button>
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <p className="font-semibold mb-2">What you're learning:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>Pagination Logic:</strong> Calculating which items to show</li>
          <li><strong>Array.slice():</strong> Getting subset of data for current page</li>
          <li><strong>Conditional Rendering:</strong> Showing page numbers intelligently</li>
          <li><strong>State Management:</strong> Tracking current page</li>
        </ul>
      </div>
    </div>
  )
}

export default PaginationPage
