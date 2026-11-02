import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Expand, MapPin, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { ResilientImage } from './ResilientImage';
import { BRAND_CONTACT } from '../data/brandData';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenImageModal: (imageUrl: string, title: string, desc: string) => void;
}

const HERO_SCENES = [
  {
    id: 'fuaye',
    label: '01. Fuaye & Sosyal Alan',
    title: 'EN Deneyim Merkezi Karşılama ve Dinlenme Alanı',
    caption: 'Turuncu-antrasit mimari kimlik, ferah dinlenme alanları ve yüksek motivasyonlu kampüs atmosferi.',
    image: '/assets/brand/yks-hazirlik.jpg',
  },
  {
    id: 'enhall',
    label: '02. EN Hall Kütüphane',
    title: 'EN Hall — VIP Sessiz Çalışma Salonları',
    caption: 'Akustik bölmeli geniş çalışma masaları, ergonomik koltuklar ve kesintisiz odaklanma düzeni.',
    image: '/assets/brand/merkez-alan-9.jpg',
  },
  {
    id: 'vipsinif',
    label: '03. 4 Kişilik VIP Sınıf',
    title: 'Akıllı Tahta Donanımlı 4 Kişilik VIP Sınıflar',
    caption: 'Kalabalık sınıflar yerine maksimum 4 kişilik butik gruplarda birebir etkileşimli ders işlenişi.',
    image: '/assets/brand/merkez-alan-1.jpg',
  },
  {
    id: 'enbox',
    label: '04. EN Box Kabinler',
    title: 'EN Box — Bireysel Odak Kabinleri',
    caption: 'Sıcak LED okuma aydınlatması ve üstten kilitli kişisel dolaplarla derin çalışma alanı.',
    image: '/assets/brand/merkez-alan-5.jpg',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenImageModal,
}) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const activeScene = HERO_SCENES[activeSceneIndex];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#FAF8F5] bg-architectural-grid border-b border-neutral-200/80"
    >
      {/* Subtle animated geometric architectural accents */}
      <motion.div
         aria-hidden="true"
        animate={{ rotate: [0, 4, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full border border-[#FF6B00]/15"
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: [0, -5, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-24 right-12 w-[340px] h-[340px] rounded-full border border-[#FFB800]/20"
      />

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 pt-8 pb-12 lg:pt-14 lg:pb-16">
        {/* Main 2-Column Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Brand Identity, Headline, Value Prop & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between py-2"
          >
            <div>
              {/* Large Prominent EN Deneyim Merkezi Logo & Unboxed Kicker */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 mb-6 border-b border-neutral-200/80">
                <BrandLogo variant="dark" className="h-14 sm:h-16 w-auto shrink-0" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FF6B00]">
                    <span>VAN ŞUBESİ</span>
                    <span aria-hidden="true">·</span>
                    <span>İPEKYOLU</span>
                    <span aria-hidden="true">·</span>
                    <span>YENİ NESİL EĞİTİM</span>
                  </div>
                  <p className="text-xs text-neutral-600 mt-1">
                    VIP Kütüphane · Gölge Koçluk · 4 Kişilik VIP Sınıf · Türkiye Geneli Deneme Kulübü
                  </p>
                </div>
              </div>

              {/* Hero Display Headline */}
              <h1
                className="font-display font-extrabold text-[#141413] tracking-tight leading-[1.06] text-balance"
                style={{ fontSize: 'clamp(2.35rem, 4.3vw, 4rem)' }}
              >
                Keşfet,{' '}
                <span className="text-[#FF6B00] underline decoration-[#FFB800] decoration-4 underline-offset-8">
                  Deneyimle,
                </span>{' '}
                Öğren!
              </h1>

              {/* Editorial Lead Copy */}
              <p className="mt-6 text-base sm:text-lg text-neutral-700 leading-relaxed max-w-[62ch]">
                Ezberleyen değil, kendi potansiyelini keşfederek öğrenen bir nesil için Van’dayız.{' '}
                <strong className="font-semibold text-[#141413]">EN Hall</strong> sessiz çalışma
                salonları, <strong className="font-semibold text-[#141413]">EN Box</strong> bireysel
                odak kabinleri, birebir{' '}
                <strong className="font-semibold text-[#141413]">Gölge Koçluk</strong> takibi,{' '}
                <strong className="font-semibold text-[#141413]">4 kişilik VIP sınıflar</strong> ve{' '}
                <strong className="font-semibold text-[#141413]">ÜçDörtBeş All Star</strong>{' '}
                ayrıcalıklarıyla YKS ve LGS hazırlığında tüm ihtiyaçların tek merkezde.
              </p>
            </div>

            {/* CTA Action Group & Direct Contact Bar */}
            <div className="mt-8 pt-6 border-t border-neutral-200/80">
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => onNavigate('deneyim-alanlari')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#FF6B00] hover:bg-[#e05e00] text-white font-semibold text-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
                >
                  <Compass className="w-4 h-4" />
                  <span>Merkezimizi Keşfet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('iletisim')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#141413] hover:bg-neutral-800 text-white font-semibold text-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Bize Ulaşın</span>
                </button>

                <a
                  href={BRAND_CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg border border-neutral-300 hover:border-[#FF6B00] text-[#141413] text-sm font-medium transition-colors whitespace-nowrap shrink-0"
                >
                  <Phone className="w-4 h-4 text-[#FF6B00]" />
                  <span className="font-mono-tabular">{BRAND_CONTACT.phoneDisplay}</span>
                </a>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-600">
                <span className="inline-flex items-center gap-1.5 font-medium text-[#141413]">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
                  {BRAND_CONTACT.addressPrimary}
                </span>
                <span aria-hidden="true">·</span>
                <span>Deluxe Life Rezidans, Gölbaşı 4. Sokak Altı</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Real Center Photo Composition */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between bg-[#141413] rounded-2xl p-4 sm:p-5 text-white border border-neutral-900"
          >
            {/* Primary Real Photograph Viewport */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[380px] rounded-xl overflow-hidden group">
              <ResilientImage
                key={activeScene.image}
                src={activeScene.image}
                alt={activeScene.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* Measured Gradient Scrim for 4.5:1 Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Top Controls on Image */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                <span className="text-xs font-medium tracking-wide text-white/90 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-md">
                  Gerçek Merkez Fotoğrafı · {activeScene.label}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    onOpenImageModal(activeScene.image, activeScene.title, activeScene.caption)
                  }
                  aria-label="Görseli Tam Ekran İncele"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black/65 hover:bg-[#FF6B00] text-white text-xs font-medium backdrop-blur-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Expand className="w-3.5 h-3.5" />
                  <span>Tam Ekran</span>
                </button>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="font-display font-bold text-lg sm:text-xl text-white">
                  {activeScene.title}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-200 mt-1 line-clamp-2">
                  {activeScene.caption}
                </p>
              </div>
            </div>

            {/* Interactive Scene Switcher Tabs (Functional Controls) */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {HERO_SCENES.map((scene, index) => {
                const isActive = index === activeSceneIndex;
                return (
                  <button
                    key={scene.id}
                    type="button"
                    onClick={() => setActiveSceneIndex(index)}
                    className={`text-left p-2.5 rounded-lg border transition-colors duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-[#FF6B00] border-[#FF6B00] text-white'
                        : 'bg-[#1E1D1C] border-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-semibold truncate">{scene.label}</div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Institutional Architecture Strip Below Hero Split */}
        <div className="mt-10 pt-8 border-t border-neutral-200/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col justify-between p-5 rounded-xl bg-white border border-neutral-200/80">
            <span className="text-xs font-medium text-neutral-500">
              01 · Butik Ders Modeli
            </span>
            <div className="mt-2 font-display font-bold text-2xl sm:text-3xl text-[#141413] font-mono-tabular">
              4 Kişilik VIP
            </div>
            <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
              Maksimum 4 kişilik özel sınıflar ve birebir EN Özel Ders ile yüksek etkileşimli öğrenme.
            </p>
          </div>

          <div className="flex flex-col justify-between p-5 rounded-xl bg-white border border-neutral-200/80">
            <span className="text-xs font-medium text-neutral-500">
              02 · Ölçme ve Değerlendirme
            </span>
            <div className="mt-2 font-display font-bold text-2xl sm:text-3xl text-[#FF6B00] font-mono-tabular">
              200+ Şube
            </div>
            <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
              Türkiye geneli EN Deneme Kulübü simülasyonları ve çok boyutlu EN Analiz karneleri.
            </p>
          </div>

          <div className="flex flex-col justify-between p-5 rounded-xl bg-white border border-neutral-200/80">
            <span className="text-xs font-medium text-neutral-500">
              03 · Yeni Nesil Kütüphane
            </span>
            <div className="mt-2 font-display font-bold text-2xl sm:text-3xl text-[#141413]">
              EN Box & Hall
            </div>
            <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
              İzole bireysel çalışma kabinleri, sessiz çalışma salonları ve kilitli kişisel dolaplar.
            </p>
          </div>

          <div className="flex flex-col justify-between p-5 rounded-xl bg-white border border-neutral-200/80">
            <span className="text-xs font-medium text-neutral-500">
              04 · Stratejik İş Birliği
            </span>
            <div className="mt-2 font-display font-bold text-2xl sm:text-3xl text-[#141413]">
              345 All Star
            </div>
            <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
              ÜçDörtBeş All Star basılı ve dijital hazırlık ekosistemi ile Gölge Koçluk takibi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
