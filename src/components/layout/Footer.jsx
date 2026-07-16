import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  Services: [
    { label: 'Web Development', path: '/services' },
    { label: 'Mobile Apps', path: '/services' },
    { label: 'UI/UX Design', path: '/services' },
    { label: 'VTU Softwares', path: '/services' },
    { label: 'AI Integrations', path: '/services' },
  ],
  Work: [
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Testimonials', path: '/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 transition-colors duration-300">

      {/* Newsletter — commented out until email integration is ready
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-1">
                Stay in the loop
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Get our latest insights on tech, design, and product development.
              </p>
            </div>
            <form className="flex gap-3 w-full md:w-auto" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 rounded-xl
                  bg-white dark:bg-gray-900
                  border border-gray-300 dark:border-gray-700
                  text-gray-900 dark:text-white
                  placeholder-gray-400 dark:placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent
                  text-sm transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
      */}

      {/* Main Footer */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src="/nx_fav(1).png"
                alt="Nexasam N logo"
                width={38}
                height={38}
                style={{ objectFit: 'contain' }}
              />
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl text-gray-900 dark:text-white">
                  nexasam
                </span>
                <span className="text-[10px] tracking-widest font-light text-gray-500 dark:text-gray-400">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs text-gray-500 dark:text-gray-400">
              We build world-class software products for startups and enterprises. Trusted by 250+ companies globally.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <MapPin className="w-4 h-4 text-brand-500 dark:text-brand-400 flex-shrink-0" />
                <span>24, Idi-Osan Street, Opp. Maku Afrika Hotel, Gberemu, Ibadan, Oyo State</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-500 dark:text-brand-400 flex-shrink-0" />
                <a
                  href="mailto:info@nexasam.com"
                  className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-white transition-colors"
                >
                  info@nexasam.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-500 dark:text-brand-400 flex-shrink-0" />
                <a
                  href="tel:+2348168509044"
                  className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-white transition-colors"
                >
                  08168509044
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-gray-900 dark:text-white font-semibold text-sm mb-4">{group}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Nexasam Technologies. All rights reserved.
          </p>
          <a
            href="mailto:info@nexasam.com"
            className="text-xs text-gray-400 dark:text-gray-500 hover:text-brand-600 dark:hover:text-white transition-colors"
          >
            info@nexasam.com
          </a>
        </div>
      </div>
    </footer>
  )
}
