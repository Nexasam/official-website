import { motion } from 'framer-motion'
import clsx from 'clsx'
import { staggerContainer, labelPop, fadeUp, fadeIn, viewport } from '../../utils/animations'

export default function SectionHeader({ label, title, subtitle, center = false, light = false }) {
  return (
    <motion.div
      variants={staggerContainer(0.12, 0)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={clsx('mb-16', center && 'text-center flex flex-col items-center')}
    >
      {label && (
        <motion.span
          variants={labelPop}
          className={clsx('section-label mb-4', light && 'bg-white/10 text-white border-white/20')}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={clsx('section-title mb-4', light && 'text-white')}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeIn}
          className={clsx('section-subtitle', light && 'text-white/70', center && 'text-center')}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
