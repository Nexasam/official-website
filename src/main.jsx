import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import SiteLayout from './components/layout/SiteLayout.jsx'
import './index.css'

createInertiaApp({
  title: title => title ? `${title} | Nexasam Technologies` : 'Nexasam Technologies',
  resolve: async name => {
    const pages = import.meta.glob('./pages/**/*.jsx')
    const page = await pages[`./pages/${name}.jsx`]()
    page.default.layout ??= page => <SiteLayout>{page}</SiteLayout>
    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress: {
    color: '#0042ff',
  },
})
