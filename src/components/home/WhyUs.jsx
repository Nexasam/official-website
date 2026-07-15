import { motion } from 'framer-motion'
import { Zap, Shield, Globe, Award, Clock, Users } from 'lucide-react'
import { slideLeft, slideRight, staggerContainer, cardEntrance, viewport } from '../../utils/animations'

const reasons = [
  { icon: Award, title: 'Senior-Only Teams', desc: 'Every project is staffed with senior engineers and designers. No juniors on client work.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'We have a 96% on-time delivery rate. We set realistic timelines and stick to them.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Security-first development with SOC 2 compliance, penetration testing, and secure code reviews.' },
  { icon: Globe, title: 'Global Delivery', desc: 'Distributed team across 5+ countries, providing 24/7 coverage and timezone flexibility.' },
  { icon: Zap, title: 'Agile & Transparent', desc: 'Weekly demos, real-time project tracking, and full code ownership transferred to you.' },
  { icon: Users, title: 'Long-Term Partnership', desc: '80% of our clients have been with us for 3+ years. We grow with your business.' },
]

export default function WhyUs() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <span className="section-label mb-4">Why Nexasam</span>
            <h2 className="section-title mb-6">
              The Agency That <span className="gradient-text">Delivers</span>
            </h2>
            <p className="section-subtitle mb-8">
              We are not just a vendor — we are a technology partner invested in your success. Here is what sets us apart from every other agency.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-md dark:shadow-card-dark"
            >
              {[
                { value: '96%', label: 'On-time delivery' },
                { value: '4.9★', label: 'Average rating' },
                { value: '80%', label: 'Client retention' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-6 flex-1">
                  {i > 0 && <div className="w-px h-12 bg-gray-200 dark:bg-gray-700 flex-shrink-0" />}
                  <div className="text-center flex-1">
                    <div className="font-display text-4xl font-bold gradient-text">{s.value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason) => {
              const Icon = reason.icon
              return (
                <motion.div
                  key={reason.title}
                  variants={cardEntrance}
                  className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-brand-200 dark:hover:border-brand-800 hover:shadow-md transition-all group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950 flex items-center justify-center mb-3"
                  >
                    <Icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </motion.div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{reason.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{reason.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
