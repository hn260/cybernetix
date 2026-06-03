import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface CounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, decimals = 0, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const fps = 60;
    const totalSteps = duration * fps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / totalSteps;
      // Ease out quad
      const currentVal = start + (end - start) * (progress * (2 - progress));
      setCount(currentVal);

      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(interval);
      }
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [isInView, value, duration]);

  return (
    <span ref={elementRef}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const StatsAndTestimonials: React.FC = () => {
  const stats = [
    { value: 99.8, decimals: 1, suffix: "%", label: "Neural Accuracy" },
    { value: 2, decimals: 0, suffix: "ms", label: "Response Latency" },
    { value: 50, decimals: 0, suffix: "M+", label: "Data Connections" },
    { value: 1, decimals: 0, suffix: "M+", label: "Enhanced Users" }
  ];

  const testimonials = [
    {
      name: "DR. EVELYN THORNE",
      role: "Lead Neuro-Computational Researcher",
      avatarId: "sub-01",
      story: "The Neural Accelerator integration was flawless. My logical processing speed expanded exponentially. Complex biological data structures are now visualized directly as 3D cognitive models in my field of view.",
      color: "cyan"
    },
    {
      name: "JAXON MERCER",
      role: "Core AI Developer & Architect",
      avatarId: "sub-12",
      story: "Interfacing my cortex directly with the terminal at 2ms response time feels like absolute telepathy. Scaffolding, building, and compiling operating systems is done at the speed of thought. The future of software is synaptic.",
      color: "purple"
    },
    {
      name: "ARIA CHEN",
      role: "Cyber-Structural Mechanical Engineer",
      avatarId: "sub-08",
      story: "The Smart Limb actuator calibration took less than 5 minutes. Lifting massive 200kg steel framework structures feels weightless, and the nano-tactile feedback matrix is incredibly detailed and natural.",
      color: "emerald"
    }
  ];

  // Fictional SVG hologram avatar generator
  const renderHologramAvatar = (_avatarId: string, color: string) => {
    const strokeColor = color === 'cyan' ? '#00f3ff' : color === 'purple' ? '#bd00ff' : '#00ff87';
    return (
      <svg className="w-16 h-16 filter drop-shadow-[0_0_6px_var(--glow)]" style={{ '--glow': strokeColor } as React.CSSProperties} viewBox="0 0 100 100">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke={strokeColor} strokeWidth="0.5" strokeOpacity="0.15" />
          </pattern>
        </defs>
        {/* Background grid circle */}
        <circle cx="50" cy="50" r="45" fill="url(#grid)" stroke={strokeColor} strokeWidth="1" strokeOpacity="0.3" />
        
        {/* Tech abstract vector */}
        <circle cx="50" cy="50" r="32" fill="none" stroke={strokeColor} strokeWidth="0.7" strokeDasharray="5, 3" strokeOpacity="0.5" />
        
        {/* Silhouette Vector */}
        <path 
          d="M 50 25 C 40 25 35 35 35 45 C 35 55 42 62 50 62 C 58 62 65 55 65 45 C 65 35 60 25 50 25 Z M 50 66 C 30 66 22 78 22 85 L 78 85 C 78 78 70 66 50 66 Z" 
          fill="none" 
          stroke={strokeColor} 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />

        {/* HUD Crosshairs */}
        <line x1="15" y1="50" x2="25" y2="50" stroke={strokeColor} strokeWidth="1" />
        <line x1="75" y1="50" x2="85" y2="50" stroke={strokeColor} strokeWidth="1" />
        <line x1="50" y1="15" x2="50" y2="25" stroke={strokeColor} strokeWidth="1" />
        <line x1="50" y1="75" x2="50" y2="85" stroke={strokeColor} strokeWidth="1" />

        {/* Scan indicator */}
        <circle cx="50" cy="45" r="3" fill={strokeColor} className="animate-ping" />
      </svg>
    );
  };

  return (
    <section className="relative py-24 bg-cyber-dark overflow-hidden border-b border-cyber-cyan/10">
      <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none">
        
        {/* Innovation Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="glass-panel p-6 clip-corner-sm border border-cyber-cyan/15 bg-cyber-bg/40 text-center flex flex-col justify-center gap-1 shadow-lg shadow-black/40 hover:border-cyber-cyan/35 group"
            >
              <span className="text-4xl sm:text-5xl font-black font-mono text-white text-glow-cyan">
                <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mt-2 group-hover:text-cyber-cyan transition-colors">
                // {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyber-purple tracking-[0.3em] uppercase">
            // SUBJECT_TESTIMONIALS
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black font-orbitron tracking-wide text-white uppercase text-glow-purple">
            Cybernetic Pioneers
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-cyber-purple to-cyber-cyan mx-auto mt-4" />
          <p className="mt-4 text-gray-400 font-sans font-light text-sm">
            Read experimental telemetry reviews from our first fully integrated synthetic test subjects.
          </p>
        </div>

        {/* Testimonials cards list */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((subject, idx) => {
            const glowClass = 
              subject.color === 'cyan' ? 'border-cyber-cyan/20 hover:border-cyber-cyan/40' :
              subject.color === 'purple' ? 'border-cyber-purple/20 hover:border-cyber-purple/40' :
              'border-cyber-emerald/20 hover:border-cyber-emerald/40';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
                className={`glass-panel p-6 sm:p-8 clip-corner border flex flex-col gap-6 relative overflow-hidden bg-cyber-bg/40 ${glowClass} group`}
              >
                {/* Visual scanline in background */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full w-full -translate-y-full group-hover:translate-y-full transition-all duration-[2.5s] ease-linear pointer-events-none" />

                {/* Fictional holographic hologram & name info */}
                <div className="flex items-center gap-4 border-b border-cyber-cyan/10 pb-4 relative z-10">
                  <div className="relative">
                    {renderHologramAvatar(subject.avatarId, subject.color)}
                    {/* Glowing scanner bar on profile card */}
                    <div className="absolute inset-x-0 top-0 h-[1.5px] bg-cyber-cyan shadow-[0_0_8px_#00f3ff] animate-scanline pointer-events-none" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-orbitron font-bold text-sm tracking-wide text-white">
                      {subject.name}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500 uppercase mt-0.5 tracking-wider">
                      {subject.role}
                    </span>
                    <span className="text-[8px] font-mono text-cyber-cyan/60 mt-1 uppercase">
                      ID: {subject.avatarId}_VERIFIED
                    </span>
                  </div>
                </div>

                {/* Story Body */}
                <p className="text-gray-400 font-sans italic text-sm leading-relaxed relative z-10">
                  &ldquo;{subject.story}&rdquo;
                </p>

                {/* Mini telemetry tag at bottom of card */}
                <div className="flex items-center justify-between text-[9px] font-mono text-gray-600 mt-auto border-t border-cyber-cyan/10 pt-4 relative z-10">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3 text-cyber-cyan animate-pulse-slow" />
                    INTEGRATION_OK
                  </span>
                  <span>SYNC_100%</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default StatsAndTestimonials;
