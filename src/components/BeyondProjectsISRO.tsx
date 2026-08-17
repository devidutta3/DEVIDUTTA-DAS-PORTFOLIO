import React, { useState } from 'react';
import { Orbit, Satellite, Sparkles, MapPin, Users, Layers, Activity, CheckCircle2, Info } from 'lucide-react';
import { ISRO_HACKATHON_DETAILS } from '../data/portfolioData';

export const BeyondProjectsISRO: React.FC = () => {
  const [activeBandIndex, setActiveBandIndex] = useState(0);

  const bands = [
    { band: "B8 (NIR)", spectrum: "Near Infrared", res: "10m", use: "Canopy biomass & leaf structure reflection", color: "#22C55E" },
    { band: "B4 (Red)", spectrum: "Red Optical", res: "10m", use: "Chlorophyll absorption peak detection", color: "#EC4899" },
    { band: "B11 (SWIR1)", spectrum: "Shortwave Infrared", res: "20m", use: "Plant leaf water content & soil moisture", color: "#06B6D4" },
    { band: "VV / VH (SAR)", spectrum: "C-Band Synthetic Aperture Radar", res: "10m", use: "All-weather surface roughness & crop structure", color: "#7C3AED" },
  ];

  return (
    <section id="beyond" className="py-24 relative z-10 border-t border-[#293056]/50 bg-[#080B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141A32] border border-[#06B6D4]/40 text-xs font-mono text-[#06B6D4]">
            <Orbit className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '12s' }} />
            <span>GEOSPATIAL & REMOTE SENSING INITIATIVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Beyond <span className="bg-gradient-to-r from-[#22C55E] via-[#06B6D4] to-[#2563EB] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5B4FC] max-w-xl">
            Applying satellite remote sensing and machine learning to tackle agricultural moisture stress and crop monitoring challenges.
          </p>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#22C55E] to-[#2563EB]"></div>
        </div>

        {/* Hackathon Showcase Feature Card */}
        <div className="glass-panel rounded-3xl p-8 lg:p-12 border border-[#22C55E]/30 relative overflow-hidden">
          
          {/* Corner Glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#22C55E]/15 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#06B6D4]/15 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 items-center">
            
            {/* Left Column Info */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[#22C55E] via-[#06B6D4] to-[#2563EB] text-white shadow-md">
                  {ISRO_HACKATHON_DETAILS.title}
                </span>
                <span className="text-xs font-mono text-[#22C55E] flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10152A] border border-[#22C55E]/30">
                  <MapPin className="w-3.5 h-3.5" />
                  Study Region: {ISRO_HACKATHON_DETAILS.studyRegion}
                </span>
                <span className="text-xs font-mono text-[#A5B4FC] flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10152A] border border-[#293056]">
                  <Users className="w-3.5 h-3.5 text-[#06B6D4]" />
                  Team: {ISRO_HACKATHON_DETAILS.team}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                {ISRO_HACKATHON_DETAILS.challenge}
              </h3>

              <p className="text-xs sm:text-sm text-[#A5B4FC] leading-relaxed">
                Utilized Google Earth Engine to process Sentinel-1 SAR and Sentinel-2 multi-spectral optical imagery over agricultural districts in Odisha, India. Created an automated pipeline computing spectral vegetation and moisture indices for automated crop type classification and localized irrigation advisories.
              </p>

              {/* Technologies Used */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono font-bold uppercase text-[#A5B4FC]">Platform & Remote Sensing Stack:</span>
                <div className="flex flex-wrap gap-2">
                  {ISRO_HACKATHON_DETAILS.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1 rounded-lg bg-[#10152A] text-[#06B6D4] border border-[#293056]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Satellite Sensor Spectrum Interactive Visualizer */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-[#10152A] border border-[#293056] space-y-4">
                <div className="flex items-center justify-between border-b border-[#293056] pb-3">
                  <span className="text-xs font-mono font-bold text-white flex items-center gap-2">
                    <Satellite className="w-4 h-4 text-[#06B6D4]" />
                    Satellite Spectral Bands (Sentinel-1 & 2)
                  </span>
                  <span className="text-[10px] font-mono text-[#22C55E]">GEE Fusion</span>
                </div>

                <div className="space-y-2">
                  {bands.map((b, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveBandIndex(idx)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        activeBandIndex === idx
                          ? 'bg-[#141A32] border-[#06B6D4] shadow-md'
                          : 'bg-[#080B18] border-[#293056] hover:border-[#7C3AED]/40'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="text-xs font-mono font-bold text-white" style={{ color: b.color }}>
                          {b.band} — {b.spectrum}
                        </span>
                        <p className="text-[11px] text-[#A5B4FC]">{b.use}</p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10152A] text-[#A5B4FC] border border-[#293056]">
                        {b.res}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Spectral Indices Cards Grid */}
          <div className="mt-10 pt-8 border-t border-[#293056] space-y-4">
            <h4 className="text-sm font-mono font-bold uppercase text-[#22C55E] flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#06B6D4]" />
              Formulated Remote Sensing Spectral Indices
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ISRO_HACKATHON_DETAILS.indices.map((idxItem, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#10152A] border border-[#293056] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-white font-mono">{idxItem.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#141A32] text-[#06B6D4]">Index 0{i+1}</span>
                  </div>
                  <span className="text-[11px] text-[#A5B4FC] block">{idxItem.fullName}</span>
                  <div className="p-2 rounded bg-[#080B18] text-[10px] font-mono text-[#22C55E] border border-[#293056]">
                    {idxItem.formula}
                  </div>
                  <p className="text-[11px] text-[#A5B4FC]/80 leading-snug pt-1">
                    {idxItem.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
