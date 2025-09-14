export function Hero() {
  return `
    <section class="py-16 sm:py-24 bg-gradient-to-b from-brand-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Build faster with <span class="text-brand-600 dark:text-brand-400">Tailwind + Vite</span>
        </h1>
        <p class="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A minimal starter with routing, components, ESLint/Prettier, and Husky hooks.
        </p>
        <div class="mt-8 flex items-center justify-center gap-4">
          <a href="#/features" class="inline-flex items-center px-6 py-3 rounded-md bg-brand-600 text-white font-medium hover:bg-brand-700">Explore Features</a>
          <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" class="inline-flex items-center px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">Docs</a>
        </div>
      </div>
    </section>
  `
}
