function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">About</h1>
      <div className="space-y-4">
        <p className="text-lg">This is a simple React app!</p>
        <p>React uses components instead of pages. Each "page" is just a component that gets rendered based on state.</p>
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
          <p className="font-semibold mb-2">Key React concepts:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Components - reusable pieces of UI</li>
            <li>State - data that changes (useState)</li>
            <li>Props - passing data to components</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
