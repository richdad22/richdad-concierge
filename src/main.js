import './style.css'
import './tailwind.css'
import { Navbar } from './components/Navbar.js'
import { Footer } from './components/Footer.js'
import { createRouter } from './router.js'
import { HomePage } from './pages/Home.js'
import { FeaturesPage } from './pages/Features.js'
import { AboutPage } from './pages/About.js'

const routes = {
  '/': HomePage,
  '/features': FeaturesPage,
  '/about': AboutPage,
}

const router = createRouter(routes)
const app = document.querySelector('#app')

// Ensure the app element exists
if (!app) {
  console.error('Could not find #app element')
  document.body.innerHTML = '<div style="color: red; padding: 20px; font-family: sans-serif;">Error: Could not find #app element</div>'
  throw new Error('Could not find #app element')
}

function render(Page) {
  try {
    app.innerHTML = `
    ${Navbar()}
    ${Page()}
    ${Footer()}
  `
  } catch (error) {
    console.error('Error rendering page:', error)
    app.innerHTML = `
      <div style="color: red; padding: 20px; font-family: sans-serif;">
        Error rendering page: ${error.message}
      </div>
    `
  }
}

// Initial render and subscribe to route changes
render(router.current)
router.subscribe(render)
