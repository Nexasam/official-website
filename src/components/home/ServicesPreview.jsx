import { motion } from 'framer-motion'
import { Link } from '@inertiajs/react'
import { ArrowRight, Globe, Smartphone, Palette, Layers, ShoppingCart, Cloud, Brain, Briefcase } from 'lucide-react'
import { services } from '../../data'
import SectionHeader from '../ui/SectionHeader'
import { staggerContainer, cardEntrance, fadeUp, viewport } from '../../utils/animations'

const iconMap = { Globe, Smartphone, Palette, Layers, ShoppingCart, Cloud, Brain, Briefcase }

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container-max">
        <SectionHeader
          label="What We Do"
          title={<>Services Built for <span className="gradient-text">Scale</span></>}
          subtitle="From concept to deployment, we deliver end-to-end technology solutions that drive real business outcomes."
          center
        />

        <motion.div
          variants={staggerContainer(0.07, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={cardEntrance}
                className="group card card-hover p-6 cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                >
                  {Icon && <Icon className="w-6 h-6 text-white" />}
                </motion.div>
                <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-2 text-base">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400 group-hover:gap-2 transition-all duration-200"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-secondary">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
