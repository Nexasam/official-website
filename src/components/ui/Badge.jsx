import clsx from 'clsx'

export default function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 border border-brand-100 dark:border-brand-900',
    success: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900',
    warning: 'bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900',
    info: 'bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900',
    purple: 'bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 border border-brand-100 dark:border-brand-900',
  }

  return (
    <span className={clsx(
      'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}
