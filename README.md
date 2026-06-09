# CYBERNETIX ⚙️ // Humanity 2.0

CYBERNETIX is a premium, fully responsive, futuristic landing page designed with a high-end cyberpunk and cyborg aesthetic. Engineered with React, Vite, TypeScript, Tailwind CSS v4, Framer Motion, and Three.js.

## 🔗 Live Deployments

- **Vercel Production Domain:** [https://cybernetix.vercel.app](https://cybernetix.vercel.app)
- **Vercel Build Preview:** [https://cybernetix-7vthfjrmb-hn260s-projects.vercel.app](https://cybernetix-7vthfjrmb-hn260s-projects.vercel.app)

---

## 💎 Features & Interactive Panels

1. **Immersive Hero Section:** Includes a programmatically rendered 3D rotating holographic neural points-sphere surrounded by orbiting digital wireframe rings (rendered dynamically in Three.js and responsive to cursor movement).
2. **Neural Grid Background:** High-performance, canvas-rendered background nodes that link together dynamically and respond to mouse hover.
3. **Glitch HUD Typography:** Authentic horizontal slice glitch text blocks utilizing CSS clip-paths and chromatic aberration offsets.
4. **Interactive Technologies:** Grid of 6 hover-expandable cybernetic modules detailing latency rates, bandwidth specs, and technical capacities.
5. **Calibrations Showcase:** 4 large showcase blocks visualizing installation status meters and myoelectric stats.
6. **Timeline Milestones:** responsive scroll-linked future timeline mapping the transition from carbon biology to synthetic transcendence.
7. **Diagnostics Telemetry Console:** scrolling SVG electrocardiogram (ECG) waveform with real-time numeric calculations and an interactive "Diagnostic Scan" override.
8. **Synaptic Upgrade Simulator:** clicking "INITIATE UPGRADE" opens a terminal interface executing scrolling code blocks and status meters.
9. **SEO Optimized:** title tags, meta tags, and inline vector favicons.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + Vite 8 + TypeScript 6
- **Styling:** Tailwind CSS v4 (configured natively via `@theme` in `src/index.css` for instant compilations)
- **3D Engine:** Three.js (dynamic wireframe mesh generation)
- **Animations:** Framer Motion (for smooth height transitions, viewport entry triggers, and fades)
- **Icons:** Lucide React

---

## Deployment Video



https://github.com/user-attachments/assets/8e3d8ec7-b671-4ab3-be07-fe315ab676c0



## 🚀 How to Run Locally

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v20+ recommended).

### 2. Installation
Navigate to the root directory and install dependencies:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser to view the interactive application.

### 4. Build Production Bundle
```bash
npm run build
```
This compiles the application and outputs optimized static assets in `/dist`.

---

## 📂 Project Architecture

```text
C:\Users\Herman\.gemini\antigravity\scratch\cybernetix\src\
├── assets/                 # SVGs and background assets
├── components/
│   ├── Navbar.tsx          # Glassmorphism navbar with intersection highlights
│   ├── ParticleNetwork.tsx # Canvas-based interactive backdrop
│   ├── CyberCore3D.tsx     # Three.js 3D hologram core
│   ├── HolographicPanel.tsx# Floating HUD widgets
│   ├── GlitchText.tsx      # Cyberpunk glitchy titles
│   ├── TechCard.tsx        # Grid spec card
│   ├── Upgrades.tsx        # Augmentation metrics
│   ├── Timeline.tsx        # Chronological landmarks
│   ├── Diagnostics.tsx     # Telemetry panels & scrolling ECG graph
│   ├── StatsAndTestimonials# Counters & scanline avatars
│   ├── CTA.tsx             # Interactive install simulator
│   └── Footer.tsx          # Coordinates & newsletter validator
├── App.tsx                 # Main layout structure
├── index.css               # Google fonts, CRT overlays, custom scrollbar
└── main.tsx                # React entry mount
```
