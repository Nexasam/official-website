import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, Clock, User, Tag } from 'lucide-react'
import { blogPosts } from '../data'
import CTABanner from '../components/home/CTABanner'
import PageHero from '../components/layout/PageHero'

const categories = ['All', 'Engineering', 'Design', 'AI & Technology', 'DevOps', 'Case Study']

export default function Blog() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const featured = blogPosts.find(p => p.featured)
  const rest = filtered.filter(p => !p.featured || activeCategory !== 'All' || search)

  return (
    <main className="pt-20">
      <PageHero
        label="Insights & Ideas"
        title={<>The Nexasam <span className="gradient-text">Blog</span></>}
        subtitle="Deep dives on engineering, design, product, and the future of technology — written by our team."
      />

      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="input-field pl-11"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? 'gradient-bg text-white shadow-glow'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          {featured && activeCategory === 'All' && !search && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group card card-hover overflow-hidden mb-12 grid md:grid-cols-2"
            >
              <div className={`h-64 md:h-auto bg-gradient-to-br ${featured.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-8xl font-bold text-white/10 select-none">F</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="section-label">{featured.category}</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" /> {featured.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> {featured.readTime}
                  </span>
                  <span>{featured.date}</span>
                </div>
                <Link to="#" className="btn-primary self-start">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}

          {/* Articles Grid */}
          {rest.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group card card-hover overflow-hidden flex flex-col"
                >
                  <div className={`h-44 bg-gradient-to-br ${post.color} relative overflow-hidden flex-shrink-0`}>
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" /> {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <Link
                        to="#"
                        className="flex items-center gap-1 text-brand-600 dark:text-brand-400 font-semibold hover:gap-2 transition-all"
                      >
                        Read <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <Tag className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">No articles found</p>
              <p className="text-sm mt-1">Try a different search or category</p>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
