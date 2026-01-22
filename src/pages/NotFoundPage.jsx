import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-[#646cff] text-white rounded-lg hover:bg-[#535bf2] transition-colors"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFoundPage
