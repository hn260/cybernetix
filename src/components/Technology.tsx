import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Eye, Bot, Activity, Cpu, Shield } from 'lucide-react';
import { TechCard } from './TechCard';

export const Technology: React.FC = () => {
  const technologies = [
    {
      title: "Neural Interface",
      description: "Direct synaptic connection linking your mind to the global quantum web. Upload/download memory vectors instantly.",
      Icon: Brain,
      color: "cyan" as const,
      specs: [
        { label: "Synapse Latency", value: "0.12 ms" },
        { label: "Throughput", value: "120 Tb/s" }
      ]
    },
    {
      title: "Cyber Vision",
      description: "Retinal enhancements offering real-time multi-spectral scanning, thermal overlays, and threat identification HUDs.",
      Icon: Eye,
      color: "purple" as const,
      specs: [
        { label: "Refresh Rate", value: "240 Hz" },
        { label: "Spectral bands", value: "12 Channels" }
      ]
    },
    {
      title: "AI Co-Processor",
      description: "Autonomous cortex-nested assistant that handles calculations, filters sensory noise, and runs predictive simulations.",
      Icon: Bot,
      color: "emerald" as const,
      specs: [
        { label: "Model Layer", value: "AETHER.v5" },
        { label: "Capacity", value: "480 TFLOPS" }
      ]
    },
    {
      title: "Bio-Monitor Grid",
      description: "Sub-dermal nanite grid monitoring cellular status. Auto-administers micro-doses of stimulants and repairs tissue.",
      Icon: Activity,
      color: "emerald" as const,
      specs: [
        { label: "Nanite Cluster", value: "4.5 Million" },
        { label: "Stamina Boost", value: "+300%" }
      ]
    },
    {
      title: "Quantum Processor",
      description: "Integrated sub-skull quantum matrix enabling rapid cryptography and parallel problem-solving in real-time.",
      Icon: Cpu,
      color: "cyan" as const,
      specs: [
        { label: "Coherent Qubits", value: "4,096" },
        { label: "Cooling Node", value: "0.02 Kelvin" }
      ]
    },
    {
      title: "Exo-Skeleton System",
      description: "Synthetic graphene-fiber muscle extensions boosting load capability, jumping distance, and general physical endurance.",
      Icon: Shield,
      color: "purple" as const,
      specs: [
        { label: "Torque Rating", value: "2,400 Nm" },
        { label: "Power Source", value: "Micro-Fusion" }
      ]
    }
  ];

  return (
    <section id="technology" className="relative py-24 bg-cyber-bg overflow-hidden border-b border-cyber-cyan/10">
      {/* Decorative background grid and lighting */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-[400px] h-[400px] bg-cyber-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] bg-cyber-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 select-none">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-cyber-cyan tracking-[0.3em] uppercase"
          >
            // INTEGRATED SYSTEMS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black font-orbitron tracking-wide text-white uppercase text-glow-cyan"
          >
            Cybernetic Technologies
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] w-24 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto mt-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-gray-400 font-sans font-light text-base leading-relaxed"
          >
            We deploy cutting-edge micro-hardware engineered to bypass human boundaries and achieve cybernetic parity with advanced machine intelligence.
          </motion.p>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, idx) => (
            <TechCard
              key={idx}
              title={tech.title}
              description={tech.description}
              Icon={tech.Icon}
              color={tech.color}
              specs={tech.specs}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Technology;
