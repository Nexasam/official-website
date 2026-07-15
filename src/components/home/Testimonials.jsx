import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { testimonials } from '../../data'
import SectionHeader from '../ui/SectionHeader'
import { easeOut, viewport } from '../../utils/animations'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const prev = () => {
    setDir(-1)
    setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setDir(1)
    setCurrent(c => (c + 1) % testimonials.length)
  }

  const goTo = (i) => {
    setDir(i > current ? 1 : -1)
    setCurrent(i)
  }

  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Client Stories"
          title={<>What Our Clients <span className="gradient-text">Say</span></>}
          subtitle="Don't take our word for it. Here's what the teams we've worked with have to say."
          center
        />

        <div className="relative">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout" custom={dir}>
              {visible.map((t, i) => (
                <motion.div
                  key={`${current}-${i}`}
                  custom={dir}
                  initial={{ opacity: 0, x: dir > 0 ? 50 : -50, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: i === 1 ? 1.03 : 1, transition: { duration: 0.4, ease: easeOut } }}
                  exit={{ opacity: 0, x: dir > 0 ? -50 : 50, scale: 0.97, transition: { duration: 0.3 } }}
                  className={`relative flex flex-col rounded-2xl p-6 border transition-colors duration-300
                    bg-white dark:bg-gray-900
                    ${i === 1
                      ? 'border-brand-300 dark:border-brand-800 shadow-xl'
                      : 'border-gray-200 dark:border-gray-800 shadow-card dark:shadow-card-dark'
                    }`}
                >
                  {/* Featured badge on center card */}
                  {i === 1 && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-bg text-white text-xs font-semibold shadow-glow whitespace-nowrap">
                      Featured
                    </span>
                  )}

                  {/* Quote icon */}
                  <Quote className="w-7 h-7 text-brand-300 dark:text-brand-800 mb-3 flex-shrink-0" />

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                    "{t.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-gray-900 dark:text-white text-sm truncate">{t.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{t.role}</div>
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
              className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700
                bg-white dark:bg-transparent flex items-center justify-center
                text-gray-600 dark:text-gray-400
                hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400
                transition-all shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => goTo(i)}
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
              className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700
                bg-white dark:bg-transparent flex items-center justify-center
                text-gray-600 dark:text-gray-400
                hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400
                transition-all shadow-sm"
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
