import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  CheckCircle2,
  Instagram,
  Sparkles,
  Target,
  Brain,
  Users,
  BarChart3,
} from 'lucide-react';
import {
  ANNOUNCEMENTS,
  INSTAGRAM_POSTS,
  BRAND_CONTACT,
} from '../data/brandData';
import { ResilientImage } from './ResilientImage';

interface EventsWhyInstagramSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenImageModal: (imageUrl: string, title: string, desc: string) => void;
}

const WHY_EN_PILLARS = [
  {
    index: '01',
    icon: Target,
    title: 'Kişiye Özel Gölge Koçluk Takibi',
    desc: 'Öğrenciyi yalnız bırakmayan, haftalık çalışma programını birebir hazırlayan ve her deneme sonrası stratejiyi güncelleyen uzman mentörlük.',
  },
  {
    index: '02',
    icon: Users,
    title: 'Kalabalık Değil, 4 Kişilik VIP Sınıflar',
    desc: '30 kişilik geleneksel sınıflar yerine maksimum 4 kişilik VIP gruplar ve nokta atışı birebir EN Özel Ders modeli.',
  },
  {
    index: '03',
    icon: BarChart3,
    title: 'Türkiye Geneli 200+ Şube Deneme Kulübü',
    desc: 'Seçkin yayınlarla Türkiye genelinde gerçek sıralama tespiti ve konu/kazanım bazlı Kayıp Puan (EN Analiz) karnesi.',
  },
  {
    index: '04',
    icon: Brain,
    title: 'NeuroSound, NeuroPass & 345 All Star',
    desc: 'ÜçDörtBeş All Star basılı/dijital kaynak ekosistemi ile dikkat ve odaklanmayı bilimsel olarak artıran bilişsel gelişim modülleri.',
  },
];

export const EventsWhyInstagramSection: React.FC<
  EventsWhyInstagramSectionProps
> = ({ onNavigate, onOpenImageModal }) => {
  return (
    <>
      {/* E. ETKİNLİKLER VE DUYURULAR */}
      <section
        id="etkinlikler"
        className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-neutral-200/80"
      >
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FF6B00]">
                <span>ETKİNLİKLER, PROGRAMLAR VE DUYURULAR</span>
                <span aria-hidden="true">·</span>
                <span>DOĞRULANMIŞ KAYITLAR</span>
              </div>
              <h2 className="mt-3 font-display font-bold text-2xl sm:text-4xl text-[#141413] tracking-tight text-balance">
                Merkezimizdeki Akademik Süreçler ve Kurumsal Duyurular
              </h2>
            </div>

            <a
              href={BRAND_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-300 hover:border-[#FF6B00] text-xs sm:text-sm font-semibold text-[#141413] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Güncel Takvim İçin {BRAND_CONTACT.instagramHandle}</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF6B00]" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ANNOUNCEMENTS.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden flex flex-col sm:flex-row items-stretch"
              >
                <div
                  className="sm:w-2/5 relative min-h-[220px] bg-[#141413] cursor-pointer group overflow-hidden"
                  onClick={() =>
                    onOpenImageModal(item.image, item.title, item.summary)
                  }
                >
                  <ResilientImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-medium text-white bg-black/65 px-2.5 py-1 rounded">
                    Görseli Büyüt
                  </span>
                </div>

                <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata with Typographic Separator */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#FF6B00]">
                      <span>{item.periodLabel}</span>
                    </div>

                    <h3 className="mt-2 font-display font-bold text-lg sm:text-xl text-[#141413] leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {item.summary}
                    </p>

                    <ul className="mt-4 space-y-1.5">
                      {item.details.map((det) => (
                        <li
                          key={det}
                          className="flex items-start gap-2 text-xs text-neutral-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 mt-0.5" />
                          <span>{det}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141413] hover:text-[#FF6B00] transition-colors whitespace-nowrap"
                    >
                      <span>Instagram Paylaşımını Gör</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => onNavigate('iletisim')}
                      className="text-xs font-semibold text-[#FF6B00] hover:underline cursor-pointer whitespace-nowrap"
                    >
                      Bilgi Al
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* F. NEDEN EN DENEYİM MERKEZİ? (High-Contrast Anthracite Architectural Section) */}
      <section
        id="neden-en"
        className="py-16 lg:py-24 bg-[#141413] bg-architectural-grid-dark text-white border-b border-neutral-900"
      >
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 5 Columns: Manifesto & Comparison */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FFB800]">
                <span>NEDEN EN DENEYİM MERKEZİ?</span>
                <span aria-hidden="true">·</span>
                <span>FARK YARATAN YAKLAŞIM</span>
              </div>

              <h2 className="mt-3 font-display font-extrabold text-2xl sm:text-4xl text-white tracking-wide leading-tight text-balance">
                Standart Kursların Ötesinde, Öğrenciyi Merkeze Alan Yeni Nesil Sistem
              </h2>

              <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                Sınav başarısı yalnızca ders dinlemekle değil; doğru planlanmış bireysel çalışma,
                nitelikli deneme analizi ve kesintisiz psikolojik/akademik takiple kazanılır.
              </p>

              {/* Comparison Table: Geleneksel vs EN Deneyim */}
              <div className="mt-8 rounded-xl bg-[#1E1D1C] border border-neutral-800 p-5 space-y-4">
                <div className="text-xs font-semibold tracking-wider text-[#FFB800]">
                  MODEL KARŞILAŞTIRMASI
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="pb-3 border-b border-neutral-800 flex justify-between gap-4">
                    <span className="text-neutral-400">Sınıf Mevcudu</span>
                    <span className="font-semibold text-white text-right">
                      4 Kişilik VIP Sınıf & Birebir Özel Ders
                    </span>
                  </div>
                  <div className="pb-3 border-b border-neutral-800 flex justify-between gap-4">
                    <span className="text-neutral-400">Rehberlik ve Takip</span>
                    <span className="font-semibold text-[#FFB800] text-right">
                      Her Öğrenciye Özel Gölge Koç
                    </span>
                  </div>
                  <div className="pb-3 border-b border-neutral-800 flex justify-between gap-4">
                    <span className="text-neutral-400">Çalışma Ortamı</span>
                    <span className="font-semibold text-white text-right">
                      EN Box İzole Kabin & EN Hall Salon
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-neutral-400">Kaynak & Ölçme</span>
                    <span className="font-semibold text-white text-right">
                      ÜçDörtBeş All Star & 200+ Şube Deneme
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: 4 Architectural Pillars Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_EN_PILLARS.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.index}
                    className="rounded-2xl bg-[#1E1D1C] border border-neutral-800 hover:border-[#FF6B00] p-6 flex flex-col justify-between transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono-tabular text-sm font-bold text-[#FF6B00]">
                          {pillar.index}.
                        </span>
                        <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/15 text-[#FFB800] flex items-center justify-center">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="mt-5 font-display font-bold text-lg sm:text-xl text-white">
                        {pillar.title}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                      <span>EN Deneyim Standardı</span>
                      <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* G. INSTAGRAM ENTEGRASYONU (@endeneyim.van) */}
      <section
        id="instagram"
        className="py-16 lg:py-24 bg-white border-b border-neutral-200/80"
      >
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FF6B00]">
                <span>SOSYAL MEDYADA BİZ</span>
                <span aria-hidden="true">·</span>
                <span>{BRAND_CONTACT.instagramHandle}</span>
              </div>
              <h2 className="mt-2 font-display font-bold text-2xl sm:text-4xl text-[#141413] tracking-tight">
                Instagram’da EN Deneyim Merkezi Van
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl">
                Şubemizdeki güncel deneme sınavı takvimlerini, motivasyon buluşmalarını ve
                öğrencilerimizin çalışma anlarını resmi Instagram hesabımızdan takip edin.
              </p>
            </div>

            <a
              href={BRAND_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg bg-[#141413] hover:bg-[#FF6B00] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <Instagram className="w-4 h-4" />
              <span>{BRAND_CONTACT.instagramHandle} Hesabını Aç</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-neutral-200/90 hover:border-[#FF6B00] bg-[#FAF8F5] overflow-hidden flex flex-col justify-between transition-colors"
              >
                <div className="relative h-64 bg-[#141413] overflow-hidden">
                  <ResilientImage
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/60 group-hover:bg-[#FF6B00] text-white flex items-center justify-center transition-colors">
                      <Instagram className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span className="font-semibold text-[#141413]">
                        {BRAND_CONTACT.instagramHandle}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>Instagram Paylaşımı</span>
                    </div>
                    <h3 className="mt-1.5 font-display font-bold text-base text-[#141413]">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                      {post.caption}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-200/70 flex items-center justify-between text-xs font-semibold text-[#FF6B00]">
                    <span>Instagram’da Görüntüle</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
