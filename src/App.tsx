import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technology from './components/Technology';
import Upgrades from './components/Upgrades';
import Diagnostics from './components/Diagnostics';
import Timeline from './components/Timeline';
import StatsAndTestimonials from './components/StatsAndTestimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-cyber-bg text-gray-300 overflow-x-hidden scanlines noise-overlay">
      {/* Visual background overlays */}
      <div className="fixed inset-0 pointer-events-none z-50 vignette" />
      
      {/* Main Sections Assembly */}
      <Navbar />
      <Hero />
      <Technology />
      <Upgrades />
      <Timeline />
      <Diagnostics />
      <StatsAndTestimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
