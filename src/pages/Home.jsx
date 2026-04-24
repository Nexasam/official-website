import Hero from '../components/home/Hero'
import TrustedBy from '../components/home/TrustedBy'
import ServicesPreview from '../components/home/ServicesPreview'
import WhyUs from '../components/home/WhyUs'
import FeaturedProjects from '../components/home/FeaturedProjects'
import StatsSection from '../components/home/StatsSection'
import Testimonials from '../components/home/Testimonials'
import CTABanner from '../components/home/CTABanner'
import { faqItems } from '../data'
import Accordion from '../components/ui/Accordion'
import SectionHeader from '../components/ui/SectionHeader'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <ServicesPreview />
      <WhyUs />
      <FeaturedProjects />
      <StatsSection />
      <Testimonials />

      {/* FAQ */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <SectionHeader
              label="FAQ"
              title={<>Frequently Asked <span className="gradient-text">Questions</span></>}
              subtitle="Everything you need to know about working with us. Can't find the answer? Reach out directly."
            />
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
