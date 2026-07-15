import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, Briefcase, Globe, TrendingUp, BookOpen, Heart, Coffee, Zap } from 'lucide-react'
import { openRoles, benefits } from '../data'
import SectionHeader from '../components/ui/SectionHeader'
import CTABanner from '../components/home/CTABanner'
import PageHero from '../components/layout/PageHero'

const iconMap = { Globe, TrendingUp, BookOpen, Heart, Coffee, Zap }

const levelColors = {
  Senior: 'bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400',
  'Mid-Senior': 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400',
}

export default function Careers() {
  return (
    <main className="pt-20">
      <PageHero
        label="Careers"
        title={<>Build the Future <span className="gradient-text">With Us</span></>}
        subtitle="Join a team of world-class engineers, designers, and operators building products that matter. Remote-first, globally distributed, and obsessed with craft."
      >
        <a href="#open-roles" className="btn-primary inline-flex">
          See Open Roles <ArrowRight className="w-4 h-4" />
        </a>
      </PageHero>

      {/* Culture */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label mb-4">Our Culture</span>
              <h2 className="section-title mb-6">
                A Place Where <span className="gradient-text">Great Work</span> Happens
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  At Nexasam, we believe the best work comes from people who have the freedom, trust, and tools to do their best. We are async-first, remote-friendly, and deeply committed to craft.
                </p>
                <p>
                  We do not have a ping-pong table or free snacks. What we do have is meaningful work, talented teammates, and the satisfaction of shipping products that real people use every day.
                </p>
                <p>
                  We invest heavily in our team — through learning budgets, mentorship, and a culture of continuous improvement. When you grow, we grow.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '50+', label: 'Team Members' },
                { value: '5+', label: 'Countries' },
                { value: '100%', label: 'Remote-Friendly' },
                { value: '4.8★', label: 'Glassdoor Rating' },
              ].map((item, i) => (
                <div key={i} className="card p-6 text-center">
                  <div className="font-display text-3xl font-bold gradient-text mb-1">{item.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-max">
          <SectionHeader
            label="Benefits"
            title={<>Why You'll Love <span className="gradient-text">Working Here</span></>}
            subtitle="We take care of our team so they can focus on doing their best work."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = iconMap[benefit.icon]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card card-hover p-6"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 shadow-glow">
                    {Icon && <Icon className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <SectionHeader
            label="Open Roles"
            title={<>Find Your <span className="gradient-text">Next Role</span></>}
            subtitle="We are always looking for exceptional people. If you don't see a perfect fit, send us your resume anyway."
            center
          />

          <div className="space-y-3 max-w-4xl mx-auto">
            {openRoles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group card card-hover p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{role.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" /> {role.dept}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {role.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {role.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${levelColors[role.level] || levelColors['Mid-Senior']}`}>
                    {role.level}
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-sm font-semibold hover:bg-brand-100 dark:hover:bg-brand-900 transition-colors group-hover:gap-2"
                  >
                    Apply <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-500 dark:text-gray-400 mb-4">Don't see your role? We're always open to exceptional talent.</p>
            <Link to="/contact" className="btn-secondary">
              Send Open Application <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
