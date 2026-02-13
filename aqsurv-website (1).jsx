import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, MapPin, Radio, Wind, Briefcase, ChevronDown } from 'lucide-react';

const AQSURVWebsite = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Roboto+Mono:wght@400;700&display=swap');

        * {
          font-family: 'Roboto', sans-serif;
        }

        h1, h2, h3 { font-family: 'Roboto', sans-serif; font-weight: 700; letter-spacing: -0.02em; }

        .font-mono { font-family: 'Roboto Mono', monospace; }

        /* Animated gradient background */
        .gradient-shift {
          background: linear-gradient(-45deg, #0f172a, #1e293b, #0c4a6e, #0f172a);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* LiDAR scanning effect */
        .lidar-scan {
          position: relative;
          overflow: hidden;
        }

        .scan-line {
          position: absolute;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #00d9ff, transparent);
          animation: scanMove 3s linear infinite;
          filter: blur(1px);
        }

        @keyframes scanMove {
          0% { left: -2px; }
          100% { left: 100%; }
        }

        .grid-pattern {
          background-image: 
            linear-gradient(0deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* Floating animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .float-slow { animation: float 6s ease-in-out infinite; }
        .float-medium { animation: float 4s ease-in-out infinite 1s; }
        .float-fast { animation: float 3s ease-in-out infinite 2s; }

        /* Glow effect */
        .glow-cyan {
          box-shadow: 0 0 30px rgba(0, 217, 255, 0.3), inset 0 0 30px rgba(0, 217, 255, 0.1);
        }

        .glow-cyan-sm {
          box-shadow: 0 0 15px rgba(0, 217, 255, 0.2);
        }

        /* Reveal animation */
        @keyframes revealFromBottom {
          0% { 
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes revealFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .reveal-bottom { animation: revealFromBottom 0.8s ease-out forwards; }
        .reveal-left { animation: revealFromLeft 0.8s ease-out forwards; }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }

        /* Hover effects */
        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 217, 255, 0.2);
        }

        /* Pulse animation */
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }

        /* Text gradient */
        .text-gradient {
          background: linear-gradient(135deg, #00d9ff 0%, #0096ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Scroll indicator */
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .scroll-indicator { animation: scrollBounce 2s ease-in-out infinite; }

        /* Tech border */
        .tech-border {
          position: relative;
          border: 1px solid rgba(0, 217, 255, 0.2);
          background: linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, transparent 100%);
        }

        .tech-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.5), transparent);
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 1; transform: translateX(100%); }
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gradient">AQSURV</h1>
          <div className="flex gap-8 items-center">
            <a href="#capabilities" className="text-sm hover:text-cyan-400 transition">LiDAR & Photogrammetry</a>
            <a href="#products" className="text-sm hover:text-cyan-400 transition">Products</a>
            <a href="#partnerships" className="text-sm hover:text-cyan-400 transition">Partnerships</a>
            <a href="#industries" className="text-sm hover:text-cyan-400 transition">Industries</a>
            <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded font-semibold transition">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8 reveal-bottom">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <span className="text-cyan-400 text-sm font-mono">DJI Enterprise Solutions</span>
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 reveal-bottom delay-1 leading-tight">
            <span className="text-gradient">Survey</span><br />
            <span>with Precision</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 reveal-bottom delay-2">
            Advanced LiDAR and photogrammetry solutions for surveyors, construction managers, and renewable energy projects. Real-time data acquisition, centimeter-level accuracy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 reveal-bottom delay-3">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-lg flex items-center justify-center gap-2 transition group">
              Explore Now <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
            </button>
            <button className="px-8 py-4 border border-cyan-500/50 hover:bg-cyan-500/10 rounded-lg font-semibold transition">
              View Demo
            </button>
          </div>

          {/* Floating drone visualization */}
          <div className="relative h-64 flex items-center justify-center reveal-bottom delay-4">
            <div className="lidar-scan w-full h-64 flex items-center justify-center relative">
              <div className="scan-line"></div>
              <img 
                src="https://www.dji.com/downloads/images/m400_rtk/m400_rtk_hero.jpg"
                alt="DJI Matrice 400 RTK"
                className="h-48 object-contain relative z-20 opacity-90"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              {/* Fallback visualization if image doesn't load */}
              <div style={{display: 'none'}}>
                <div className="absolute w-40 h-40 rounded-full border-2 border-cyan-500/50 float-slow"></div>
                <div className="absolute w-32 h-32 rounded-full border-2 border-blue-500/30 float-medium"></div>
                <div className="absolute w-24 h-24 rounded-full border border-cyan-400/40 float-fast"></div>
                <div className="text-center z-10">
                  <Zap className="mx-auto mb-2 text-cyan-400 animate-pulse" size={32} />
                  <p className="text-sm font-mono text-cyan-400">LiDAR Active</p>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator flex justify-center mt-16">
            <ChevronDown className="text-cyan-400" size={24} />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Core Capabilities</h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">Enterprise-grade surveying technology for complex projects</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LiDAR Card */}
            <div className="tech-border rounded-lg p-8 card-hover relative group overflow-hidden">
              <img 
                src="https://www.dji.com/downloads/images/products/lidar/lidar_showcase.jpg"
                alt="LiDAR Technology"
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-15 transition"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 -z-10 transition"></div>
              <Radio className="text-cyan-400 mb-4 relative z-10" size={32} />
              <h3 className="text-2xl font-bold mb-4 relative z-10">LiDAR Technology</h3>
              <p className="text-slate-300 mb-6 relative z-10">Advanced Light Detection and Ranging for precise 3D mapping and topology capture.</p>
              <ul className="space-y-3 text-sm text-slate-400 relative z-10">
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>900m laser detection range</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>50mm absolute horizontal accuracy</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>40mm vertical accuracy</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>Real-time point cloud processing</span>
                </li>
              </ul>
            </div>

            {/* Photogrammetry Card */}
            <div className="tech-border rounded-lg p-8 card-hover relative group overflow-hidden">
              <img 
                src="https://www.dji.com/downloads/images/products/photogrammetry/photogrammetry_showcase.jpg"
                alt="Photogrammetry"
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-15 transition"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-20 -z-10 transition"></div>
              <MapPin className="text-blue-400 mb-4 relative z-10" size={32} />
              <h3 className="text-2xl font-bold mb-4 relative z-10">Photogrammetry</h3>
              <p className="text-slate-300 mb-6 relative z-10">High-resolution imaging with RTK positioning for accurate orthomosaic generation.</p>
              <ul className="space-y-3 text-sm text-slate-400 relative z-10">
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>20MP full-frame camera</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>2cm ground resolution at 120m altitude</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>RTK-enabled precise geo-tagging</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>Automated flight path planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6 relative">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold mb-4 text-center">Featured Platforms</h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">Enterprise systems powering professional surveying operations</p>

          {/* Image showcase row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="tech-border rounded-lg overflow-hidden group card-hover">
              <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative group-hover:from-slate-600 group-hover:to-slate-700 transition">
                <img 
                  src="https://enterprise.dji.com/matrice-400"
                  alt="Matrice 400 RTK"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Radio className="text-cyan-400 opacity-70" size={48} />
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold">M400 RTK Platform</h4>
                <p className="text-sm text-slate-400">59 min flight time, 6kg payload</p>
              </div>
            </div>

            <div className="tech-border rounded-lg overflow-hidden group card-hover">
              <div className="w-full h-48 bg-gradient-to-br from-blue-700 to-slate-800 flex items-center justify-center relative group-hover:from-blue-600 group-hover:to-slate-700 transition">
                <img 
                  src="https://enterprise.dji.com/zenmuse-l3"
                  alt="Zenmuse L3"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="text-blue-300 opacity-70" size={48} />
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold">Zenmuse L3 LiDAR</h4>
                <p className="text-sm text-slate-400">950m range, dual 100MP cameras</p>
              </div>
            </div>

            <div className="tech-border rounded-lg overflow-hidden group card-hover">
              <div className="w-full h-48 bg-gradient-to-br from-emerald-700 to-slate-800 flex items-center justify-center relative group-hover:from-emerald-600 group-hover:to-slate-700 transition">
                <svg className="w-24 h-24 text-emerald-300 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19.5v-15m0 0a1.5 1.5 0 110 3m0-3a1.5 1.5 0 100 3m0 0v10.5m6-16.5v15m0 0a1.5 1.5 0 110 3m0-3a1.5 1.5 0 100 3m0 0v10.5M9 9h6m-6 6h6" />
                </svg>
              </div>
              <div className="p-4">
                <h4 className="font-bold">RTK Positioning</h4>
                <p className="text-sm text-slate-400">1cm accuracy, dual GNSS</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Matrice 400 RTK */}
            <div className="tech-border rounded-lg overflow-hidden card-hover">
              <div className="bg-gradient-to-br from-cyan-600 via-slate-800 to-slate-900 p-8 h-72 flex items-center justify-center relative overflow-hidden">
                {/* Drone silhouette */}
                <svg className="absolute w-48 h-48 text-white opacity-20" fill="currentColor" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="20" />
                  <rect x="50" y="95" width="100" height="10" rx="5" />
                  <rect x="95" y="50" width="10" height="100" rx="5" />
                  <circle cx="40" cy="90" r="6" />
                  <circle cx="160" cy="90" r="6" />
                  <circle cx="100" cy="40" r="6" />
                  <circle cx="100" cy="160" r="6" />
                </svg>
                <div className="lidar-scan w-full h-full absolute inset-0">
                  <div className="scan-line"></div>
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="text-4xl font-bold">M400 RTK</h3>
                  <p className="text-cyan-300 text-sm font-mono mt-3 bg-slate-900/70 px-4 py-1 rounded-full inline-block">Enterprise Platform</p>
                  <p className="text-cyan-200 text-xs mt-4 max-w-xs">59-minute endurance | 6kg payload | Dual RTK GNSS</p>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-4">DJI Matrice 400 RTK</h4>
                <p className="text-slate-300 mb-6">The most advanced enterprise platform for surveying and mapping with integrated LiDAR, mmWave radar, and dual RTK positioning system.</p>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-slate-800 rounded-lg flex items-center justify-center border border-cyan-500/20 flex-shrink-0">
                      <Zap className="text-cyan-400" size={28} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">59 min Flight Time</p>
                      <p className="text-sm text-slate-400">Industry-leading endurance for large-area surveys</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-slate-800 rounded-lg flex items-center justify-center border border-cyan-500/20 flex-shrink-0">
                      <Radio className="text-cyan-400" size={28} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Dual RTK GNSS</p>
                      <p className="text-sm text-slate-400">cm-level positioning without ground station</p>
                    </div>
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-lg font-semibold transition">
                  Learn More
                </button>
              </div>
            </div>

            {/* Zenmuse L3 */}
            <div className="tech-border rounded-lg overflow-hidden card-hover">
              <div className="bg-gradient-to-br from-blue-600 via-slate-800 to-slate-900 p-8 h-72 flex items-center justify-center relative overflow-hidden">
                {/* LiDAR scanning visualization */}
                <svg className="absolute w-40 h-40 text-blue-300 opacity-25" fill="none" stroke="currentColor" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" strokeWidth="1" />
                  <circle cx="100" cy="100" r="60" strokeWidth="1" />
                  <circle cx="100" cy="100" r="40" strokeWidth="2" />
                  <line x1="100" y1="20" x2="100" y2="180" strokeWidth="1" opacity="0.5" />
                  <line x1="20" y1="100" x2="180" y2="100" strokeWidth="1" opacity="0.5" />
                  <path d="M 100 100 L 140 70 L 140 130 Z" fill="currentColor" opacity="0.3" />
                </svg>
                <div className="lidar-scan w-full h-full absolute inset-0">
                  <div className="scan-line"></div>
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="text-4xl font-bold">Zenmuse L3</h3>
                  <p className="text-blue-300 text-sm font-mono mt-3 bg-slate-900/70 px-4 py-1 rounded-full inline-block">Advanced LiDAR Payload</p>
                  <p className="text-blue-200 text-xs mt-4 max-w-xs">950m range | 3cm vertical accuracy | Dual 100MP RGB</p>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-4">DJI Zenmuse L3</h4>
                <p className="text-slate-300 mb-6">Next-generation 1535nm long-range LiDAR system with dual 100MP mapping cameras for advanced surveying with enhanced accuracy and efficiency.</p>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-slate-800 rounded-lg flex items-center justify-center border border-cyan-500/20 flex-shrink-0">
                      <Radio className="text-blue-400" size={28} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">950m LiDAR Range</p>
                      <p className="text-sm text-slate-400">Advanced 1535nm laser detection capability</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-slate-800 rounded-lg flex items-center justify-center border border-cyan-500/20 flex-shrink-0">
                      <MapPin className="text-blue-400" size={28} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Dual 100MP Cameras</p>
                      <p className="text-sm text-slate-400">107° FOV, 3cm GSD at 300m altitude</p>
                    </div>
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 rounded-lg font-semibold transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities Section */}
      <section id="partnerships" className="py-24 px-6 relative">
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">Grow your business with AQSURV. Join our network of certified partners and unlock new revenue streams in the surveying and mapping sector.</p>
          </div>

          {/* Partnership Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Solution Provider */}
            <div className="tech-border rounded-lg p-8 card-hover relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-15 -z-10 transition"></div>
              <div className="mb-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-500/50 mb-4">
                  <Briefcase className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Solution Partner</h3>
                <p className="text-sm text-emerald-400 font-mono">Tier 1</p>
              </div>
              <p className="text-slate-300 mb-6">Integrate AQSURV technology into your existing solutions and services.</p>
              <ul className="space-y-3 mb-8 text-sm text-slate-400">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Technical API & SDK access</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Co-marketing opportunities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Partner documentation & support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Revenue sharing model</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Quarterly business reviews</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 rounded-lg font-semibold transition">
                Learn More
              </button>
            </div>

            {/* Reseller Partner */}
            <div className="tech-border rounded-lg p-8 card-hover relative group border-cyan-400/50">
              <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 -z-10 transition"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
              </div>
              <div className="mb-6 mt-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/50 mb-4">
                  <Radio className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Certified Reseller</h3>
                <p className="text-sm text-cyan-400 font-mono">Tier 2 - Premium</p>
              </div>
              <p className="text-slate-300 mb-6">Authorized distributor of AQSURV solutions with full sales and support capabilities.</p>
              <ul className="space-y-3 mb-8 text-sm text-slate-400">
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Exclusive territory management</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Wholesale pricing & margins</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Sales & technical training</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Marketing fund allocation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Lead generation support</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-lg font-semibold transition">
                Apply Now
              </button>
            </div>

            {/* Service Partner */}
            <div className="tech-border rounded-lg p-8 card-hover relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-15 -z-10 transition"></div>
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/50 mb-4">
                  <Zap className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Service Partner</h3>
                <p className="text-sm text-blue-400 font-mono">Tier 3</p>
              </div>
              <p className="text-slate-300 mb-6">Provide professional services, training, and support using AQSURV technology.</p>
              <ul className="space-y-3 mb-8 text-sm text-slate-400">
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Certification program</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Service delivery resources</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Professional liability support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Project collaboration</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Training & development</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 rounded-lg font-semibold transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Partner Benefits Overview */}
          <div className="tech-border rounded-lg p-12 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">What Partners Receive</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "📚",
                  title: "Training & Certification",
                  desc: "Comprehensive training programs for your team on DJI hardware and AQSURV software"
                },
                {
                  icon: "🎯",
                  title: "Go-to-Market Support",
                  desc: "Co-branded marketing materials, sales playbooks, and industry event participation"
                },
                {
                  icon: "💰",
                  title: "Competitive Economics",
                  desc: "Attractive margin structures, volume discounts, and revenue-sharing opportunities"
                },
                {
                  icon: "🤝",
                  title: "Dedicated Support",
                  desc: "Priority technical support, account management, and quarterly business reviews"
                },
                {
                  icon: "🌍",
                  title: "Territory Rights",
                  desc: "Protected geographic territories and exclusive market access for qualified partners"
                },
                {
                  icon: "📊",
                  title: "Business Intelligence",
                  desc: "Market data, competitive analysis, and industry insights to drive growth"
                },
                {
                  icon: "🔧",
                  title: "Technical Resources",
                  desc: "API documentation, SDKs, sample code, and integration guidance"
                },
                {
                  icon: "⭐",
                  title: "Co-selling Initiatives",
                  desc: "Joint pursuit of enterprise deals with AQSURV field team support"
                }
              ].map((benefit, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h4 className="font-bold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-slate-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Success Stories */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Partner Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="tech-border rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    SV
                  </div>
                  <div>
                    <p className="font-bold">SurveyVision Inc.</p>
                    <p className="text-sm text-slate-400">Land Surveying</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">"Partnering with AQSURV transformed our survey operations. We've increased project throughput by 40% and expanded into renewable energy projects. The training and support have been exceptional."</p>
                <p className="text-sm font-mono text-cyan-400">— Robert Chen, Operations Director</p>
              </div>

              <div className="tech-border rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    GB
                  </div>
                  <div>
                    <p className="font-bold">GreenBuild Solutions</p>
                    <p className="text-sm text-slate-400">Construction Management</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">"As a certified reseller, we've developed a strong niche in construction site monitoring. The exclusive territory rights and marketing support have helped us grow 3x in 18 months."</p>
                <p className="text-sm font-mono text-emerald-400">— Maria Santos, CEO</p>
              </div>

              <div className="tech-border rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    RP
                  </div>
                  <div>
                    <p className="font-bold">RenewablePhotogrammetry</p>
                    <p className="text-sm text-slate-400">Wind Energy Consulting</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">"Our service partnership enables us to offer end-to-end drone surveying services for wind farms. AQSURV's technical support and certification program are industry-leading."</p>
                <p className="text-sm font-mono text-blue-400">— James Mitchell, Service Director</p>
              </div>

              <div className="tech-border rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    DG
                  </div>
                  <div>
                    <p className="font-bold">DataGeomatics Ltd.</p>
                    <p className="text-sm text-slate-400">GIS & Data Solutions</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">"As a solution partner, we've integrated AQSURV's LiDAR capabilities into our geospatial platform. The API access and joint marketing have opened tremendous B2B opportunities."</p>
                <p className="text-sm font-mono text-amber-400">— Lisa Wong, VP of Product</p>
              </div>
            </div>
          </div>

          {/* Requirements & Qualifications */}
          <div className="tech-border rounded-lg p-12 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Partner Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-cyan-400">Core Requirements</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Established business in surveying, construction, or geospatial sector</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Minimum 3 years industry experience</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Valid business registration & licensing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Professional liability insurance</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-blue-400">Growth Targets</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Resellers: Min. 6-12 units/year commitment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Service Partners: Min. 4 certified operators</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Solution Partners: Active integration roadmap</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Annual growth targets aligned with tier</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-emerald-400">Quality Standards</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Customer satisfaction score ≥ 4.5/5.0</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Completion of AQSURV certification</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Adherence to technical best practices</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Active market presence & marketing participation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="tech-border rounded-lg p-12 bg-gradient-to-br from-slate-800/50 to-transparent">
            <h3 className="text-3xl font-bold mb-8 text-center">Application Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                {
                  step: "01",
                  title: "Submit Application",
                  desc: "Complete the online partner application form with your business details and qualifications"
                },
                {
                  step: "02",
                  title: "Initial Review",
                  desc: "Our partnership team reviews your application and qualifications (1-2 weeks)"
                },
                {
                  step: "03",
                  title: "Discovery Call",
                  desc: "Meet with our partnership manager to discuss your business goals and partnership fit"
                },
                {
                  step: "04",
                  title: "Approval & Onboarding",
                  desc: "Upon approval, participate in training program and sign partnership agreement"
                }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{item.step}</div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition flex items-center gap-2">
                Start Partner Application <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Built for Professionals</h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">Trusted by industry leaders for mission-critical operations</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Surveyors",
                desc: "Precision mapping and boundary surveys with RTK accuracy",
                color: "cyan"
              },
              {
                icon: Briefcase,
                title: "Project Managers",
                desc: "Real-time project progress monitoring and 3D documentation",
                color: "blue"
              },
              {
                icon: Wind,
                title: "Renewable Energy",
                desc: "Wind farm surveys, solar site assessment, and site planning",
                color: "emerald"
              },
              {
                icon: Zap,
                title: "Construction",
                desc: "Site preparation, progress tracking, and volume calculations",
                color: "amber"
              }
            ].map((industry, idx) => {
              const Icon = industry.icon;
              const colors = {
                cyan: "text-cyan-400",
                blue: "text-blue-400",
                emerald: "text-emerald-400",
                amber: "text-amber-400"
              };
              return (
                <div 
                  key={idx}
                  className="tech-border rounded-lg p-6 card-hover"
                  style={{
                    animation: `revealFromBottom 0.8s ease-out ${0.1 + idx * 0.1}s both`
                  }}
                >
                  <Icon className={`${colors[industry.color]} mb-4`} size={32} />
                  <h3 className="font-bold text-lg mb-2">{industry.title}</h3>
                  <p className="text-sm text-slate-400">{industry.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Specs Comparison */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold mb-4 text-center">Technical Specifications</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full mt-12 border-collapse">
              <thead>
                <tr className="border-b border-cyan-500/20">
                  <th className="text-left py-4 px-6 font-bold text-slate-300">Specification</th>
                  <th className="text-center py-4 px-6 font-bold text-cyan-400">M400 RTK</th>
                  <th className="text-center py-4 px-6 font-bold text-blue-400">Zenmuse L3</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Flight Time", "59 min", "Integrated (on M400)"],
                  ["Max Speed", "75.6 km/h", "N/A"],
                  ["LiDAR Range", "LiDAR Included", "950m @ 10% reflectivity"],
                  ["Horizontal Accuracy", "1cm + 1ppm", "4cm (120m altitude)"],
                  ["Vertical Accuracy", "1.5cm + 1ppm", "3cm (120m altitude)"],
                  ["Imaging System", "6 gimbal options", "Dual 100MP RGB Cameras"],
                  ["Payload Capacity", "6.0 kg total", "1.6 kg (with gimbal)"],
                  ["Point Cloud Rate", "360K points/sec", "2M points/sec"]
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6">{row[0]}</td>
                    <td className="py-4 px-6 text-center text-cyan-300">{row[1]}</td>
                    <td className="py-4 px-6 text-center text-blue-300">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Franchisee Opportunities Section */}
      <section id="franchise" className="py-24 px-6 relative">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
              <span className="text-emerald-400 text-sm font-mono">Growth Opportunity</span>
            </div>
            <h2 className="text-5xl font-bold mb-4">Build Your Surveying Empire</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Join the AQSURV network and become a regional leader in advanced surveying technology. Proven business model. Industry-leading tools. Comprehensive support.</p>
          </div>

          {/* Franchise Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="tech-border rounded-lg p-8 card-hover">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 border border-emerald-500/30">
                <Briefcase className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Established Brand</h3>
              <p className="text-slate-300 mb-4">Leverage the AQSURV brand reputation with enterprise clients, government agencies, and construction firms already familiar with DJI technology.</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Recognized industry authority</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Trusted by major contractors</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Premium market positioning</span>
                </li>
              </ul>
            </div>

            <div className="tech-border rounded-lg p-8 card-hover">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6 border border-cyan-500/30">
                <Zap className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Technology</h3>
              <p className="text-slate-300 mb-4">Direct access to latest DJI Enterprise platforms with enterprise support, training, and competitive licensing agreements.</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>M400 RTK & Zenmuse L3</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Priority DJI partnership benefits</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Preferred equipment pricing</span>
                </li>
              </ul>
            </div>

            <div className="tech-border rounded-lg p-8 card-hover">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 border border-blue-500/30">
                <Radio className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Support</h3>
              <p className="text-slate-300 mb-4">Full operational support from training to marketing to technical assistance ensuring your success from day one.</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Pilot certification programs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Marketing & sales support</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>24/7 technical assistance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Partner with AQSURV */}
          <div className="tech-border rounded-lg p-12 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Why Choose AQSURV Franchise?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold">1</span>
                  High-Margin Revenue Streams
                </h4>
                <p className="text-slate-300 mb-6">Multiple income opportunities through equipment sales, services, training, and data processing. Average franchisee achieves profitability in 18-24 months.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold">2</span>
                  Growing Market Demand
                </h4>
                <p className="text-slate-300 mb-6">Surveying and mapping services are growing 15%+ annually. Construction spending, infrastructure projects, and renewable energy create consistent demand.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold">3</span>
                  B2B Focus - Stable Clients
                </h4>
                <p className="text-slate-300 mb-6">Target established construction firms, government agencies, and engineering companies with long-term contracts and recurring work.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold">4</span>
                  Scalable Operations
                </h4>
                <p className="text-slate-300 mb-6">Start with 1-2 platforms and grow to a multi-unit fleet. Expand services, hire certified pilots, build a regional powerhouse.</p>
              </div>
            </div>
          </div>

          {/* Service Offerings */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Comprehensive Service Portfolio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Surveying & Mapping", desc: "Land surveys, boundary surveys, topographic mapping with RTK accuracy" },
                { title: "Construction Management", desc: "Progress monitoring, volume calculations, site documentation" },
                { title: "Infrastructure Inspection", desc: "Power lines, bridges, buildings, telecom towers" },
                { title: "Renewable Energy", desc: "Wind farm surveys, solar assessments, environmental monitoring" },
                { title: "3D Point Cloud Processing", desc: "Data processing, CAD conversion, BIM integration" },
                { title: "Training & Certification", desc: "Pilot training, equipment operation, data processing courses" }
              ].map((service, idx) => (
                <div key={idx} className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-6 hover:border-emerald-500/30 transition">
                  <h4 className="font-bold mb-2">{service.title}</h4>
                  <p className="text-sm text-slate-400">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Franchise Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="tech-border rounded-lg p-8 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">$150K-$300K</div>
              <p className="text-sm text-slate-300">Initial Investment</p>
              <p className="text-xs text-slate-500 mt-2">Includes equipment, software, and training</p>
            </div>

            <div className="tech-border rounded-lg p-8 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">18-24</div>
              <p className="text-sm text-slate-300">Months to Profitability</p>
              <p className="text-xs text-slate-500 mt-2">Typical timeframe for established franchisees</p>
            </div>

            <div className="tech-border rounded-lg p-8 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">$500K+</div>
              <p className="text-sm text-slate-300">Annual Revenue Potential</p>
              <p className="text-xs text-slate-500 mt-2">Based on regional market and growth</p>
            </div>

            <div className="tech-border rounded-lg p-8 text-center">
              <div className="text-3xl font-bold text-violet-400 mb-2">50%+</div>
              <p className="text-sm text-slate-300">Gross Margin Target</p>
              <p className="text-xs text-slate-500 mt-2">Premium positioning enables strong margins</p>
            </div>
          </div>

          {/* Franchisee Requirements */}
          <div className="tech-border rounded-lg p-12 mb-16">
            <h3 className="text-2xl font-bold mb-8">Ideal Franchisee Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-emerald-400 mb-4">We're Looking For:</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-bold">→</span>
                    <span>Entrepreneurial mindset with business management experience</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-bold">→</span>
                    <span>Existing network in surveying, construction, or engineering sectors</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-bold">→</span>
                    <span>Capital availability ($150K-$300K) for initial setup</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-bold">→</span>
                    <span>Willingness to obtain drone pilot certification</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-bold">→</span>
                    <span>Commitment to AQSURV brand standards and training</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-bold">→</span>
                    <span>Sales and marketing ability to build client relationships</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-cyan-400 mb-4">Perfect Candidates:</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Licensed surveyors expanding service offerings</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Construction companies entering geospatial services</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Engineering consulting firms diversifying revenue</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Drone service providers scaling into surveying</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Real estate/development professionals with market access</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Former military/aerospace professionals with technical background</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Franchise Support */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Complete Franchisee Support System</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  phase: "Pre-Launch",
                  items: ["Business planning", "Market analysis", "Equipment procurement", "Facility setup"]
                },
                {
                  phase: "Launch",
                  items: ["Pilot certification courses", "Equipment training", "Software onboarding", "First client support"]
                },
                {
                  phase: "Growth",
                  items: ["Sales strategy guidance", "Marketing templates", "Continuous training", "Performance monitoring"]
                },
                {
                  phase: "Scaling",
                  items: ["Multi-unit expansion", "Team building support", "Advanced certifications", "Regional marketing"]
                }
              ].map((phase, idx) => (
                <div key={idx} className="tech-border rounded-lg p-6">
                  <h4 className="font-bold text-emerald-400 mb-4">{phase.phase}</h4>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-300 flex gap-2">
                        <span className="text-emerald-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA for Franchisees */}
          <div className="tech-border rounded-lg p-12 text-center bg-gradient-to-br from-emerald-500/5 to-cyan-500/5">
            <h3 className="text-3xl font-bold mb-4">Ready to Build Your Surveying Business?</h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Access enterprise-grade surveying technology, proven business systems, and dedicated support to launch your successful AQSURV franchise.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-lg transition flex items-center justify-center gap-2 group">
                Request Franchise Info <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
              </button>
              <button className="px-8 py-4 border border-emerald-500/50 hover:bg-emerald-500/10 rounded-lg font-semibold transition">
                Schedule Consultation
              </button>
            </div>
            <p className="text-sm text-slate-500 mt-6">Or contact our franchise director at franchise@aqsurv.com | +1 (555) SURVEY-1</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="tech-border rounded-lg p-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-slate-400 mb-8">Get started with AQSURV's advanced surveying platform and see the difference precision makes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 hover:bg-cyan-500/10 rounded-lg font-semibold transition">
                Request Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg text-gradient mb-4">AQSURV</h3>
              <p className="text-sm text-slate-400">Enterprise surveying solutions powered by DJI technology.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Matrice 400 RTK</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Zenmuse L3</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex justify-between items-center">
            <p className="text-sm text-slate-500">© 2024 AQSURV. Powered by DJI Enterprise.</p>
            <div className="flex gap-4 text-sm text-slate-500">
              <a href="#" className="hover:text-cyan-400 transition">Twitter</a>
              <a href="#" className="hover:text-cyan-400 transition">LinkedIn</a>
              <a href="#" className="hover:text-cyan-400 transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AQSURVWebsite;
