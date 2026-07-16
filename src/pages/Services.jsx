import { motion } from 'framer-motion'
import { Link } from '@inertiajs/react'
import { ArrowRight, Globe, Smartphone, Palette, Layers, ShoppingCart, Zap, Brain, Briefcase, CheckCircle2 } from 'lucide-react'
import { services } from '../data'
import CTABanner from '../components/home/CTABanner'
import PageHero from '../components/layout/PageHero'

const iconMap = { Globe, Smartphone, Palette, Layers, ShoppingCart, Zap, Brain, Briefcase }

// Relevant Unsplash images per service id
const serviceImages = {
  'web-dev':    'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
  'mobile':     'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  'uiux':       'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80',
  'saas':       'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  'ecommerce':  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  'vtu':        'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80',
  'ai':         'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  'consulting': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
}

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
              const img = serviceImages[service.id]
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
                    <Link href="/contact" className="btn-primary">
                      Discuss Your Project <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className="rounded-3xl overflow-hidden h-80 relative shadow-xl border border-gray-100 dark:border-gray-800"
                    >
                      <img
                        src={img}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* Gradient overlay with service name */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-30`} />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${service.color} shadow-lg`}>
                          {Icon && <Icon className="w-4 h-4 text-white" />}
                          <span className="text-white text-sm font-semibold">{service.title}</span>
                        </div>
                      </div>
                    </motion.div>
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
