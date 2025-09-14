export function Footer() {
  const year = new Date().getFullYear()
  return `
    <footer class="border-t border-gray-200 dark:border-gray-800 py-8 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 dark:text-gray-300 flex items-center justify-between">
        <p>© ${year} Windsurf. All rights reserved.</p>
        <div class="flex gap-4">
          <a href="https://vite.dev" target="_blank" class="hover:text-brand-600">Vite</a>
          <a href="https://tailwindcss.com" target="_blank" class="hover:text-brand-600">Tailwind</a>
        </div>
      </div>
    </footer>
  `
}
