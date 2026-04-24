import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, ArrowRight } from 'lucide-react'
import { projects } from '../data'
import CTABanner from '../components/home/CTABanner'
import PageHero from '../components/layout/PageHero'

const categories = ['All', 'SaaS', 'Mobile', 'E-commerce', 'Web App', 'DevOps', 'AI']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <main className="pt-20">
      <PageHero
        label="Our Portfolio"
        title={<>Work That <span className="gradient-text">Speaks for Itself</span></>}
        subtitle="250+ projects delivered. Here are some of the products we are most proud of."
      />

      {/* Portfolio */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? 'gradient-bg text-white shadow-glow'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  className="group card card-hover overflow-hidden cursor-pointer"
                  onClick={() => setSelected(project)}
                >
                  <div className={`h-52 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-6xl font-bold text-white/10 select-none">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className={`h-48 md:h-64 bg-gradient-to-br ${selected.color} relative flex-shrink-0`}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-8xl font-bold text-white/10">{selected.title.charAt(0)}</span>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold">
                    {selected.category}
                  </span>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selected.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">{selected.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg">{selected.description}</p>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Results</h4>
                <div className="flex flex-wrap gap-3 mb-8">
                  {selected.results.map(r => (
                    <div key={r} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
                      ✓ {r}
                    </div>
                  ))}
                </div>
                <a href="#" className="btn-primary">
                  View Case Study <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CTABanner />
    </main>
  )
}
