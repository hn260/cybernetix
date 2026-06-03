import React, { useState } from 'react';
import { Check, AlertCircle, Send, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setSubStatus('error');
      return;
    }
    
    // Fictional submit response
    setSubStatus('success');
    setEmail('');
    
    setTimeout(() => {
      setSubStatus('idle');
    }, 4000);
  };

  return (
    <footer id="contact" className="relative bg-cyber-dark pt-16 pb-8 border-t border-cyber-cyan/15 overflow-hidden select-none">
      {/* Decorative details */}
      <div className="absolute inset-0 cyber-grid-dense opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-cyber-cyan/10 pb-12">
          
          {/* Column 1 - Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Cpu className="h-7 w-7 text-cyber-cyan" />
              <span className="font-orbitron font-black text-lg tracking-wider text-white">
                CYBER<span className="text-cyber-cyan text-glow-cyan">NETIX</span>
              </span>
            </div>
            <p className="text-gray-400 font-sans text-xs sm:text-sm max-w-sm leading-relaxed">
              Engineering the synapse connection between human creativity and autonomous quantum computing. Welcome to Sector 7 AI Lab.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-2">
              <a href="#" className="p-2 border border-cyber-cyan/20 hover:border-cyber-cyan text-gray-400 hover:text-cyber-cyan rounded bg-cyber-bg transition-colors shadow-[0_0_5px_rgba(0,0,0,0.3)] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <a href="#" className="p-2 border border-cyber-cyan/20 hover:border-cyber-cyan text-gray-400 hover:text-cyber-cyan rounded bg-cyber-bg transition-colors shadow-[0_0_5px_rgba(0,0,0,0.3)] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="#" className="p-2 border border-cyber-cyan/20 hover:border-cyber-cyan text-gray-400 hover:text-cyber-cyan rounded bg-cyber-bg transition-colors shadow-[0_0_5px_rgba(0,0,0,0.3)] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3v6Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Links / Contact info */}
          <div className="md:col-span-3 flex flex-col gap-3 font-mono text-xs text-gray-400">
            <span className="text-[10px] text-cyber-cyan font-bold tracking-widest uppercase mb-1">
              // LABORATORY_COORDINATES
            </span>
            <span>CYBERNETIX LABS CORP.</span>
            <span>SECTOR 7 // SUB-LEVEL 12</span>
            <span>COGNITIVE_UPGRADE_BAY: A</span>
            <span className="text-white mt-2">SYS_SUPPORT@CYBERNETIX.IO</span>
          </div>

          {/* Column 3 - Newsletter Sub */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] text-cyber-purple font-bold tracking-widest uppercase mb-1">
              // JOIN_NEWSLETTER_FEED
            </span>
            <p className="text-gray-400 font-sans text-xs leading-relaxed">
              Sync your inbox vectors with our neural dev logs to receive microchip upgrade updates.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="flex bg-cyber-bg border border-cyber-cyan/15 rounded-md overflow-hidden p-[1px] focus-within:border-cyber-cyan/50 transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER_EMAIL_VECTOR"
                  className="flex-1 bg-transparent px-3 py-2 text-xs font-mono text-white placeholder-gray-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 bg-cyber-cyan hover:bg-cyber-cyan/80 text-black font-rajdhani font-black text-xs uppercase tracking-widest transition-colors flex items-center gap-1.5"
                >
                  <Send className="h-3 w-3" />
                  SYNC
                </button>
              </div>

              {/* Status messages */}
              {subStatus === 'success' && (
                <div className="text-[9px] font-mono text-cyber-emerald flex items-center gap-1.5 mt-1">
                  <Check className="h-3 w-3" />
                  EMAIL_SYNCED // ACCESS_GRANTED_OK
                </div>
              )}
              {subStatus === 'error' && (
                <div className="text-[9px] font-mono text-cyber-pink flex items-center gap-1.5 mt-1">
                  <AlertCircle className="h-3 w-3" />
                  ERROR_EMPTY_OR_INVALID_VECTOR
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom copyright ticker line */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-mono text-gray-500 uppercase">
          <span>CYBERNETIX CORP © 2026 // ALL RIGHTS RESERVED</span>
          <div className="flex gap-3 text-cyber-cyan/60">
            <span>STATUS: SYSTEMS_NOMINAL</span>
            <span>//</span>
            <span>LINK: ENCRYPTED</span>
            <span>//</span>
            <span>VER: 9283-A</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
