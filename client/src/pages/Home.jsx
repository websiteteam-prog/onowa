import VideoHero from "../components/hero/VideoHero"
import ContactCTA from "../components/cta/ContactCTA"
import ProductSection from "../components/products/ProductSection"
import BlogSection from '../components/blog/BlogSection'
import GarudaMobility from "../components/GarudaMobility"
import WhyChoose from "../components/WhyChoose"

const Home = () => {
  return (
    <div>
      <VideoHero />
      <GarudaMobility />
      <WhyChoose />
      <ContactCTA />
      <ProductSection />
      <BlogSection />
    </div>
  )
}

export default Home
