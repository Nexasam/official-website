import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function Button({ children, variant = 'primary', size = 'md', className, as: Tag = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950'

  const variants = {
    primary: 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 hover:-translate-y-0.5',
    ghost: 'text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950',
    gradient: 'gradient-bg text-white shadow-lg hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0',
    outline: 'border-2 border-brand-500 text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950 hover:-translate-y-0.5',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  }

  return (
    <Tag
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
