function Card({ title, description, icon, color = 'blue' }) {
  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700',
    green: 'bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700',
    purple: 'bg-purple-100 dark:bg-purple-900 border-purple-300 dark:border-purple-700',
    orange: 'bg-orange-100 dark:bg-orange-900 border-orange-300 dark:border-orange-700',
    yellow: 'bg-yellow-100 dark:bg-yellow-900 border-yellow-300 dark:border-yellow-700',
  }

  return (
    <div className={`p-6 rounded-lg border-2 ${colorClasses[color]} transition-transform hover:scale-105`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

export default Card
