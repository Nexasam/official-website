import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={clsx(
      'border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-200',
      isOpen && 'border-brand-200 dark:border-brand-800 shadow-sm'
    )}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 dark:text-white pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-brand-500" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed bg-white dark:bg-gray-900">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          question={item.q}
          answer={item.a}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
