import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen pt-20 flex items-center bg-white dark:bg-gray-950">
      <section className="section-padding w-full">
        <div className="container-max text-center">
          <p className="text-brand-600 dark:text-brand-400 font-display font-bold text-7xl sm:text-8xl mb-4">
            404
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Page not found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-8">
            The page may have moved or the address may be incorrect. Let&apos;s get you back to the website.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/" className="btn-primary">
              <Home className="w-4 h-4" /> Go to homepage
            </Link>
            <Link to="/contact" className="btn-secondary">
              <ArrowLeft className="w-4 h-4" /> Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
