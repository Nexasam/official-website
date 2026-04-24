import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Star, ChevronDown } from 'lucide-react'
import { easeOut } from '../../utils/animations'

const heroVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.65, ease: easeOut } },
}

const statItem = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: easeOut } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-[0.4] dark:opacity-[0.35]" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/80 via-white/60 to-brand-50/40 dark:from-gray-950 dark:via-gray-950/95 dark:to-gray-950" />

      {/* Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl pointer-events-none bg-brand-200/20 dark:bg-brand-900/20" />
      <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 rounded-full blur-3xl pointer-events-none bg-brand-300/15 dark:bg-brand-800/15" />
      <div className="absolute bottom-0 left-1/3 w-56 h-56 md:w-72 md:h-72 rounded-full blur-3xl pointer-events-none bg-brand-200/15 dark:bg-brand-900/10" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div variants={heroVariants} initial="hidden" animate="show">

            {/* Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-brand-50 border border-brand-200 text-gray-700
              dark:bg-white/5 dark:border-white/10 dark:text-gray-300
              text-sm mb-8 backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              Trusted by 250+ companies worldwide
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 dark:text-amber-400 dark:fill-amber-400" />
              <span className="text-amber-600 dark:text-amber-400 font-semibold">4.9/5</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold
                text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-6"
            >
              We Build{' '}
              <span className="relative inline-block">
                <span className="gradient-text">Software</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 gradient-bg rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.9, ease: easeOut }}
                />
              </span>
              <br />
              That Scales
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Premium technology agency delivering world-class web apps, mobile products, and AI-powered solutions for startups and enterprises.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-semibold text-base shadow-glow active:scale-95 transition-all duration-200"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                  bg-gray-100 border border-gray-200 text-gray-800 font-semibold text-base
                  dark:bg-white/5 dark:border-white/10 dark:text-white
                  hover:bg-gray-200 dark:hover:bg-white/10 active:scale-95
                  transition-all duration-200"
              >
                <Play className="w-4 h-4 text-brand-500 dark:text-brand-400" />
                View Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0 } } }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {[
                { value: '250+', label: 'Projects Delivered' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '12+', label: 'Years Experience' },
                { value: '50+', label: 'Expert Engineers' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={statItem}
                  className="text-center px-4 py-4 rounded-2xl
                    bg-white/80 border border-gray-200 shadow-sm
                    dark:bg-white/5 dark:border-white/10
                    backdrop-blur-sm"
                >
                  <div className="font-display text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5, duration: 0.5 }, y: { duration: 2, repeat: Infinity, delay: 1.5 } }}
      >
        <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-600" />
      </motion.div>
    </section>
  )
}
