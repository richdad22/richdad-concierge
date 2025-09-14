export function FeaturesGrid() {
  const features = [
    {
      title: 'Tailwind CSS',
      desc: 'Utility-first styling with a custom brand palette and plugins.',
    },
    {
      title: 'Vite',
      desc: 'Blazing fast dev server and optimized builds.',
    },
    {
      title: 'ESLint + Prettier',
      desc: 'Consistent code quality and formatting with pre-commit checks.',
    },
    {
      title: 'Husky + lint-staged',
      desc: 'Automated formatting and linting before every commit.',
    },
  ]

  return `
    <section class="py-12 sm:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Features</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          ${features
            .map(
              (f) => `
              <div class="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900 shadow-sm">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${f.title}</h3>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">${f.desc}</p>
              </div>
            `
            )
            .join('')}
        </div>
      </div>
    </section>
  `
}
