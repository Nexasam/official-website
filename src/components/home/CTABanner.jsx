import { motion } from 'framer-motion'
import { Link } from '@inertiajs/react'
import { ArrowRight, Calendar } from 'lucide-react'
import { staggerContainer, fadeUp, easeOut, viewport } from '../../utils/animations'

export default function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.65, ease: easeOut }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 gradient-bg" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-300/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <motion.div
            variants={staggerContainer(0.12, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative z-10 px-8 py-16 md:py-20 text-center"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: easeOut } },
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest mb-6"
            >
              Ready to build something great?
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Let's Turn Your Vision<br />Into Reality
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/70 text-lg max-w-xl mx-auto mb-10"
            >
              Book a free 30-minute strategy call with our team. No sales pitch — just honest advice on how to build your product right.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-brand-700 font-bold text-base hover:bg-gray-50 active:scale-95 transition-all shadow-xl"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-base hover:bg-white/20 active:scale-95 transition-all backdrop-blur-sm"
              >
                <Calendar className="w-5 h-5" /> Book a Free Call
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
