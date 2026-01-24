import { useState, useMemo } from 'react'

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')

  const items = [
    { id: 1, name: 'Apple', category: 'fruit', color: 'red' },
    { id: 2, name: 'Banana', category: 'fruit', color: 'yellow' },
    { id: 3, name: 'Carrot', category: 'vegetable', color: 'orange' },
    { id: 4, name: 'Broccoli', category: 'vegetable', color: 'green' },
    { id: 5, name: 'Grapes', category: 'fruit', color: 'purple' },
    { id: 6, name: 'Tomato', category: 'vegetable', color: 'red' },
    { id: 7, name: 'Strawberry', category: 'fruit', color: 'red' },
    { id: 8, name: 'Spinach', category: 'vegetable', color: 'green' },
    { id: 9, name: 'Orange', category: 'fruit', color: 'orange' },
    { id: 10, name: 'Pepper', category: 'vegetable', color: 'red' },
  ]

  // Filter items based on search and category
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFilter = filterType === 'all' || item.category === filterType
      return matchesSearch && matchesFilter
    })
  }, [searchTerm, filterType])

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Search & Filter</h1>

      <div className="bg-gray-50 dark:bg-[#1a1a1a] p-6 rounded-lg mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Search</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search items..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#242424] focus:outline-none focus:border-[#646cff]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-2 rounded ${
                  filterType === 'all'
                    ? 'bg-[#646cff] text-white'
                    : 'bg-white dark:bg-[#242424] border border-gray-300 dark:border-gray-600'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterType('fruit')}
                className={`px-4 py-2 rounded ${
                  filterType === 'fruit'
                    ? 'bg-[#646cff] text-white'
                    : 'bg-white dark:bg-[#242424] border border-gray-300 dark:border-gray-600'
                }`}
              >
                Fruits
              </button>
              <button
                onClick={() => setFilterType('vegetable')}
                className={`px-4 py-2 rounded ${
                  filterType === 'vegetable'
                    ? 'bg-[#646cff] text-white'
                    : 'bg-white dark:bg-[#242424] border border-gray-300 dark:border-gray-600'
                }`}
              >
                Vegetables
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-400">
          Showing {filteredItems.length} of {items.length} items
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="bg-white dark:bg-[#1a1a1a] p-4 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
            <div className="space-y-1 text-sm">
              <p className="capitalize">
                <span className="text-gray-600 dark:text-gray-400">Category: </span>
                {item.category}
              </p>
              <p className="capitalize">
                <span className="text-gray-600 dark:text-gray-400">Color: </span>
                {item.color}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No items found matching your search.
        </div>
      )}

      <div className="mt-8 bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <p className="font-semibold mb-2">What you're learning:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>useMemo:</strong> Optimizes filtering - only recalculates when search/filter changes</li>
          <li><strong>Real-time search:</strong> Filters as you type</li>
          <li><strong>Multiple filters:</strong> Search + category filter working together</li>
        </ul>
      </div>
    </div>
  )
}

export default SearchPage
