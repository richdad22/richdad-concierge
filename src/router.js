export function createRouter(routes) {
  const resolve = () => {
    // Get the current hash, defaulting to root
    const hash = window.location.hash.replace(/^#\/?/, '') || ''
    const path = hash ? `/${hash}` : '/'
    return routes[path] || routes['/'] || (() => '<div>Page not found</div>')
  }

  let current = resolve()
  const subscribers = new Set()

  const notify = () => {
    current = resolve()
    subscribers.forEach((fn) => fn(current))
  }

  // Initialize with the correct route
  if (!window.location.hash) {
    window.location.hash = '/'
  }

  window.addEventListener('hashchange', notify)
  window.addEventListener('load', notify) // Handle page load

  return {
    get current() {
      return current
    },
    subscribe(fn) {
      subscribers.add(fn)
      fn(current) // Call immediately with current value
      return () => subscribers.delete(fn)
    },
  }
}
