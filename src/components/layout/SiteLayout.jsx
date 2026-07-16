import { useEffect } from 'react'
import { Head, usePage } from '@inertiajs/react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import { useTheme } from '../../hooks/useTheme'

export default function SiteLayout({ children }) {
  const { theme, toggleTheme } = useTheme()
  const { url, component } = usePage()
  const meta = {
    Home: {
      title: 'Software Development Company in Nigeria',
      description: 'Nexasam Technologies builds web applications, mobile apps, SaaS products, AI integrations, and digital solutions for startups and enterprises.',
    },
    About: {
      title: 'About',
      description: 'Meet Nexasam Technologies, a software development and technology consulting company based in Ibadan, Nigeria.',
    },
    Services: {
      title: 'Software Development Services',
      description: 'Explore Nexasam services including web and mobile development, UI/UX design, SaaS, e-commerce, VTU software, AI integrations, and IT consulting.',
    },
    Portfolio: {
      title: 'Portfolio',
      description: 'See software products and digital platforms delivered by Nexasam Technologies for businesses across multiple industries.',
    },
    Contact: {
      title: 'Contact',
      description: 'Tell Nexasam Technologies about your software project and get a clear path forward from our team in Ibadan, Nigeria.',
    },
    NotFound: {
      title: 'Page Not Found',
      description: 'The page you requested could not be found.',
    },
  }[component] || {}

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [url])

  return (
    <>
      <Head title={meta.title}>
        {meta.description && <meta name="description" content={meta.description} />}
        <link rel="canonical" href={`https://nexasam.com${url.split('?')[0]}`} />
      </Head>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  )
}
