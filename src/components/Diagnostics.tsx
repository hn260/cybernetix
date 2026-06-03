import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Heart, Zap, Terminal, RefreshCw, Layers } from 'lucide-react';

export const Diagnostics: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanMessage, setScanMessage] = useState('SYSTEMS NOMINAL // STANDBY');
  
  // Live states for telemetry
  const [bpm, setBpm] = useState(72);
  const [neuralSync, setNeuralSync] = useState(96.4);
  const [cpuLoad, setCpuLoad] = useState(48);
  const [cognitiveCap, setCognitiveCap] = useState(94.2);
  const [energyLevel, setEnergyLevel] = useState(82.4);

  // ECG Heartbeat Waveform state (30 data points)
  const [ecgPoints, setEcgPoints] = useState<number[]>(Array(40).fill(30));
  const ecgIndex = useRef(0);
  const beatSequence = [30, 30, 30, 30, 30, 10, 80, 20, 45, 30, 30, 30, 30]; // Heartbeat spike sequence

  useEffect(() => {
    // 1. Live Telemetry Random Fluctuations
    const telemetryInterval = setInterval(() => {
      if (isScanning) return; // Freeze fluctuations during scans
      
      setBpm(prev => {
        const diff = Math.random() > 0.5 ? 1 : -1;
        const next = prev + diff;
        return Math.max(68, Math.min(84, next));
      });

      setNeuralSync(prev => {
        const diff = (Math.random() - 0.5) * 0.4;
        const next = prev + diff;
        return parseFloat(Math.max(94.5, Math.min(99.4, next)).toFixed(2));
      });

      setCpuLoad(prev => {
        const diff = Math.random() > 0.5 ? Math.floor(Math.random() * 4) : -Math.floor(Math.random() * 4);
        const next = prev + diff;
        return Math.max(40, Math.min(65, next));
      });

      setCognitiveCap(prev => {
        const diff = (Math.random() - 0.5) * 0.2;
        const next = prev + diff;
        return parseFloat(Math.max(93.0, Math.min(96.5, next)).toFixed(1));
      });

      setEnergyLevel(prev => {
        // Battery slowly depletes
        const next = prev - 0.01;
        return parseFloat(Math.max(20.0, next).toFixed(2));
      });
    }, 1500);

    // 2. ECG Waveform Scrolling Animation Ticker
    const ecgInterval = setInterval(() => {
      setEcgPoints(prev => {
        const nextPoints = [...prev.slice(1)];
        
        let newPoint = 30; // Default midline
        
        // Build regular heartbeat spikes
        const sequencePos = ecgIndex.current % 32;
        if (sequencePos < beatSequence.length) {
          newPoint = beatSequence[sequencePos];
        } else {
          // Midline noise
          newPoint = 30 + (Math.random() - 0.5) * 2;
        }

        ecgIndex.current += 1;
        nextPoints.push(newPoint);
        return nextPoints;
      });
    }, 80);

    return () => {
      clearInterval(telemetryInterval);
      clearInterval(ecgInterval);
    };
  }, [isScanning]);

  // Trigger diagnostic scan
  const triggerScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScanMessage('DECRYPTING CORTICAL SHIELD...');
    
    // Phase 1
    setTimeout(() => {
      setScanMessage('RE-CALIBRATING QUANTUM CLOCKS...');
      setCpuLoad(98);
      setBpm(110);
      setNeuralSync(72.5);
    }, 800);

    // Phase 2
    setTimeout(() => {
      setScanMessage('PURGING SENSORY CACHE...');
      setNeuralSync(99.8);
      setCognitiveCap(99.9);
      setEnergyLevel(98.6); // Fuel inject recharge
    }, 1800);

    // Done
    setTimeout(() => {
      setScanMessage('SWEEP COMPLETE. ALL MODULES OPERATIONAL.');
      setIsScanning(false);
      setBpm(74);
      setCpuLoad(42);
    }, 2800);
  };

  // Convert points array to SVG path
  const svgWidth = 400;
  const svgHeight = 80;
  const generatePath = () => {
    const spacing = svgWidth / (ecgPoints.length - 1);
    return ecgPoints
      .map((val, idx) => `${idx === 0 ? 'M' : 'L'} ${idx * spacing} ${val}`)
      .join(' ');
  };

  return (
    <section id="diagnostics" className="relative py-24 bg-cyber-bg overflow-hidden border-b border-cyber-cyan/10">
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-[400px] h-[400px] bg-cyber-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyber-cyan tracking-[0.3em] uppercase">
            // TELEMETRY_FEED
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black font-orbitron tracking-wide text-white uppercase text-glow-cyan">
            Live Diagnostics Dashboard
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto mt-4" />
        </div>

        {/* Dashboard Control Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel - Telemetry readouts (7 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* ECG Heart Rate Box */}
            <div className="glass-panel p-6 clip-corner border border-cyber-cyan/15 flex flex-col gap-4 relative overflow-hidden bg-cyber-dark/40">
              <div className="flex items-center justify-between border-b border-cyber-cyan/10 pb-2">
                <span className="text-xs font-mono text-cyber-cyan tracking-widest uppercase flex items-center gap-2">
                  <Heart className="h-4 w-4 text-cyber-pink animate-pulse-fast filter drop-shadow-[0_0_5px_rgba(247,37,133,0.8)]" />
                  ECG VITAL_SIGN: HEART_RATE
                </span>
                <span className="text-sm font-mono font-bold text-white tracking-widest">
                  {bpm} <span className="text-[10px] text-gray-500 font-normal">BPM</span>
                </span>
              </div>
              
              {/* ECG graph container */}
              <div className="relative w-full h-24 bg-cyber-bg border border-cyber-cyan/10 rounded overflow-hidden">
                <svg className="w-full h-full" viewBox={`0 0 ${svgWidth} ${svgHeight}`} preserveAspectRatio="none">
                  {/* Grid Lines inside ECG */}
                  <line x1="0" y1="20" x2={svgWidth} y2="20" stroke="rgba(0, 243, 255, 0.05)" strokeWidth="0.5" />
                  <line x1="0" y1="40" x2={svgWidth} y2="40" stroke="rgba(0, 243, 255, 0.05)" strokeWidth="0.5" />
                  <line x1="0" y1="60" x2={svgWidth} y2="60" stroke="rgba(0, 243, 255, 0.05)" strokeWidth="0.5" />
                  
                  {/* Scrolling Path */}
                  <motion.path
                    d={generatePath()}
                    fill="none"
                    stroke="#00f3ff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: 'drop-shadow(0px 0px 4px rgba(0, 243, 255, 0.8))' }}
                  />
                </svg>
                {/* Horizontal scanner overlay */}
                <div className="absolute inset-y-0 right-0 w-[5px] bg-cyber-cyan/35 blur-[1px] animate-glow-pulse pointer-events-none" />
              </div>
              
              <div className="flex justify-between items-center text-[9px] font-mono text-gray-500">
                <span>VITAL_STATUS: NOMINAL</span>
                <span>ECG_CORE_TICK // 80MS</span>
              </div>
            </div>

            {/* Neural, CPU, and Battery grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Neural Activity Panel */}
              <div className="glass-panel p-5 clip-corner-sm border border-cyber-cyan/15 flex flex-col justify-between bg-cyber-dark/40 min-h-[170px]">
                <div className="flex items-center justify-between text-xs font-mono text-cyber-cyan border-b border-cyber-cyan/10 pb-2">
                  <span className="flex items-center gap-1.5 uppercase font-bold text-[11px]">
                    <Layers className="h-4 w-4" />
                    Neural Sync
                  </span>
                </div>
                <div className="my-4">
                  <span className="text-3xl font-mono font-black text-white text-glow-cyan">
                    {neuralSync}%
                  </span>
                  <span className="text-[10px] font-mono text-cyber-emerald block mt-1">
                    &gt; CORRELATION_OPTIMAL
                  </span>
                </div>
                {/* Visual grid indicators */}
                <div className="grid grid-cols-8 gap-1 h-3 mt-auto">
                  {Array.from({ length: 8 }).map((_, i) => {
                    const threshold = 95;
                    const isActive = neuralSync > threshold - i * 1.5;
                    return (
                      <div
                        key={i}
                        className={`h-full rounded-sm transition-colors duration-300 ${
                          isActive 
                            ? 'bg-cyber-cyan shadow-[0_0_5px_rgba(0,243,255,0.7)]' 
                            : 'bg-cyber-cyan/10'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* CPU load panel */}
              <div className="glass-panel p-5 clip-corner-sm border border-cyber-cyan/15 flex flex-col justify-between bg-cyber-dark/40 min-h-[170px]">
                <div className="flex items-center justify-between text-xs font-mono text-cyber-purple border-b border-cyber-purple/10 pb-2">
                  <span className="flex items-center gap-1.5 uppercase font-bold text-[11px]">
                    <Cpu className="h-4 w-4" />
                    Cortex Core
                  </span>
                </div>
                <div className="my-4">
                  <span className="text-3xl font-mono font-black text-white text-glow-purple">
                    {cpuLoad}%
                  </span>
                  <span className="text-[10px] font-mono text-gray-500 block mt-1">
                    &gt; FREQ_LOAD_BURST
                  </span>
                </div>
                
                {/* Horizontal Segmented Bar */}
                <div className="flex gap-1 h-3 mt-auto">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const isActive = cpuLoad > (i * 100) / 12;
                    return (
                      <div
                        key={i}
                        className={`flex-1 h-full rounded-sm transition-all duration-300 ${
                          isActive 
                            ? i > 9 
                              ? 'bg-cyber-pink shadow-[0_0_5px_rgba(247,37,133,0.7)]' 
                              : 'bg-cyber-purple shadow-[0_0_5px_rgba(189,0,255,0.7)]'
                            : 'bg-cyber-purple/10'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Energy Level Panel */}
              <div className="glass-panel p-5 clip-corner-sm border border-cyber-cyan/15 flex flex-col justify-between bg-cyber-dark/40 min-h-[170px]">
                <div className="flex items-center justify-between text-xs font-mono text-cyber-emerald border-b border-cyber-emerald/10 pb-2">
                  <span className="flex items-center gap-1.5 uppercase font-bold text-[11px]">
                    <Zap className="h-4 w-4" />
                    Cell Energy
                  </span>
                </div>
                <div className="my-4">
                  <span className="text-3xl font-mono font-black text-white text-glow-emerald">
                    {energyLevel}%
                  </span>
                  <span className="text-[10px] font-mono text-cyber-emerald block mt-1">
                    &gt; CELLS_FULLY_CHARGED
                  </span>
                </div>
                
                {/* Custom battery display */}
                <div className="w-full h-3 border border-cyber-emerald/30 bg-cyber-dark rounded-sm p-[1px] mt-auto">
                  <div 
                    className="h-full bg-cyber-emerald rounded-sm transition-all duration-500 shadow-[0_0_5px_rgba(0,255,135,0.7)]"
                    style={{ width: `${energyLevel}%` }}
                  />
                </div>
              </div>

            </div>

          </div>

          {/* Right panel - Concentric Capacity & Live Log feed (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Concentric Cognitive Capacity */}
            <div className="glass-panel p-6 clip-corner border border-cyber-cyan/15 flex flex-col items-center justify-between bg-cyber-dark/40 min-h-[220px] relative overflow-hidden">
              <span className="text-xs font-mono text-cyber-cyan tracking-widest uppercase border-b border-cyber-cyan/10 pb-2 w-full text-center">
                // COGNITIVE_RESERVE
              </span>

              <div className="relative flex items-center justify-center my-4">
                <svg className="w-32 h-32" viewBox="0 0 100 100">
                  {/* Background circles */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(0, 243, 255, 0.05)" strokeWidth="8" />
                  {/* Active SVG path with dash-offset */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#00f3ff"
                    strokeWidth="5"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * cognitiveCap) / 100}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    style={{ 
                      filter: 'drop-shadow(0 0 4px rgba(0, 243, 255, 0.7))',
                      transition: 'stroke-dashoffset 0.8s ease-out'
                    }}
                  />
                </svg>
                {/* Centered statistics readout */}
                <div className="absolute flex flex-col items-center justify-center font-mono">
                  <span className="text-2xl font-bold text-white">{cognitiveCap}%</span>
                  <span className="text-[8px] text-gray-500">CAPACITY</span>
                </div>
              </div>

              <div className="text-[9px] font-mono text-gray-500 uppercase">
                CYBERNETIX_CORTICAL_INTEGRITY
              </div>
            </div>

            {/* Diagnostics Scan Trigger Panel */}
            <div className="glass-panel p-5 clip-corner border border-cyber-cyan/15 bg-cyber-dark/60 flex flex-col gap-3 justify-between flex-1">
              <div className="flex items-center gap-2 text-xs font-mono text-cyber-purple pb-1 border-b border-cyber-purple/10">
                <Terminal className="h-4 w-4" />
                <span>DIAGNOSTIC_LOGS</span>
              </div>
              
              {/* Telemetry Console Stream */}
              <div className="h-20 bg-cyber-bg/90 border border-cyber-cyan/10 p-2.5 rounded text-[9px] font-mono text-cyan-300/80 overflow-y-auto leading-relaxed flex flex-col gap-1">
                <span>&gt; AUTH_KEY: SECURE_ESTABLISHED</span>
                <span>&gt; INT_SYS: INITIALIZED_OK</span>
                <span>&gt; METRIC_FLOW: FETCH_SUCCESS</span>
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={scanMessage}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="text-cyber-purple font-bold"
                  >
                    &gt; {scanMessage}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Trigger Button */}
              <button
                onClick={triggerScan}
                disabled={isScanning}
                className={`w-full py-2.5 px-4 font-rajdhani font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 border transition-all duration-300 rounded ${
                  isScanning
                    ? 'bg-cyber-cyan/5 text-cyber-cyan border-cyber-cyan/20 cursor-not-allowed'
                    : 'bg-cyber-purple/20 text-white border-cyber-purple hover:bg-cyber-purple/40 hover:shadow-neon-purple'
                }`}
              >
                <RefreshCw className={`h-4 w-4 ${isScanning ? 'animate-spin text-cyber-cyan' : ''}`} />
                {isScanning ? 'RUNNING SCAN...' : 'INITIATE UPGRADE DIAGNOSTIC'}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default Diagnostics;
