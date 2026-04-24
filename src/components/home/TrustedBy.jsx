import { motion } from 'framer-motion'
import { trustedBrands } from '../../data'
import { staggerContainer, fadeIn, viewport } from '../../utils/animations'

export default function TrustedBy() {
  return (
    <section className="py-16 border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5 }}
          className="text-center text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest font-semibold mb-10"
        >
          Trusted by innovative companies worldwide
        </motion.p>

        <motion.div
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {trustedBrands.map((brand) => (
            <motion.div
              key={brand}
              variants={{
                hidden: { opacity: 0, y: 12, filter: 'blur(3px)' },
                show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.45 } },
              }}
              className="font-display font-bold text-xl
                text-gray-400 dark:text-gray-700
                hover:text-brand-500 dark:hover:text-brand-400
                transition-colors duration-200 cursor-default select-none"
            >
              {brand}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
