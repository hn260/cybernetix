import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Eye, Hammer, HeartPulse } from 'lucide-react';

export const Upgrades: React.FC = () => {
  const upgrades = [
    {
      title: "Neural Accelerator",
      subtitle: "Synaptic overclocking module",
      Icon: Zap,
      color: "cyan",
      progress: 92,
      status: "STABLE",
      stats: [
        { label: "CORTEX CLOCK SPEED", value: "8.4 GHz" },
        { label: "MEMORY BANDWIDTH", value: "1.2 PB/s" },
        { label: "OVERCLOCK TEMP", value: "38.5°C" }
      ],
      desc: "Accelerates synaptic transmission by bypassing biological chemical channels with custom quantum node bridges."
    },
    {
      title: "Enhanced Vision",
      subtitle: "Full-spectrum digital optics",
      Icon: Eye,
      color: "purple",
      progress: 100,
      status: "OPTIMIZED",
      stats: [
        { label: "REFRESH RATIO", value: "360 Hz" },
        { label: "SPECTRUM SCAN", value: "X-RAY / UV" },
        { label: "TARGETING RANGE", value: "2,500m" }
      ],
      desc: "Upgrades the biological eye with a graphene optic lens capable of rendering real-time augmented HUD graphics."
    },
    {
      title: "Smart Limb System",
      subtitle: "Myoelectric graphene prosthetics",
      Icon: Hammer,
      color: "emerald",
      progress: 85,
      status: "CALIBRATING",
      stats: [
        { label: "MYO-FIBER LOAD", value: "850 kg" },
        { label: "JOINT STABILIZATION", value: "99.4%" },
        { label: "LATENCY INPUT", value: "1.2ms" }
      ],
      desc: "Replaces limb joints with micro-hydraulic carbon actuators, multiplying structural force output by 12x."
    },
    {
      title: "Bio Health Monitoring",
      subtitle: "Sub-dermal Nanite triage matrix",
      Icon: HeartPulse,
      color: "cyan",
      progress: 98,
      status: "ACTIVE",
      stats: [
        { label: "CELL REGENERATION", value: "+400%" },
        { label: "TOXIN NEUTRALIZATION", value: "99.9%" },
        { label: "NANITE REPLENISH", value: "100%" }
      ],
      desc: "Injects millions of autonomous medical nanites that active-heal micro-wounds and neutralize harmful pathogens."
    }
  ];

  const getColorTheme = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          glow: 'text-glow-cyan',
          border: 'border-cyber-cyan/20 hover:border-cyber-cyan/50 shadow-cyan-950/20',
          text: 'text-cyber-cyan',
          bg: 'bg-cyber-cyan',
          rgba: 'rgba(0, 243, 255, 0.4)'
        };
      case 'purple':
        return {
          glow: 'text-glow-purple',
          border: 'border-cyber-purple/20 hover:border-cyber-purple/50 shadow-purple-950/20',
          text: 'text-cyber-purple',
          bg: 'bg-cyber-purple',
          rgba: 'rgba(189, 0, 255, 0.4)'
        };
      case 'emerald':
        default:
        return {
          glow: 'text-glow-emerald',
          border: 'border-cyber-emerald/20 hover:border-cyber-emerald/50 shadow-emerald-950/20',
          text: 'text-cyber-emerald',
          bg: 'bg-cyber-emerald',
          rgba: 'rgba(0, 255, 135, 0.4)'
        };
    }
  };

  return (
    <section id="upgrades" className="relative py-24 bg-cyber-dark overflow-hidden border-b border-cyber-cyan/10">
      {/* Visual background details */}
      <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-purple/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 select-none">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-cyber-purple tracking-[0.3em] uppercase">
              // AUGMENTATION_PROTOCOLS
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black font-orbitron tracking-wide text-white uppercase text-glow-purple">
              Cybernetic Upgrades
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-cyber-purple to-cyber-cyan mt-4 mb-4 md:mb-0" />
          </div>
          <div className="text-left md:text-right max-w-sm">
            <span className="text-gray-400 font-sans text-sm font-light leading-relaxed">
              Unlock structural enhancement tiers. All upgrades are fully compatible with Gen-2 neural interfaces and feature custom visual diagnostic feeds.
            </span>
          </div>
        </div>

        {/* Upgrades grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upgrades.map((item, idx) => {
            const theme = getColorTheme(item.color);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`glass-panel p-6 sm:p-8 clip-corner border transition-all duration-300 flex flex-col gap-6 shadow-xl ${theme.border} group`}
              >
                {/* Header info */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-cyber-cyan/10 pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded bg-cyber-bg border border-${item.color === 'cyan' ? 'cyber-cyan' : item.color === 'purple' ? 'cyber-purple' : 'cyber-emerald'}/20 group-hover:border-${item.color === 'cyan' ? 'cyber-cyan' : item.color === 'purple' ? 'cyber-purple' : 'cyber-emerald'}/50 transition-colors`}>
                      <item.Icon className={`h-7 w-7 ${theme.text}`} />
                    </div>
                    <div>
                      <h3 className="font-orbitron text-xl font-bold tracking-wide text-white">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex flex-col text-left sm:text-right font-mono">
                      <span className="text-[10px] text-gray-500">// INTEGRITY</span>
                      <span className={`text-xs font-bold ${theme.text}`}>{item.status}</span>
                    </div>
                    <div className="h-8 w-[1px] bg-cyber-cyan/15 hidden sm:block" />
                    <div className="flex flex-col font-mono">
                      <span className="text-[10px] text-gray-500">// SYNC</span>
                      <span className="text-xs font-bold text-white">{item.progress}%</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 font-sans text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Technical Stats list */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
                  {item.stats.map((stat, statIdx) => (
                    <div key={statIdx} className="bg-cyber-bg/60 p-3 border border-cyber-cyan/5 rounded flex flex-col gap-1">
                      <span className="text-[8px] font-mono text-gray-500 tracking-wider uppercase">
                        {stat.label}
                      </span>
                      <span className="text-sm font-mono text-white font-bold tracking-wider">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress bar container */}
                <div className="flex flex-col gap-1.5 mt-auto">
                  <div className="flex items-center justify-between text-[9px] font-mono text-gray-500">
                    <span>AUGMENTATION_CALIBRATION_FEED</span>
                    <span className="text-white font-bold">{item.progress}% CONNECTED</span>
                  </div>
                  
                  {/* Slider rail */}
                  <div className="w-full h-2 bg-cyber-bg/85 rounded-full overflow-hidden border border-cyber-cyan/10 p-[1px]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className={`h-full rounded-full ${theme.bg} relative`}
                      style={{ boxShadow: `0 0 8px ${theme.rgba}` }}
                    >
                      {/* Animated diagonal highlights on the bar */}
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:15px_15px] animate-[pulse_2s_infinite]" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Upgrades;
