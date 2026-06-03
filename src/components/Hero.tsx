import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ParticleNetwork } from './ParticleNetwork';
import { GlitchText } from './GlitchText';
import { CyberCore3D } from './CyberCore3D';
import { HolographicPanel } from './HolographicPanel';

export const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const element = document.getElementById('technology');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dynamic Backgrounds */}
      <ParticleNetwork />
      
      {/* Decorative Grid overlays */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none z-0" />
      <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-bg/0 via-cyber-bg/40 to-cyber-bg z-0 pointer-events-none" />
      
      {/* Radial vignette mask */}
      <div className="absolute inset-0 vignette pointer-events-none z-0" />
      
      {/* Top micro hud accent */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-4 text-[9px] font-mono text-cyber-cyan/50 tracking-[0.25em] z-10">
        <span>[ SYSTEM_INIT_SUCCESS ]</span>
        <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-ping" />
        <span>[ LOCATION: SECTOR_7 ]</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start select-none">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2 border border-cyber-cyan/30 px-3 py-1 rounded bg-cyber-cyan/5 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-6"
            >
              <span className="w-2 h-2 bg-cyber-cyan animate-pulse-fast rounded-full" />
              COGNITIVE EVOLUTION IN PROGRESS
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-orbitron tracking-tight leading-none">
                <GlitchText text="HUMANITY" className="block mb-2" glow="cyan" />
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-purple text-glow-purple">
                  2.0
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-400 font-sans font-light text-base sm:text-lg md:text-xl max-w-xl mb-8 leading-relaxed text-center lg:text-left"
            >
              Enhancing Human Potential Through Cybernetic Intelligence. Connect your synapses directly to the quantum computing cloud.
            </motion.p>

            {/* Call to action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              {/* Primary button */}
              <button
                onClick={scrollToNextSection}
                className="relative group px-8 py-3.5 bg-cyber-cyan/15 hover:bg-cyber-cyan/35 border border-cyber-cyan font-rajdhani font-black text-lg uppercase tracking-wider text-cyber-cyan rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.1)] hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] overflow-hidden"
              >
                {/* Slanted background slide hover effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyber-cyan via-cyber-cyan to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10 opacity-20" />
                Explore Technology
              </button>

              {/* Secondary button */}
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative group px-8 py-3.5 bg-cyber-purple/10 hover:bg-cyber-purple/20 border border-cyber-purple/40 hover:border-cyber-purple font-rajdhani font-black text-lg uppercase tracking-wider text-white rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(189,0,255,0.05)] hover:shadow-[0_0_25px_rgba(189,0,255,0.3)]"
              >
                Join The Future
              </button>
            </motion.div>
          </div>

          {/* Interactive 3D graphics & floating readouts Block */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[400px]">
            {/* 3D Core */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full relative z-10"
            >
              <CyberCore3D />
            </motion.div>

            {/* Float HUD Overlays (Desktop Only) */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              {/* Panel 1 */}
              <HolographicPanel
                title="Neural Link"
                value="SYNCING // 98.4%"
                status="syncing"
                details="STABLE_BANDWIDTH_CONNECTED"
                delay={1.0}
                className="absolute top-4 left-0 -translate-x-1/4 scale-95"
              />

              {/* Panel 2 */}
              <HolographicPanel
                title="Cortex Core"
                value="4.2 TFLOP/S"
                status="nominal"
                details="LOAD_PERCENTAGE_22.4"
                delay={1.2}
                className="absolute bottom-16 right-0 translate-x-1/4 scale-95"
              />

              {/* Panel 3 */}
              <HolographicPanel
                title="Bio Integrity"
                value="100.0% SECURE"
                status="nominal"
                details="NO_VIRUSES_DETECTED"
                delay={1.4}
                className="absolute bottom-0 left-8 -translate-x-1/4 scale-90"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Down arrow indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse', delay: 1.5 }}
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-10 group"
      >
        <span className="text-[10px] font-mono tracking-widest text-cyber-cyan/50 group-hover:text-cyber-cyan transition-colors">
          SCROLL_DOWN
        </span>
        <ChevronDown className="h-5 w-5 text-cyber-cyan/50 group-hover:text-cyber-cyan transition-colors" />
      </motion.div>
    </section>
  );
};
export default Hero;
