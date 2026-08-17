import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2, Sparkles, User, Cpu, BookOpen, FolderGit2, Users, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'learning', 'projects', 'community', 'beyond', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Learning', href: '#learning', icon: BookOpen },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Community', href: '#community', icon: Users },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="top-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B18]/85 backdrop-blur-md border-b border-[#293056]/80 py-3 shadow-xl shadow-[#080B18]/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-[#7C3AED] via-[#EC4899] to-[#06B6D4] p-[1.5px] flex items-center justify-center shadow-lg shadow-[#7C3AED]/20 group-hover:shadow-[#06B6D4]/40 transition-all overflow-hidden">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <span className="font-extrabold tracking-tight">
            Devidutta<span className="text-[#06B6D4] font-medium">.Das</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-[#7C3AED]/15 text-[#A5B4FC] border border-[#7C3AED]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse"></span>
            AI/ML
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#10152A]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#293056]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs lg:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white font-semibold shadow-md shadow-[#7C3AED]/30'
                    : 'text-[#A5B4FC] hover:text-white hover:bg-[#141A32]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="group relative inline-flex items-center gap-2 text-xs lg:text-sm font-semibold px-4 py-2 rounded-xl text-white bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] p-[1px] hover:shadow-lg hover:shadow-[#7C3AED]/30 transition-all active:scale-95"
          >
            <div className="w-full h-full bg-[#10152A] group-hover:bg-transparent rounded-[11px] px-3.5 py-1.5 flex items-center gap-2 transition-all duration-300">
              <FileText className="w-4 h-4 text-[#06B6D4] group-hover:text-white transition-colors" />
              <span>Resume</span>
            </div>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="nav-resume-btn-mobile-top"
            onClick={onOpenResume}
            className="p-2 text-[#06B6D4] bg-[#141A32] rounded-lg border border-[#293056]"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#141A32] text-[#F8FAFC] border border-[#293056] focus:outline-none hover:border-[#7C3AED]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#EC4899]" /> : <Menu className="w-6 h-6 text-[#06B6D4]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080B18]/95 backdrop-blur-xl border-b border-[#293056] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white font-semibold'
                      : 'text-[#A5B4FC] hover:bg-[#141A32] hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#06B6D4]" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-[#293056] flex flex-col gap-2">
            <button
              id="nav-resume-btn-mobile-drawer"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] shadow-lg shadow-[#7C3AED]/25"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
