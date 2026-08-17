import React, { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Mailto fallback link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-[#293056]/50 bg-[#080B18]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141A32] border border-[#06B6D4]/40 text-xs font-mono text-[#06B6D4]">
            <Send className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Let's <span className="bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">Build Something</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5B4FC] max-w-xl">
            I'm currently looking for AI/ML internship opportunities, collaborative projects, and opportunities to learn from experienced engineers.
          </p>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-[#293056] space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#06B6D4]" />
                Direct Contact Channels
              </h3>

              <div className="space-y-4 text-sm text-[#A5B4FC]">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#10152A] border border-[#293056] hover:border-[#06B6D4] transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#06B6D4]/10 text-[#06B6D4] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A5B4FC] uppercase block">Email Address</span>
                    <span className="text-sm font-semibold text-white">{PERSONAL_INFO.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#10152A] border border-[#293056]">
                  <div className="p-2.5 rounded-lg bg-[#22C55E]/10 text-[#22C55E]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A5B4FC] uppercase block">Location</span>
                    <span className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Link Cards */}
              <div className="pt-4 border-t border-[#293056] flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#10152A] border border-[#293056] hover:border-[#7C3AED] hover:text-white text-[#A5B4FC] flex items-center justify-center gap-2 font-bold text-xs transition-all"
                >
                  <Github className="w-4 h-4 text-[#7C3AED]" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#10152A] border border-[#293056] hover:border-[#2563EB] hover:text-white text-[#A5B4FC] flex items-center justify-center gap-2 font-bold text-xs transition-all"
                >
                  <Linkedin className="w-4 h-4 text-[#2563EB]" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl border border-[#293056] space-y-5">
              
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-[#A5B4FC] uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#10152A] border border-[#293056] text-white text-sm focus:outline-none focus:border-[#06B6D4] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-[#A5B4FC] uppercase">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#10152A] border border-[#293056] text-white text-sm focus:outline-none focus:border-[#06B6D4] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-[#A5B4FC] uppercase">
                  Message / Project Scope
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Devidutta, I came across your portfolio and would love to discuss an AI/ML role or collaboration..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#10152A] border border-[#293056] text-white text-sm focus:outline-none focus:border-[#06B6D4] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] shadow-lg shadow-[#7C3AED]/25 hover:shadow-[#06B6D4]/40 hover:scale-[1.01] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Opening mail client... Message prepared for Devidutta!</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
