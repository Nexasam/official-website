import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { testimonials } from '../../data'
import SectionHeader from '../ui/SectionHeader'
import { easeOut } from '../../utils/animations'

const cardVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40, scale: 0.96 }),
  center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.4, ease: easeOut } },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40, scale: 0.96, transition: { duration: 0.3 } }),
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const prev = () => { setDir(-1); setCurrent(c => (c - 1 + testimonials.length) % testimonials.length) }
  const next = () => { setDir(1); setCurrent(c => (c + 1) % testimonials.length) }

  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="container-max">
        <SectionHeader
          label="Client Stories"
          title={<>What Our Clients <span className="gradient-text">Say</span></>}
          subtitle="Don't take our word for it. Here's what the teams we've worked with have to say."
          center
        />

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
            <AnimatePresence mode="popLayout" custom={dir}>
              {visible.map((t, i) => (
                <motion.div
                  key={`${current}-${i}`}
                  custom={dir}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className={`card p-6 relative flex flex-col ${
                    i === 1
                      ? 'md:scale-105 shadow-xl border-brand-300 dark:border-brand-800'
                      : ''
                  }`}
                >
                  {i === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2"
                    >
                      <span className="px-3 py-1 rounded-full gradient-bg text-white text-xs font-semibold shadow-glow">
                        Featured
                      </span>
                    </motion.div>
                  )}

                  <Quote className="w-8 h-8 text-brand-300 dark:text-brand-800 mb-4" />
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 transition-all shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }}
                  animate={{ width: i === current ? 24 : 8 }}
                  transition={{ duration: 0.3 }}
                  className={`h-2 rounded-full transition-colors duration-300 ${
                    i === current ? 'bg-brand-500' : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 transition-all shadow-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
