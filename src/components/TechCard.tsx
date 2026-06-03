import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SpecType {
  label: string;
  value: string;
}

interface TechCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: 'cyan' | 'purple' | 'emerald';
  specs: SpecType[];
  index: number;
}

export const TechCard: React.FC<TechCardProps> = ({
  title,
  description,
  Icon,
  color,
  specs,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBorderColor = () => {
    if (isHovered) {
      switch (color) {
        case 'cyan': return 'border-cyber-cyan shadow-neon-cyan';
        case 'purple': return 'border-cyber-purple shadow-neon-purple';
        case 'emerald': return 'border-cyber-emerald shadow-neon-emerald';
      }
    }
    return 'border-cyber-cyan/15 hover:border-cyber-cyan/40';
  };

  const getIconColor = () => {
    switch (color) {
      case 'cyan': return 'text-cyber-cyan filter drop-shadow-[0_0_8px_rgba(0,243,255,0.4)]';
      case 'purple': return 'text-cyber-purple filter drop-shadow-[0_0_8px_rgba(189,0,255,0.4)]';
      case 'emerald': return 'text-cyber-emerald filter drop-shadow-[0_0_8px_rgba(0,255,135,0.4)]';
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass-panel p-6 clip-corner flex flex-col gap-4 border transition-all duration-300 ${getBorderColor()} select-none cursor-pointer h-full`}
    >
      {/* Decorative Index Header */}
      <div className="flex items-center justify-between border-b border-cyber-cyan/10 pb-2">
        <span className="text-[10px] font-mono text-gray-500 tracking-widest">
          0{index + 1} // TECH_SPEC
        </span>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-cyber-cyan/40 rounded-full" />
          <span className="w-1.5 h-1.5 bg-cyber-cyan/20 rounded-full" />
        </div>
      </div>

      {/* Icon and Title */}
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded bg-cyber-dark/80 border border-cyber-cyan/15 group-hover:border-cyber-cyan/30 transition-colors`}>
          <Icon className={`h-8 w-8 ${getIconColor()}`} />
        </div>
        <h3 className="font-orbitron text-xl font-bold tracking-wider text-white text-glow-cyan">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-400 font-sans text-sm leading-relaxed">
        {description}
      </p>

      {/* Expandable Technical Specs on Hover */}
      <div className="mt-auto pt-4 border-t border-cyber-cyan/10">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isHovered ? 'auto' : 0, 
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="flex flex-col gap-2.5 pt-2">
            <span className="text-[9px] font-mono tracking-widest text-cyber-cyan/60 uppercase">
              // TELEMETRY_DATA_METRICS
            </span>
            <div className="grid grid-cols-2 gap-3">
              {specs.map((spec, specIdx) => (
                <div key={specIdx} className="bg-cyber-dark/50 p-2 border border-cyber-cyan/10 rounded flex flex-col gap-0.5">
                  <span className="text-[9px] font-mono text-gray-500 uppercase">{spec.label}</span>
                  <span className="text-xs font-mono text-white font-bold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Static Prompt */}
        {!isHovered && (
          <div className="text-[10px] font-mono text-cyber-cyan/50 tracking-widest text-center mt-2 animate-glow-pulse">
            [ HOVER_TO_DECRYPT_TELEMETRY ]
          </div>
        )}
      </div>
    </motion.div>
  );
};
export default TechCard;
