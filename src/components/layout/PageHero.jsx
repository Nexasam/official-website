import { motion } from 'framer-motion'
import { easeOut } from '../../utils/animations'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: easeOut } },
}

export default function PageHero({ label, title, subtitle, children }) {
  return (
    <section className="section-padding relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-[0.35] dark:opacity-[0.3]" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/70 via-white/50 to-brand-50/40 dark:from-gray-950 dark:via-gray-950 dark:to-gray-950" />
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-brand-200/25 dark:bg-brand-900/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-brand-300/20 dark:bg-brand-800/20 blur-3xl pointer-events-none" />

      <div className="container-max relative z-10 text-center">
        <motion.div variants={container} initial="hidden" animate="show">

          {label && (
            <motion.span
              variants={{
                hidden: { opacity: 0, scale: 0.85, y: 8 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                bg-brand-50 dark:bg-white/10
                text-brand-700 dark:text-brand-300
                border border-brand-200 dark:border-white/20
                text-xs font-semibold uppercase tracking-widest mb-6"
            >
              {label}
            </motion.span>
          )}

          <motion.h1
            variants={item}
            className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={item}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div variants={item} className="mt-8">
              {children}
            </motion.div>
          )}

        </motion.div>
      </div>
    </section>
  )
}
