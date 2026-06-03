import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Network, Cpu, Globe } from 'lucide-react';

export const Timeline: React.FC = () => {
  const milestones = [
    {
      year: "2025",
      title: "Human-AI Integration",
      subtitle: "SYSC_SYNC_INIT",
      Icon: Network,
      color: "cyan",
      desc: "Initial biological synchronization protocols. Micro-transceivers implanted in sensory nerves enable direct chat-interface connections."
    },
    {
      year: "2030",
      title: "Neural Computing",
      subtitle: "CORE_OPTICAL_NET",
      Icon: Cpu,
      color: "purple",
      desc: "Transition from electrical synapses to silicon-optic co-processors. Standard logic processing speed is boosted by 1,000x."
    },
    {
      year: "2040",
      title: "Synthetic Enhancement",
      subtitle: "GEN_3_SYNTH_BODY",
      Icon: ShieldCheck,
      color: "emerald",
      desc: "Total bio-mechanical replacement options. Biological limbs and critical organs upgraded to carbon-graphene cellular matrices."
    },
    {
      year: "2050",
      title: "Cybernetic Civilization",
      subtitle: "ORBITAL_HIVEMIND",
      Icon: Globe,
      color: "cyan",
      desc: "Merging of individual consciousness arrays into a planet-wide quantum hive network, achieving post-biological immortality."
    }
  ];

  const getThemeColors = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          bg: 'bg-cyber-cyan',
          text: 'text-cyber-cyan',
          border: 'border-cyber-cyan',
          shadow: 'shadow-[0_0_10px_rgba(0,243,255,0.6)]',
          glow: 'text-glow-cyan'
        };
      case 'purple':
        return {
          bg: 'bg-cyber-purple',
          text: 'text-cyber-purple',
          border: 'border-cyber-purple',
          shadow: 'shadow-[0_0_10px_rgba(189,0,255,0.6)]',
          glow: 'text-glow-purple'
        };
      case 'emerald':
      default:
        return {
          bg: 'bg-cyber-emerald',
          text: 'text-cyber-emerald',
          border: 'border-cyber-emerald',
          shadow: 'shadow-[0_0_10px_rgba(0,255,135,0.6)]',
          glow: 'text-glow-emerald'
        };
    }
  };

  return (
    <section id="timeline" className="relative py-24 bg-cyber-bg overflow-hidden border-b border-cyber-cyan/10">
      {/* Background aesthetics */}
      <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono text-cyber-cyan tracking-[0.3em] uppercase">
            // CHRONOLOGICAL_EVOLUTION
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black font-orbitron tracking-wide text-white uppercase text-glow-cyan">
            Future Evolution Timeline
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto mt-4" />
          <p className="mt-4 text-gray-400 font-sans font-light text-sm">
            Trace the evolutionary landmarks as humanity shifts from pure carbon biology to cybernetic post-human transcendence.
          </p>
        </div>

        {/* Responsive Timeline Wrapper */}
        <div className="relative mt-12">
          
          {/* Timeline center line - Desktop Horizontal / Mobile Vertical */}
          {/* Desktop Horizontal Line */}
          <div className="absolute top-[84px] left-[5%] right-[5%] h-[2px] bg-cyber-cyan/15 hidden lg:block pointer-events-none">
            {/* Animated filling line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-emerald origin-left shadow-[0_0_8px_rgba(0,243,255,0.5)]"
            />
          </div>

          {/* Mobile Vertical Line */}
          <div className="absolute left-[35px] top-0 bottom-0 w-[2px] bg-cyber-cyan/15 lg:hidden pointer-events-none">
            {/* Animated filling line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-b from-cyber-cyan via-cyber-purple to-cyber-emerald origin-top shadow-[0_0_8px_rgba(0,243,255,0.5)]"
            />
          </div>

          {/* Timeline Nodes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 relative">
            {milestones.map((node, idx) => {
              const theme = getThemeColors(node.color);
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
                  className="flex lg:flex-col gap-6 lg:gap-0 lg:items-center relative"
                >
                  
                  {/* Circle Indicator (Visual Anchor) */}
                  <div className="flex-shrink-0 flex items-center justify-center z-10 lg:mb-8">
                    <div className="relative">
                      {/* Central glowing orb */}
                      <div className={`h-16 w-16 rounded-full bg-cyber-dark border-2 ${theme.border} flex items-center justify-center ${theme.shadow}`}>
                        <node.Icon className={`h-6 w-6 ${theme.text}`} />
                      </div>
                      
                      {/* Pulse rings */}
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ repeat: Infinity, duration: 3, delay: idx * 0.5 }}
                        className={`absolute inset-0 border border-cyber-cyan/35 rounded-full -z-10`}
                      />

                      {/* Year badge display above node on desktop */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 hidden lg:block font-orbitron font-black text-2xl tracking-wider text-white text-glow-cyan">
                        {node.year}
                      </div>
                    </div>
                  </div>

                  {/* Text card content block */}
                  <div className="flex-1 lg:text-center glass-panel p-6 clip-corner-sm border border-cyber-cyan/15 bg-cyber-dark/40 hover:border-cyber-cyan/30 transition-colors">
                    {/* Year badge on mobile */}
                    <div className="lg:hidden font-orbitron font-black text-2xl tracking-wider text-cyber-cyan mb-2">
                      {node.year}
                    </div>

                    <div className="flex items-center lg:justify-center gap-2 border-b border-cyber-cyan/10 pb-2 mb-3">
                      <h3 className="font-orbitron text-lg font-bold text-white tracking-wide leading-tight">
                        {node.title}
                      </h3>
                    </div>

                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3 block">
                      // {node.subtitle}
                    </div>

                    <p className="text-gray-400 font-sans text-xs leading-relaxed">
                      {node.desc}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
export default Timeline;
