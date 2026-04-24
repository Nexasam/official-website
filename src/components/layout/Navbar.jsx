import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { navLinks } from '../../data'
import clsx from 'clsx'

function NexasamLogo({ size = 36, solid = false }) {
  return (
    <img
      src="/nx_fav(1).png"
      alt="Nexasam N logo"
      width={size}
      height={size}
      style={{
        objectFit: 'contain',
        mixBlendMode: solid ? 'normal' : 'screen',
      }}
    />
  )
}

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isHeroPage = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const showSolid = scrolled || !isHeroPage
  // When transparent on hero: light mode = dark text
  const transparentLight = !showSolid && theme === 'light'

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          showSolid
            ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="group-hover:scale-105 transition-transform">
                <NexasamLogo size={38} solid={showSolid} />
              </div>
              <div className="flex flex-col leading-none">
                <span className={clsx(
                  'font-display font-bold text-xl tracking-tight transition-colors',
                  showSolid
                    ? 'text-gray-900 dark:text-white'
                    : transparentLight ? 'text-gray-900' : 'text-white'
                )}>
                  nexasam
                </span>
                <span className={clsx(
                  'text-[10px] tracking-widest font-light transition-colors',
                  showSolid
                    ? 'text-gray-500 dark:text-gray-400'
                    : transparentLight ? 'text-gray-600' : 'text-gray-300'
                )}>
                  Technologies
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={clsx(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    location.pathname === link.path
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950'
                      : showSolid
                        ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                        : transparentLight
                          ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/60'
                          : 'text-gray-200 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className={clsx(
                  'p-2 rounded-lg transition-all',
                  showSolid
                    ? 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                )}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
              </button>

              <Link
                to="/contact"
                className="hidden md:inline-flex btn-primary text-sm"
              >
                Get Started
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={clsx(
                  'md:hidden p-2 rounded-lg transition-all',
                  showSolid
                    ? 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-gray-200 hover:bg-white/10'
                )}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-white dark:bg-gray-950 shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                <Link to="/" className="flex items-center gap-2">
                  <NexasamLogo size={32} solid={true} />
                  <div className="flex flex-col leading-none">
                    <span className="font-display font-bold text-lg text-gray-900 dark:text-white">
                      nexasam
                    </span>
                    <span className="text-[9px] tracking-widest font-light text-gray-500 dark:text-gray-400">
                      Technologies
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={clsx(
                        'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all',
                        location.pathname === link.path
                          ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t border-gray-100 dark:border-gray-800">
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
