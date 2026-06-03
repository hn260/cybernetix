import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, RefreshCw, X } from 'lucide-react';

export const CTA: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [installStep, setInstallStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const installLogs = [
    "&gt; ESTABLISHING SYNAPTIC LINK TO CYBERNETIX NODE_09...",
    "&gt; SECURE ENCRYPTED CHANNEL SET: QUANTUM_AES_512",
    "&gt; CHECKING BIOMETRIC INTEGRITY... NOMINAL",
    "&gt; INJECTING STAGE_1 NEURAL NANITE MATRIX...",
    "&gt; NANITE CLUSTER DEPLOYED. COUNT: 4,500,000",
    "&gt; OVERCLOCKING CORTEX CLOCK RATE TO 8.4GHz...",
    "&gt; CORTEX SYNAPSE LATENCY DECREASED TO 0.12ms",
    "&gt; INTEGRATING EXOSKELETON ACTUATORS... CALIBRATED",
    "&gt; UPLOADING KNOWLEDGE CORPUS (ENCYCLOPEDIA_V4)... DONE",
    "&gt; FINALIZING SYNAPSE CALIBRATION PROTOCOLS...",
    "&gt; SWEEPING SYSTEM BUFFER... CLEAR",
    "&gt; CALIBRATION COMPLETION STATUS: 100%",
    "&gt; WELCOME TO HUMANITY 2.0 // COGNITIVE_UPGRADE_STABLE"
  ];

  useEffect(() => {
    if (!showModal) {
      setInstallStep(0);
      setProgress(0);
      return;
    }

    // Incremental progress counter
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    // Incremental log lines based on progress
    const logInterval = setInterval(() => {
      setInstallStep(prev => {
        if (prev < installLogs.length - 1) {
          return prev + 1;
        }
        clearInterval(logInterval);
        return prev;
      });
    }, 300);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, [showModal]);

  return (
    <section className="relative py-28 bg-cyber-bg overflow-hidden border-b border-cyber-cyan/10">
      {/* Cinematic grid & radial glow background */}
      <div className="absolute inset-0 cyber-grid opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-cyber-cyan/15 rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-cyber-purple/10 rounded-full pointer-events-none animate-[ping_8s_infinite]" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 select-none">
        
        {/* Futuristic layout brackets */}
        <div className="border-t border-l border-cyber-cyan/40 w-12 h-12 absolute -top-8 -left-4 hidden md:block" />
        <div className="border-t border-r border-cyber-cyan/40 w-12 h-12 absolute -top-8 -right-4 hidden md:block" />
        <div className="border-b border-l border-cyber-cyan/40 w-12 h-12 absolute -bottom-8 -left-4 hidden md:block" />
        <div className="border-b border-r border-cyber-cyan/40 w-12 h-12 absolute -bottom-8 -right-4 hidden md:block" />

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-cyber-cyan tracking-[0.4em] uppercase"
        >
          // EVOLVE_NOW_PROTOCOLS
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black font-orbitron tracking-wider text-white uppercase text-glow-cyan"
        >
          Become More Than Human
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-gray-400 font-sans font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          The next stage of evolution starts today. Connect your mind, optimize your bio-metrics, and unlock the peak potentials of the cybernetic age.
        </motion.p>

        {/* Dynamic Glowing Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <button
            onClick={() => setShowModal(true)}
            className="relative group px-10 py-5 bg-gradient-to-r from-cyber-cyan to-cyber-purple font-orbitron font-black text-xl uppercase tracking-widest text-white clip-corner rounded transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_35px_rgba(189,0,255,0.8)]"
          >
            Initiate Upgrade
          </button>
        </motion.div>

        {/* Small security assurance */}
        <div className="mt-6 text-[10px] font-mono text-gray-500 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Shield className="h-3.5 w-3.5 text-cyber-emerald" />
          SECURE DIRECT CONNECTION // ENCRYPT_AES_512
        </div>
      </div>

      {/* Interactive Mock Upgrade Progress Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel w-full max-w-2xl p-6 sm:p-8 clip-corner border border-cyber-cyan shadow-[0_0_30px_rgba(0,243,255,0.2)] bg-cyber-dark relative flex flex-col gap-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-cyber-cyan transition-colors focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Modal Header */}
              <div className="border-b border-cyber-cyan/20 pb-3">
                <span className="text-[10px] font-mono text-cyber-cyan tracking-widest uppercase flex items-center gap-2">
                  <Terminal className="h-4 w-4" />
                  CYBERNETIX NEURAL INSTALLATION TERMINAL
                </span>
                <h3 className="font-orbitron font-bold text-lg text-white mt-1 uppercase">
                  Subject Sync Sequence
                </h3>
              </div>

              {/* Console log display */}
              <div className="h-64 bg-black border border-cyber-cyan/15 rounded p-4 overflow-y-auto font-mono text-[10px] sm:text-xs text-cyan-300 flex flex-col gap-2 leading-relaxed">
                {installLogs.slice(0, installStep + 1).map((log, logIdx) => (
                  <div key={logIdx} dangerouslySetInnerHTML={{ __html: log }} />
                ))}
              </div>

              {/* Loading progress bar indicator */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs text-gray-500">
                  <span className="flex items-center gap-2">
                    <RefreshCw className={`h-3.5 w-3.5 text-cyber-cyan ${progress < 100 ? 'animate-spin' : ''}`} />
                    {progress < 100 ? 'INSTALLING COMPONENT MATRIX...' : 'INSTALLATION COMPLETE'}
                  </span>
                  <span className="text-white font-bold">{progress}%</span>
                </div>
                
                <div className="w-full h-4 bg-black border border-cyber-cyan/20 rounded p-[2px] overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-emerald rounded shadow-[0_0_8px_rgba(0,243,255,0.6)] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Success dismiss state */}
              {progress === 100 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col sm:flex-row items-center justify-between bg-cyber-emerald/5 border border-cyber-emerald/20 p-4 rounded gap-4"
                >
                  <span className="text-xs font-mono text-cyber-emerald uppercase tracking-widest text-center sm:text-left">
                    // USER COMPATIBILITY VERIFIED. WELCOME TO THE FUTURE.
                  </span>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 bg-cyber-emerald text-black font-rajdhani font-black text-sm uppercase tracking-wider rounded hover:bg-cyber-emerald/80 transition-colors"
                  >
                    ENTER SYNCED WEB
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default CTA;
