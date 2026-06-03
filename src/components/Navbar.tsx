import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Radio } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Technology', id: 'technology' },
    { name: 'Upgrades', id: 'upgrades' },
    { name: 'Timeline', id: 'timeline' },
    { name: 'Diagnostics', id: 'diagnostics' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section intersection detection
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-cyber-bg/75 backdrop-blur-md border-b border-cyber-cyan/20 py-3 shadow-lg shadow-cyber-cyan/5' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative">
                <Cpu className="h-8 w-8 text-cyber-cyan animate-pulse-slow filter drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute inset-0 bg-cyber-cyan/20 blur-md rounded-full -z-10"
                />
              </div>
              <span className="font-orbitron font-black text-xl tracking-wider text-white">
                CYBER<span className="text-cyber-cyan text-glow-cyan">NETIX</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-rajdhani font-semibold text-base tracking-widest uppercase transition-colors duration-300 py-1.5 px-3 rounded ${
                    activeSection === item.id 
                      ? 'text-cyber-cyan' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-purple shadow-[0_0_8px_rgba(0,243,255,0.8)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
              
              {/* Telemetry Status Pin */}
              <div className="hidden lg:flex items-center gap-2 bg-cyber-dark/80 px-3 py-1.5 rounded border border-cyber-purple/20 text-xs font-mono text-cyber-purple">
                <Radio className="h-3 w-3 text-cyber-cyan animate-pulse-fast filter drop-shadow-[0_0_4px_rgba(0,243,255,0.6)]" />
                <span>LINK_STABLE // 99.8%</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cyber-cyan focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-cyber-bg/95 border-b border-cyber-cyan/20 backdrop-blur-lg"
            >
              <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 text-center border-t border-cyber-cyan/10">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full py-3 text-lg font-rajdhani tracking-widest uppercase transition-colors duration-300 ${
                      activeSection === item.id 
                        ? 'text-cyber-cyan text-glow-cyan bg-cyber-cyan/5 font-bold' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                
                <div className="pt-4 flex justify-center">
                  <div className="flex items-center gap-2 bg-cyber-dark px-4 py-2 rounded border border-cyber-cyan/25 text-xs font-mono text-cyber-cyan">
                    <Radio className="h-3.5 w-3.5 text-cyber-cyan animate-pulse-fast" />
                    <span>SYS_ONLINE // SECURE_CON</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
export default Navbar;
