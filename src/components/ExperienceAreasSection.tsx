import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, X, Sparkles, ArrowRight } from 'lucide-react';
import {
  EXPERIENCE_AREAS,
  PACKAGE_MODELS,
  ExperienceArea,
} from '../data/brandData';
import { ResilientImage } from './ResilientImage';

interface ExperienceAreasSectionProps {
  onSelectPackageForContact: (packageName: string) => void;
}

export const ExperienceAreasSection: React.FC<ExperienceAreasSectionProps> = ({
  onSelectPackageForContact,
}) => {
  const [selectedArea, setSelectedArea] = useState<ExperienceArea | null>(null);

  return (
    <section
      id="deneyim-alanlari"
      className="py-16 lg:py-24 bg-[#FAF8F5] bg-architectural-grid border-b border-neutral-200/80"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FF6B00]">
              <span>DENEYİM ALANLARI VE EĞİTİM EKOSİSTEMİ</span>
              <span aria-hidden="true">·</span>
              <span>7 GERÇEK MODÜL</span>
            </div>
            <h2 className="mt-3 font-display font-bold text-2xl sm:text-4xl text-[#141413] tracking-tight text-balance">
              Sınav Hazırlığında İhtiyacın Olan Tüm Alanlar Tek Merkezde
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed">
            EN Deneyim Merkezi Van şubesinde yer alan her alan, öğrencinin odaklanma süresini
            artırmak ve akademik eksiklerini en hızlı şekilde kapatmak üzere tasarlanmıştır.
          </p>
        </div>

        {/* Asymmetric Bento Grid of Experience Areas */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {EXPERIENCE_AREAS.map((area, idx) => (
            <motion.article
              key={area.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.25) }}
              className={`${area.spanClass} group bg-white rounded-2xl border border-neutral-200/90 hover:border-[#FF6B00] overflow-hidden flex flex-col justify-between transition-colors duration-200`}
            >
              {/* Top Image Area */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-[#141413]">
                <ResilientImage
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                {/* Top Index & Unboxed Subtitle */}
                <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="font-mono-tabular text-xs font-semibold text-white bg-black/65 backdrop-blur-sm px-2.5 py-1 rounded">
                    {area.index} · {area.subtitle}
                  </span>

                  {area.badgeSvg && (
                    <div className="bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded shadow-sm">
                      <img
                        src={area.badgeSvg}
                        alt={area.title}
                        className="h-5 w-auto object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Title Over Image Bottom */}
                <div className="absolute bottom-3.5 left-4 right-4">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white leading-snug">
                    {area.title}
                  </h3>
                </div>
              </div>

              {/* Card Body & Action */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {area.shortDesc}
                  </p>

                  {/* 2 Key Highlights Preview */}
                  <ul className="mt-4 pt-4 border-t border-neutral-100 space-y-1.5">
                    {area.highlights.slice(0, 2).map((hl) => (
                      <li
                        key={hl}
                        className="flex items-start gap-2 text-xs text-neutral-700"
                      >
                        <Check className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between gap-4">
                  <span className="text-xs text-neutral-500 truncate">
                    EN Deneyim Merkezi Van
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedArea(area)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#FF6B00] hover:text-[#141413] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Alanı İncele</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Verified Subscription & Performance Packages Strip (Solo / Elite / Premium) */}
        <div className="mt-16 pt-14 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FF6B00]">
                <span>KİŞİSELLEŞTİRİLMİŞ PERFORMANS PAKETLERİ</span>
                <span aria-hidden="true">·</span>
                <span>SOLO · ELITE · PREMIUM</span>
              </div>
              <h3 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-[#141413]">
                Çalışma Tarzına Uygun EN Deneyim Paketi Seçenekleri
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-md">
              İster sadece sessiz kütüphane ve deneme kulübü, ister Gölge Koçluk ve 4 kişilik VIP
              sınıf dersleriyle tam kapsamlı hazırlık.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {PACKAGE_MODELS.map((pkg, i) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-colors ${
                  pkg.highlighted
                    ? 'bg-[#141413] text-white border-[#141413]'
                    : 'bg-white text-[#141413] border-neutral-200/90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs font-mono-tabular font-semibold ${
                        pkg.highlighted ? 'text-[#FFB800]' : 'text-[#FF6B00]'
                      }`}
                    >
                      0{i + 1} · {pkg.tagline}
                    </span>
                    {pkg.highlighted && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#FFB800]">
                        <Sparkles className="w-3.5 h-3.5" />
                        Yoğun Tercih Edilen
                      </span>
                    )}
                  </div>

                  <h4 className="mt-2 font-display font-bold text-2xl">
                    {pkg.name}
                  </h4>
                  <p
                    className={`mt-2.5 text-xs sm:text-sm leading-relaxed ${
                      pkg.highlighted ? 'text-neutral-300' : 'text-neutral-600'
                    }`}
                  >
                    {pkg.description}
                  </p>

                  <ul
                    className={`mt-6 pt-5 border-t space-y-2.5 ${
                      pkg.highlighted ? 'border-neutral-800' : 'border-neutral-100'
                    }`}
                  >
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            pkg.highlighted ? 'text-[#FFB800]' : 'text-[#FF6B00]'
                          }`}
                        />
                        <span className={pkg.highlighted ? 'text-neutral-100' : 'text-neutral-700'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectPackageForContact(pkg.name)}
                  className={`mt-7 w-full py-3 px-4 rounded-lg font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap ${
                    pkg.highlighted
                      ? 'bg-[#FF6B00] hover:bg-[#e05e00] text-white'
                      : 'bg-[#141413] hover:bg-[#FF6B00] text-white'
                  }`}
                >
                  <span>{pkg.name} İçin Bilgi Al</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Experience Area Modal */}
      <AnimatePresence>
        {selectedArea && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedArea(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden border border-neutral-200 shadow-2xl my-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-area-title"
            >
              <div className="relative h-64 sm:h-80 bg-[#141413]">
                <ResilientImage
                  src={selectedArea.image}
                  alt={selectedArea.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <button
                  type="button"
                  onClick={() => setSelectedArea(null)}
                  aria-label="Pencereyi Kapat"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/65 hover:bg-[#FF6B00] text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-5 left-6 right-6">
                  <span className="text-xs font-mono-tabular font-semibold text-[#FFB800]">
                    {selectedArea.index} · {selectedArea.subtitle}
                  </span>
                  <h3
                    id="modal-area-title"
                    className="mt-1 font-display font-bold text-2xl sm:text-3xl text-white"
                  >
                    {selectedArea.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {selectedArea.fullDesc}
                </p>

                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                    Öne Çıkan Özellikler ve Donanım
                  </h4>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedArea.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAF8F5] border border-neutral-200/80 text-xs sm:text-sm text-[#141413]"
                      >
                        <Check className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-neutral-200/80">
                  <div className="text-xs font-semibold text-[#FF6B00]">
                    Kimler İçin İdeal?
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-700">
                    {selectedArea.idealFor}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setSelectedArea(null)}
                    className="px-4 py-2.5 rounded-lg border border-neutral-300 text-xs sm:text-sm font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    Kapat
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const title = selectedArea.title;
                      setSelectedArea(null);
                      onSelectPackageForContact(title);
                    }}
                    className="px-5 py-2.5 rounded-lg bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Bu Alan İçin Randevu & Bilgi Al
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
