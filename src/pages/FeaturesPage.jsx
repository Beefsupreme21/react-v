import Card from '../components/Card'

function FeaturesPage() {
  const features = [
    {
      id: 1,
      title: 'Fast Performance',
      description: 'Lightning-fast load times and smooth interactions for the best user experience.',
      icon: '⚡',
      color: 'yellow'
    },
    {
      id: 2,
      title: 'Secure & Safe',
      description: 'Your data is protected with industry-standard security measures.',
      icon: '🔒',
      color: 'green'
    },
    {
      id: 3,
      title: 'Easy to Use',
      description: 'Intuitive interface designed for users of all skill levels.',
      icon: '✨',
      color: 'purple'
    },
    {
      id: 4,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our round-the-clock support team.',
      icon: '💬',
      color: 'blue'
    },
    {
      id: 5,
      title: 'Mobile Friendly',
      description: 'Works perfectly on all devices - desktop, tablet, and mobile.',
      icon: '📱',
      color: 'orange'
    },
    {
      id: 6,
      title: 'Regular Updates',
      description: 'We constantly improve with new features and updates.',
      icon: '🔄',
      color: 'purple'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Features</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Check out what makes our app great
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(feature => (
          <Card
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            color={feature.color}
          />
        ))}
      </div>

      <div className="mt-12 bg-gray-50 dark:bg-[#1a1a1a] p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">What you're learning:</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Reusable Components:</strong> The Card component is used 6 times with different props</li>
          <li><strong>Props:</strong> Passing data (title, description, icon, color) to components</li>
          <li><strong>Mapping:</strong> Using .map() to render a list of components</li>
          <li><strong>Component Composition:</strong> Building pages from smaller components</li>
        </ul>
      </div>
    </div>
  )
}

export default FeaturesPage
