import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react'
import PageHero from '../components/layout/PageHero'

// ─── Web3Forms config ─────────────────────────────────────────────────────────
// 1. Go to https://web3forms.com
// 2. Enter your email (info@nexasam.com) and click "Create Access Key"
// 3. Check your inbox, copy the access key and paste it below
const WEB3FORMS_ACCESS_KEY = '119d7d50-8306-4cb0-bb61-1ddd2efa04cb'
// ─────────────────────────────────────────────────────────────────────────────

const services = [
  'Web Development', 'Mobile App', 'UI/UX Design', 'SaaS Development',
  'E-commerce', 'VTU Softwares', 'AI Integration', 'IT Consulting',
]

const budgets = ['$100 – $1k', '$1k – $5k', '$5k – $10k', '$10k – $25k', '$25k – $50k', '$50k – $100k', '$100k+']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sendError, setSendError] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    setSendError(false)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Project Inquiry from ${data.firstName} ${data.lastName}`,
          from_name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          company: data.company || 'N/A',
          service: data.service,
          budget: data.budget || 'Not specified',
          message: data.message,
        }),
      })
      const result = await res.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        setSendError(true)
      }
    } catch (err) {
      console.error('Web3Forms error:', err)
      setSendError(true)
    }
  }

  return (
    <main className="pt-20">
      <PageHero
        label="Get In Touch"
        title={<>Let's Build Something <span className="gradient-text">Great</span></>}
        subtitle="Tell us about your project. We'll get back to you within 24 hours with honest advice and a clear path forward."
      />

      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">Contact Information</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Reach us through any of these channels.</p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'info@nexasam.com', href: 'mailto:info@nexasam.com' },
                  { icon: Phone, label: 'Phone', value: '08168509044', href: 'tel:+2348168509044' },
                  { icon: MapPin, label: 'Office', value: '24, Idi-Osan Street, Opp. Maku Afrika Hotel, Gberemu, Ibadan, Oyo State', href: 'https://maps.google.com/?q=Idi-Osan+Street,+Gberemu,+Ibadan,+Oyo+State,+Nigeria' },
                  { icon: Clock, label: 'Hours', value: 'Mon–Fri, 9am–5pm WAT', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm text-gray-700 dark:text-gray-300">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
                <iframe
                  title="Nexasam Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0!2d3.8960!3d7.3775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d08b7c00001%3A0x1!2sIdi-Osan+Street%2C+Gberemu%2C+Ibadan%2C+Oyo+State%2C+Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://maps.google.com/?q=Idi-Osan+Street,+Gberemu,+Ibadan,+Oyo+State,+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 text-sm text-brand-600 dark:text-brand-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">24, Idi-Osan Street, Gberemu, Ibadan</span>
                  <span className="ml-auto text-xs text-gray-400 flex-shrink-0">Open in Maps →</span>
                </a>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                    Thanks for reaching out. We'll review your project and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <div className="card p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-gray-900 dark:text-white">Tell Us About Your Project</h2>
                      <p className="text-xs text-gray-400">We respond within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register('firstName', { required: 'Required' })}
                          placeholder="John"
                          className={`input-field ${errors.firstName ? 'border-red-400 focus:ring-red-400' : ''}`}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register('lastName', { required: 'Required' })}
                          placeholder="Doe"
                          className={`input-field ${errors.lastName ? 'border-red-400 focus:ring-red-400' : ''}`}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register('email', {
                            required: 'Required',
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                          })}
                          type="email"
                          placeholder="john@company.com"
                          className={`input-field ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Company</label>
                        <input
                          {...register('company')}
                          placeholder="Acme Inc."
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register('service', { required: 'Please select a service' })}
                        className={`input-field bg-white dark:bg-gray-900 ${errors.service ? 'border-red-400 focus:ring-red-400' : ''}`}
                      >
                        <option value="" className="bg-white dark:bg-gray-900">Select a service...</option>
                        {services.map(s => <option key={s} value={s} className="bg-white dark:bg-gray-900">{s}</option>)}
                      </select>
                      {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Budget Range</label>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map(b => (
                          <label key={b} className="cursor-pointer">
                            <input type="radio" {...register('budget')} value={b} className="sr-only peer" />
                            <span className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 peer-checked:border-brand-500 peer-checked:text-brand-600 dark:peer-checked:text-brand-400 peer-checked:bg-brand-50 dark:peer-checked:bg-brand-950 transition-all cursor-pointer hover:border-brand-300">
                              {b}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        {...register('message', { required: 'Please describe your project', minLength: { value: 20, message: 'At least 20 characters' } })}
                        rows={5}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        className={`input-field resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : ''}`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    {sendError && (
                      <p className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl px-4 py-3">
                        Something went wrong. Please try again or email us directly at{' '}
                        <a href="mailto:info@nexasam.com" className="underline">info@nexasam.com</a>.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
