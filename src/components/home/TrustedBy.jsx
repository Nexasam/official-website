import { motion } from 'framer-motion'
import { staggerContainer, viewport } from '../../utils/animations'

const clients = [
  {
    name: 'WePlug',
    url: 'https://app.weplug.me',
    logo: '/Logo_WePlug.svg',
  },
  {
    name: 'SecureWaveng',
    url: 'https://securewaveng.com',
    logo: 'https://securewaveng.com/images/securewavengwhite.png',
  },
  {
    name: 'Fadhla Exquisites',
    url: 'https://fadhlaexquisites.com',
    logo: '/cropped-logofadhltrans-300x182.webp',
  },
  {
    name: 'Zennal Finance',
    url: 'https://zennalfinance.com',
    logo: 'https://zennalfinance.com/images/zennal2.png',
  },
  {
    name: 'SparkMobility',
    url: 'https://sparkmobilityportal.net',
    logo: null,
  },
  {
    name: 'Nyamga',
    url: 'https://nyamga.com',
    logo: '/nyamga.png',
  },
]

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
          {clients.map((client) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 12, filter: 'blur(3px)' },
                show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.45 } },
              }}
              className="flex items-center group"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 w-auto object-contain
                    opacity-50 group-hover:opacity-90
                    grayscale group-hover:grayscale-0
                    transition-all duration-300
                    [mix-blend-mode:multiply] dark:[mix-blend-mode:screen]"
                />
              ) : (
                <span className="font-display font-bold text-xl text-gray-400 dark:text-gray-600 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200 select-none">
                  {client.name}
                </span>
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
