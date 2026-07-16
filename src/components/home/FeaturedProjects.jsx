import { motion } from 'framer-motion'
import { Link } from '@inertiajs/react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '../../data'
import SectionHeader from '../ui/SectionHeader'
import { staggerContainer, cardEntrance, fadeUp, viewport } from '../../utils/animations'

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="section-padding bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container-max">
        <SectionHeader
          label="Our Work"
          title={<>Projects That <span className="gradient-text">Define Excellence</span></>}
          subtitle="A selection of our most impactful work — from fintech platforms to AI-powered applications."
          center
        />

        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {featured.map((project) => (
            <motion.div
              key={project.id}
              variants={cardEntrance}
              className="group card card-hover overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-4xl font-bold text-white/20 select-none">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/30 flex items-center justify-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.results.map(r => (
                    <span key={r} className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      ✓ {r}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mt-12"
        >
          <Link href="/portfolio" className="btn-secondary">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
