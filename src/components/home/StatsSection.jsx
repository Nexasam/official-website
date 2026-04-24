import { motion } from 'framer-motion'
import { stats } from '../../data'
import AnimatedCounter from '../ui/AnimatedCounter'
import { staggerContainer, viewport, easeOut } from '../../utils/animations'

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gray-900 dark:bg-gray-950 transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 via-brand-800/60 to-brand-900/80 dark:from-brand-950/50 dark:via-transparent dark:to-brand-950/30" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-brand-500/20 dark:bg-brand-600/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-brand-400/20 dark:bg-brand-700/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 32, scale: 0.92 },
                show: {
                  opacity: 1, y: 0, scale: 1,
                  transition: { duration: 0.55, ease: easeOut },
                },
              }}
              className="text-center"
            >
              <div className="flex flex-col items-center px-6 py-8 rounded-2xl bg-white/10 border border-white/15 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm">
                <div className="font-display text-5xl md:text-6xl font-bold gradient-text mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
