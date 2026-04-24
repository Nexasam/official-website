import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

export default function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2.5 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <span ref={ref}>
      {prefix}
      {inView ? (
        <CountUp end={value} duration={duration} separator="," />
      ) : '0'}
      {suffix}
    </span>
  )
}
