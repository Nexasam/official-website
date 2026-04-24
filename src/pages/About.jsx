import { motion } from 'framer-motion'
import { Twitter, Linkedin, CheckCircle2 } from 'lucide-react'
import { teamMembers, values, processSteps } from '../data'
import SectionHeader from '../components/ui/SectionHeader'
import CTABanner from '../components/home/CTABanner'
import PageHero from '../components/layout/PageHero'

export default function About() {
  return (
    <main className="pt-20">
      <PageHero
        label="About Nexasam"
        title={<>We Are a Team of <span className="gradient-text">Builders</span></>}
        subtitle="Founded in 2025, Nexasam has grown from a 3-person startup to a 50+ person global technology agency trusted by companies on every continent."
      />

      {/* Story */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label mb-4">Our Story</span>
              <h2 className="section-title mb-6">Built by Engineers, <span className="gradient-text">for Builders</span></h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>Nexasam was born out of frustration. Our founders — engineers who had worked at Google, Stripe, and Twilio — kept seeing the same problem: companies with great ideas couldn't find a technology partner they could truly trust.</p>
                <p>So in 2012, we set out to build the agency we always wished existed. One with senior-only teams, radical transparency, and a genuine obsession with quality.</p>
                <p>Today, we have delivered 250+ products across fintech, healthtech, e-commerce, and enterprise SaaS. Our clients range from seed-stage startups to Fortune 500 companies, and we are proud to say that 80% of them are still with us.</p>
              </div>
              <div className="mt-8 space-y-3">
                {['Senior-only engineering teams', 'Full code ownership transferred to you', 'Agile delivery with weekly demos', 'Post-launch support included'].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Founded', value: '2012' },
                { label: 'Team Size', value: '50+' },
                { label: 'Countries', value: '15+' },
                { label: 'Projects', value: '250+' },
              ].map((item, i) => (
                <div key={i} className="card p-6 text-center">
                  <div className="font-display text-4xl font-bold gradient-text mb-1">{item.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                label: 'Our Mission',
                title: 'Democratize World-Class Technology',
                desc: 'We believe every company — regardless of size or location — deserves access to world-class engineering talent. Our mission is to be the technology partner that helps ambitious teams build products that matter.',
                color: 'from-brand-500 to-brand-700',
              },
              {
                label: 'Our Vision',
                title: 'The Most Trusted Tech Agency on Earth',
                desc: 'We are building toward a future where Nexasam is synonymous with technical excellence and client trust. A world where the best software is built by teams who genuinely care about the outcome.',
                color: 'from-brand-400 to-brand-600',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  <span className="text-white font-bold text-lg">{item.label.charAt(4)}</span>
                </div>
                <span className="section-label mb-3">{item.label}</span>
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <SectionHeader
            label="Core Values"
            title={<>What We <span className="gradient-text">Stand For</span></>}
            subtitle="These aren't just words on a wall. They are the principles that guide every decision we make."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card card-hover p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950 flex items-center justify-center mb-4">
                  <span className="text-brand-600 dark:text-brand-400 font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="font-display font-bold text-gray-900 dark:text-white mb-2">{v.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-max">
          <SectionHeader
            label="How We Work"
            title={<>Our <span className="gradient-text">Process</span></>}
            subtitle="A proven, transparent process that delivers results every time."
            center
          />
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-200 dark:via-brand-800 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <span className="font-display font-bold text-white text-lg">{step.step}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <SectionHeader
            label="Leadership"
            title={<>Meet the <span className="gradient-text">Team</span></>}
            subtitle="The people behind Nexasam — experienced engineers, designers, and operators who have been there and done it."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card card-hover p-6 text-center group"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl group-hover:scale-105 transition-transform shadow-lg`}>
                  {member.avatar}
                </div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-sm text-brand-600 dark:text-brand-400 font-medium mb-3">{member.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{member.bio}</p>
                <div className="flex items-center justify-center gap-3">
                  <a href={member.linkedin} className="text-gray-400 hover:text-brand-500 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-brand-500 transition-colors" aria-label="Twitter">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
