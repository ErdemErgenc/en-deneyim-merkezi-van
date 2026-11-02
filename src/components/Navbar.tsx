import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X, Phone, ArrowUpRight, MapPin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BRAND_CONTACT } from '../data/brandData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { id: 'hakkimizda', label: 'Hakkımızda' },
  { id: 'deneyim-alanlari', label: 'Deneyim Alanları' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'etkinlikler', label: 'Etkinlikler' },
  { id: 'iletisim', label: 'İletişim' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF6B00] via-[#FFB800] to-[#FF6B00] origin-left z-50 pointer-events-none"
      />

      <header
        className={`sticky top-0 z-40 transition-colors duration-200 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-neutral-200/80'
            : 'bg-[#FAF8F5] border-b border-neutral-200/60'
        }`}
      >
        <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-8 px-5 sm:px-8 h-16 md:h-20">
          {/* Zone 1: Single Brand Wordmark & Logo Lockup */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex items-center gap-3 text-lg font-bold tracking-tight text-[#141413] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#FF6B00]"
          >
            <BrandLogo variant="dark" className="h-9 md:h-10 w-auto shrink-0" />
            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#141413]">
              EN Deneyim Merkezi
            </span>
          </a>

          {/* Zone 2: 5 Concise Single-Line Navigation Links */}
          <nav
            aria-label="Ana Menü"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className="relative py-1 text-neutral-700 hover:text-[#141413] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#FF6B00] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#iletisim"
              onClick={(e) => handleLinkClick(e, 'iletisim')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#141413] hover:bg-[#FF6B00] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              Bize Ulaşın
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-neutral-200 text-[#141413] hover:border-[#FF6B00] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden border-b border-neutral-200 bg-[#FAF8F5] px-5 pt-4 pb-6 shadow-xl"
            >
              <nav className="flex flex-col space-y-1" aria-label="Mobil Menü">
                {NAV_ITEMS.map((item, idx) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className="flex items-center justify-between py-3 px-3 rounded-lg text-base font-display font-semibold text-[#141413] hover:bg-neutral-100 transition-colors"
                  >
                    <span>
                      <span className="font-mono-tabular text-xs text-[#FF6B00] mr-2.5">
                        0{idx + 1}.
                      </span>
                      {item.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                  </a>
                ))}
              </nav>

              <div className="mt-5 pt-5 border-t border-neutral-200 flex flex-col gap-3">
                <div className="flex items-start gap-2.5 text-xs text-neutral-600">
                  <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span>{BRAND_CONTACT.addressPrimary}</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href={BRAND_CONTACT.phoneHref}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#141413] text-white text-xs font-semibold whitespace-nowrap"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FFB800]" />
                    Hemen Ara
                  </a>
                  <a
                    href="#iletisim"
                    onClick={(e) => handleLinkClick(e, 'iletisim')}
                    className="inline-flex items-center justify-center py-3 px-4 rounded-lg bg-[#FF6B00] text-white text-xs font-semibold whitespace-nowrap"
                  >
                    Bize Ulaşın
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
