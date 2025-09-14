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

function render(Page) {
  app.innerHTML = `
    ${Navbar()}
    ${Page()}
    ${Footer()}
  `
}

// Initial render and subscribe to route changes
render(router.current)
router.subscribe(render)
