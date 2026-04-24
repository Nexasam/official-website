import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrollTop } from '../../hooks/useScrollTop'

export default function ScrollToTop() {
  const { show, scrollToTop } = useScrollTop()

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl gradient-bg text-white shadow-glow flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
