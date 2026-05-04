import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import { CinematicHero } from './components/ui/cinematic-landing-hero';
import Curriculum from './sections/Curriculum';
import CinematicVision from './sections/CinematicVision';
import AlumniArchives from './sections/AlumniArchives';
import Footer from './sections/Footer';
import CapabilityDetail from './sections/CapabilityDetail';

function HomePage() {
  return (
    <div
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Navigation />

      <main>
        <CinematicHero
          brandName="Bhargavi"
          tagline1="Risk Analyst."
          tagline2="Fraud Fighter."
          cardHeading="Financial Crime Prevention"
          cardDescription={
            <>
              <span className="text-white font-semibold">Bhargavi Nimmagadda</span> is a results-driven Risk & Fraud Analyst with 3+ years of experience in transaction monitoring, fraud detection, KYC/AML compliance, and data analytics across U.S. fintech and global banking environments.
            </>
          }
          metricValue={10000}
          metricLabel="Txns Monitored Weekly"
          ctaHeading="Let's connect."
          ctaDescription="Open to opportunities in risk analysis, fraud prevention, AML compliance, and financial crime investigation. Based in Newark, DE — open to relocation."
        />
        <Curriculum />
        <CinematicVision />
        <AlumniArchives />
        <Footer />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/capability/:slug" element={<CapabilityDetail />} />
    </Routes>
  );
}
