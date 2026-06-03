import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glow?: 'cyan' | 'purple' | 'emerald';
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', glow = 'cyan' }) => {
  const glowClass = 
    glow === 'cyan' ? 'text-glow-cyan' : 
    glow === 'purple' ? 'text-glow-purple' : 
    'text-glow-emerald';

  return (
    <div className={`relative inline-block font-orbitron select-none ${className}`}>
      {/* Magenta Shift Layer */}
      <span 
        className="absolute top-0 left-[2px] text-cyber-pink bg-transparent w-full h-full opacity-60 animate-glitch-1 pointer-events-none"
        style={{ textShadow: '-2px 0 #f72585', clipPath: 'rect(0px, 9999px, 0px, 0px)' }}
        aria-hidden="true"
      >
        {text}
      </span>
      
      {/* Core Glowing Text */}
      <span className={`relative z-10 text-white ${glowClass}`}>
        {text}
      </span>
      
      {/* Cyan Shift Layer */}
      <span 
        className="absolute top-0 -left-[2px] text-cyber-cyan bg-transparent w-full h-full opacity-60 animate-glitch-2 pointer-events-none"
        style={{ textShadow: '2px 0 #00f3ff', clipPath: 'rect(0px, 9999px, 0px, 0px)' }}
        aria-hidden="true"
      >
        {text}
      </span>
    </div>
  );
};
export default GlitchText;
