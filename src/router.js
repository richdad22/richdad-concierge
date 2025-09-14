export function createRouter(routes) {
  const resolve = () => {
    const hash = window.location.hash.replace(/^#\/?/, '') || ''
    const path = `/${hash}`
    return routes[path] || routes['/']
  }

  let current = resolve()
  const subscribers = new Set()

  const notify = () => {
    current = resolve()
    subscribers.forEach((fn) => fn(current))
  }

  window.addEventListener('hashchange', notify)

  return {
    get current() {
      return current
    },
    subscribe(fn) {
      subscribers.add(fn)
      return () => subscribers.delete(fn)
    },
  }
}
