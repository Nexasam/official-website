import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
// import Blog from './pages/Blog'
// import Careers from './pages/Careers'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { useTheme } from './hooks/useTheme'

const siteUrl = 'https://nexasam.com'
const pageMeta = {
  '/': {
    title: 'Nexasam Technologies — Software Development Company in Nigeria',
    description: 'Nexasam Technologies builds web applications, mobile apps, SaaS products, AI integrations, and digital solutions for startups and enterprises.',
  },
  '/about': {
    title: 'About Nexasam Technologies',
    description: 'Meet Nexasam Technologies, a software development and technology consulting company based in Ibadan, Nigeria.',
  },
  '/services': {
    title: 'Software Development Services | Nexasam Technologies',
    description: 'Explore Nexasam services including web and mobile development, UI/UX design, SaaS, e-commerce, VTU software, AI integrations, and IT consulting.',
  },
  '/portfolio': {
    title: 'Our Portfolio | Nexasam Technologies',
    description: 'See software products and digital platforms delivered by Nexasam Technologies for businesses across multiple industries.',
  },
  '/contact': {
    title: 'Contact Nexasam Technologies',
    description: 'Tell Nexasam Technologies about your software project and get a clear path forward from our team in Ibadan, Nigeria.',
  },
}

function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = pageMeta[pathname] || {
      title: 'Page Not Found | Nexasam Technologies',
      description: 'The page you requested could not be found.',
    }
    const canonicalPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
    const canonicalUrl = `${siteUrl}${canonicalPath}`

    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', meta.title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', meta.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
  }, [pathname])

  return null
}

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <ScrollReset />
      <SeoManager />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/careers" element={<Careers />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
