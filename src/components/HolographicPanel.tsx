import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

interface HolographicPanelProps {
  title: string;
  value: string;
  status?: 'nominal' | 'warning' | 'syncing';
  details?: string;
  delay?: number;
  className?: string;
}

export const HolographicPanel: React.FC<HolographicPanelProps> = ({
  title,
  value,
  status = 'nominal',
  details = 'SYS_LINK_OK',
  delay = 0,
  className = '',
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'nominal':
        return 'text-cyber-emerald border-cyber-emerald/30 bg-cyber-emerald/5';
      case 'warning':
        return 'text-cyber-pink border-cyber-pink/30 bg-cyber-pink/5';
      case 'syncing':
        return 'text-cyber-cyan border-cyber-cyan/30 bg-cyber-cyan/5';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'nominal':
        return 'NOMINAL';
      case 'warning':
        return 'CRIT_ERR';
      case 'syncing':
        return 'SYNC_ON';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-panel p-4 rounded-md clip-corner-sm flex flex-col gap-2 min-w-[200px] border border-cyber-cyan/35 select-none relative group overflow-hidden ${className}`}
    >
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyber-cyan group-hover:scale-125 transition-transform" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyber-cyan group-hover:scale-125 transition-transform" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyber-cyan group-hover:scale-125 transition-transform" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyber-cyan group-hover:scale-125 transition-transform" />
      
      {/* Animated scanline within the panel */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent h-1/2 w-full animate-scanline pointer-events-none opacity-40" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-cyber-cyan/15 pb-1">
        <span className="text-[10px] font-mono tracking-widest text-cyber-cyan/70 uppercase flex items-center gap-1">
          <Terminal className="h-3 w-3" />
          {title}
        </span>
        <span className={`text-[8px] font-mono border px-1.5 py-0.5 rounded font-black ${getStatusColor()}`}>
          {getStatusLabel()}
        </span>
      </div>

      {/* Body content */}
      <div className="flex flex-col gap-0.5 mt-1">
        <span className="text-xl font-mono font-bold text-white tracking-wider flex items-baseline gap-1">
          {value}
        </span>
        <span className="text-[9px] font-mono text-gray-500 tracking-wider">
          &gt; {details}
        </span>
      </div>
    </motion.div>
  );
};
export default HolographicPanel;
