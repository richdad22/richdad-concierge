export function Navbar() {
  return `
    <header class="bg-white/70 dark:bg-gray-900/50 backdrop-blur sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <a href="#/" class="text-xl font-bold text-brand-600 dark:text-brand-400">Windsurf</a>
          <nav class="hidden sm:flex gap-6 text-sm">
            <a href="#/" class="hover:text-brand-600">Home</a>
            <a href="#/features" class="hover:text-brand-600">Features</a>
            <a href="#/about" class="hover:text-brand-600">About</a>
          </nav>
        </div>
      </div>
    </header>
  `
}
