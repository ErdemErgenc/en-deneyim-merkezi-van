import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Expand,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Film,
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, BRAND_CONTACT } from '../data/brandData';
import { ResilientImage } from './ResilientImage';

interface GallerySectionProps {
  onOpenImageModal: (imageUrl: string, title: string, desc: string) => void;
}

const FILTER_CATEGORIES = [
  { id: 'all', label: 'Tüm Görseller' },
  { id: 'calisma', label: 'EN Hall & EN Box' },
  { id: 'sinif', label: 'VIP Sınıf & Gölge Koç' },
  { id: 'mimari', label: 'Mimari & Sosyal Alan' },
];

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenImageModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [videoPlaying, setVideoPlaying] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const videoTourItem = GALLERY_ITEMS.find((item) => item.type === 'video-tour');
  const tourSlides = videoTourItem?.videoSlides || [
    '/assets/brand/yks-hazirlik.jpg',
    '/assets/brand/merkez-alan-9.jpg',
    '/assets/brand/merkez-alan-1.jpg',
    '/assets/brand/merkez-alan-5.jpg',
  ];

  const TOUR_CAPTIONS = [
    '01 / 06 — EN Deneyim Merkezi Karşılama ve Fuaye Alanı',
    '02 / 06 — EN Hall VIP Sessiz Kütüphane ve Çalışma Salonları',
    '03 / 06 — 4 Kişilik VIP Sınıflar ve Akıllı Tahta Uygulaması',
    '04 / 06 — EN Box Bireysel LED Aydınlatmalı Odak Kabinleri',
    '05 / 06 — Gölge Koçluk ve Birebir Akademik Planlama Odası',
    '06 / 06 — ÜçDörtBeş All Star Kaynak ve Çalışma Masası Düzeni',
  ];

  useEffect(() => {
    if (!videoPlaying) return;
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % tourSlides.length);
    }, 3400);
    return () => window.clearInterval(timer);
  }, [videoPlaying, tourSlides.length]);

  const filteredPhotos = GALLERY_ITEMS.filter((item) => {
    if (item.type === 'video-tour') return false;
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section
      id="galeri"
      className="py-16 lg:py-24 bg-white border-b border-neutral-200/80"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Header & Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FF6B00]">
              <span>GERÇEK MEKÂN GALERİSİ</span>
              <span aria-hidden="true">·</span>
              <span>FOTOĞRAF VE TANITIM AKIŞI</span>
            </div>
            <h2 className="mt-3 font-display font-bold text-2xl sm:text-4xl text-[#141413] tracking-tight text-balance">
              EN Deneyim Merkezi’nin Atmosferini Yakından İnceleyin
            </h2>
          </div>

          {/* Functional Segmented Filter Buttons */}
          <div
            role="tablist"
            aria-label="Galeri Kategori Filtresi"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FAF8F5] border border-neutral-200 rounded-xl"
          >
            {FILTER_CATEGORIES.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#141413] text-white shadow-xs'
                      : 'text-neutral-600 hover:text-[#141413]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Video / Motion Tour Player Card */}
        <div className="mt-10 rounded-2xl overflow-hidden bg-[#141413] border border-neutral-900 text-white grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 relative min-h-[300px] sm:min-h-[420px] overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={tourSlides[currentSlide]}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <ResilientImage
                  src={tourSlides[currentSlide]}
                  alt={TOUR_CAPTIONS[currentSlide]}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            {/* Top Player Indicator */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/65 backdrop-blur-sm text-xs font-medium text-white">
                <Film className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>Merkez Görsel Turu · Otomatik Oynatıcı</span>
              </span>

              <button
                type="button"
                onClick={() =>
                  onOpenImageModal(
                    tourSlides[currentSlide],
                    TOUR_CAPTIONS[currentSlide],
                    'EN Deneyim Merkezi gerçek mekân tanıtım turu karesi.'
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black/65 hover:bg-[#FF6B00] text-white text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                <Expand className="w-3.5 h-3.5" />
                <span>Tam Ekran</span>
              </button>
            </div>

            {/* Bottom Player Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-4">
                <p className="font-display font-bold text-sm sm:text-lg text-white">
                  {TOUR_CAPTIONS[currentSlide]}
                </p>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentSlide(
                        (prev) => (prev - 1 + tourSlides.length) % tourSlides.length
                      )
                    }
                    aria-label="Önceki Kare"
                    className="w-9 h-9 rounded-lg bg-white/15 hover:bg-[#FF6B00] text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setVideoPlaying((prev) => !prev)}
                    aria-label={videoPlaying ? 'Duraklat' : 'Oynat'}
                    className="px-3.5 h-9 rounded-lg bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {videoPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>Duraklat</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        <span>Oynat</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentSlide((prev) => (prev + 1) % tourSlides.length)
                    }
                    aria-label="Sonraki Kare"
                    className="w-9 h-9 rounded-lg bg-white/15 hover:bg-[#FF6B00] text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Progress Segments */}
              <div className="grid grid-cols-6 gap-1.5">
                {tourSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`${idx + 1}. kareye git`}
                    className={`h-1.5 rounded-full transition-colors cursor-pointer ${
                      idx === currentSlide
                        ? 'bg-[#FF6B00]'
                        : 'bg-white/25 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right 4 Columns: Video/Reels Context & Direct Instagram Reels Link */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-[#1A1918]">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#FFB800]">
                GÖRSEL VE VİDEO DENEYİMİ
              </span>
              <h3 className="mt-2 font-display font-bold text-xl sm:text-2xl text-white">
                Gerçek Çalışma Atmosferi, Gerçek Başarı Hikayeleri
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Sitemizde yer alan tüm görseller EN Deneyim Merkezi’nin gerçek kütüphane,
                EN Box kabin, VIP sınıf ve sosyal alanlarına aittir. Güncel Reels videolarımızı
                ve şube içi etkinlik kesitlerimizi resmi Instagram hesabımızdan izleyebilirsiniz.
              </p>

              <div className="mt-5 pt-5 border-t border-neutral-800">
                <ResilientImage
                  src="/assets/brand/kutuphane-slider.png"
                  alt="EN Deneyim Merkezi Mimari Kolaj"
                  className="w-full h-32 object-contain rounded-lg bg-black/40 p-2"
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-col gap-2.5">
              <a
                href={BRAND_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
              >
                <span>Instagram Reels Videolarını İzle</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Editorial / Masonry Photo Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item: GalleryItem, index: number) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2) }}
              className={`group relative rounded-2xl overflow-hidden border border-neutral-200 bg-[#141413] cursor-pointer ${
                index === 0 || index === 3 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              onClick={() =>
                onOpenImageModal(item.image, item.title, item.description)
              }
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <ResilientImage
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-white/90 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                    {item.categoryLabel}
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-black/60 group-hover:bg-[#FF6B00] text-white flex items-center justify-center transition-colors">
                    <Expand className="w-4 h-4" />
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display font-bold text-base sm:text-lg text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-300 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
