import { Hero } from '../components/Hero.js'
import { FeaturesGrid } from '../components/FeaturesGrid.js'

export function HomePage() {
  return `
    <main>
      ${Hero()}
      ${FeaturesGrid()}
    </main>
  `
}
