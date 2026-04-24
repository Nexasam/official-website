import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Smartphone, Palette, Layers, ShoppingCart, Cloud, Brain, Briefcase, CheckCircle2 } from 'lucide-react'
import { services } from '../data'
import CTABanner from '../components/home/CTABanner'
import PageHero from '../components/layout/PageHero'

const iconMap = { Globe, Smartphone, Palette, Layers, ShoppingCart, Cloud, Brain, Briefcase }

export default function Services() {
  return (
    <main className="pt-20">
      <PageHero
        label="Our Services"
        title={<>Everything You Need to <span className="gradient-text">Build & Scale</span></>}
        subtitle="From initial concept to global scale, we offer the full spectrum of technology services your business needs to succeed."
      />

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <div className="space-y-24">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon]
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                >
                  {/* Content */}
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                      {Icon && <Icon className="w-7 h-7 text-white" />}
                    </div>
                    <span className="section-label mb-4">Service {String(i + 1).padStart(2, '0')}</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map(f => (
                        <div key={f} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" className="btn-primary">
                      Discuss Your Project <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className={`rounded-3xl p-8 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 h-72 flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-dots opacity-30 dark:opacity-50" />
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl`}
                      >
                        {Icon && <Icon className="w-16 h-16 text-white" />}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
