import Head from 'next/head';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import FeatureBanner from './components/FeatureBanner';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import KeyFeatures from './components/KeyFeatures';
import Navbar from './components/Navbar';
import NotificationShowcase from './components/NotificationShowcase';
// import ParticleBackground from './components/ParticleBackground';
import Testimonials from './components/Testimonials';


export default function Home() {
  return (
    <div className="min-h-screen bg-primary-bg text-white">
      <Head>
        <title>Gov AI Agent - Your DAO Governance Companion</title>
        <meta name="description" content="Your AI assistant for tracking, understanding, and acting on DAO proposals across platforms." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative overflow-hidden">
        {/* <ParticleBackground /> */}
        <Navbar />
        <main>
          <HeroSection />
          <FeatureBanner />
          <KeyFeatures />
          <HowItWorks />
          <NotificationShowcase />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}