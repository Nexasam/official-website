// Shared animation variants used across the site

export const ease = [0.25, 0.1, 0.25, 1] // smooth cubic-bezier
export const easeOut = [0, 0, 0.2, 1]
export const spring = { type: 'spring', stiffness: 300, damping: 30 }
export const springGentle = { type: 'spring', stiffness: 180, damping: 24 }

// Fade up — standard section entrance
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

// Fade in — no movement
export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: ease } },
}

// Slide in from left
export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: easeOut } },
}

// Slide in from right
export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: easeOut } },
}

// Scale up with fade
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut } },
}

// Container that staggers children
export const staggerContainer = (stagger = 0.08, delayChildren = 0.1) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
})

// Card entrance — subtle lift + fade
export const cardEntrance = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
}

// Label pop — for section labels
export const labelPop = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
}

// Viewport settings — trigger once, 15% visible
export const viewport = { once: true, margin: '-60px' }
