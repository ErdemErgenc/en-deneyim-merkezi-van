import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Expand, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ResilientImage } from './ResilientImage';
import { BRAND_CONTACT } from '../data/brandData';

interface AboutSectionProps {
  onOpenImageModal: (imageUrl: string, title: string, desc: string) => void;
  onNavigate: (sectionId: string) => void;
}

const PHILOSOPHY_PILLARS = [
  {
    id: 'her-ogrenci',
    index: '01',
    title: 'Her Öğrenci Bir Dünyadır',
    summary:
      'EN Deneyim Merkezi olarak her öğrencinin benzersiz bir potansiyele, öğrenme hızına ve karakter yapısına sahip olduğuna inanıyoruz.',
    detail:
      'Standart kalıpları her öğrenciye dayatmak yerine; RBA ve Mizaç Testleri ile öğrencinin öğrenme stilini keşfediyor, bireysel ihtiyaçlarına ve hedef sıralamasına uygun kişiselleştirilmiş bir yol haritası kurguluyoruz.',
  },
  {
    id: 'deneyim-odakli',
    index: '02',
    title: 'Ezber Değil, Deneyim Odaklı Öğrenme',
    summary:
      'Öğrenmenin yalnızca bilgi aktarmaktan ibaret olmadığını biliyoruz; öğrenci ancak kendi yolunu deneyimlediğinde bilgi kalıcı hale gelir.',
    detail:
      'İlk günden beri amacımız net: Öğrencilere sadece ders anlatmak değil, onların yanında yürümek. Her denemede, her başarıda ve her zorlukta Gölge Koçluk ve birebir analizlerle süreci birlikte yönetiyoruz.',
  },
  {
    id: 'bilim-teknoloji',
    index: '03',
    title: 'Bilim, Teknoloji ve Stratejik Ortaklıklar',
    summary:
      'ÜçDörtBeş All Star, Türkiye geneli EN Deneme Kulübü, NeuroSound ve NeuroPass teknolojilerini tek çatı altında buluşturuyoruz.',
    detail:
      'Yüksek frekanslı ses modülasyonuyla odaklanmayı destekleyen NeuroSound ve bilişsel becerileri güçlendiren NeuroPass uygulamalarını, Türkiye’nin en güçlü yayın ve deneme kulübü altyapısıyla birleştiriyoruz.',
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenImageModal,
  onNavigate,
}) => {
  const [activePillar, setActivePillar] = useState<string>('her-ogrenci');

  return (
    <section
      id="hakkimizda"
      className="py-16 lg:py-24 bg-white border-b border-neutral-200/80"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FF6B00]">
            <span>KURUMSAL HİKAYEMİZ VE VİZYONUMUZ</span>
            <span aria-hidden="true">·</span>
            <span>EN DENEYİM MERKEZİ VAN</span>
          </div>
          <h2 className="mt-3 font-display font-bold text-2xl sm:text-4xl text-[#141413] tracking-tight text-balance">
            Her Şey Bir Soruyla Başladı: Ezberlemek mi, Gerçekten Öğrenmek mi?
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Eğitimde ezberin değil deneyimin gücüne inanan bir vizyonla doğan{' '}
            <strong className="font-semibold text-[#141413]">EN Deneyim Merkezi</strong>,
            Türkiye genelindeki yeni nesil kütüphane ve kurs şubeleriyle birlikte Van İpekyolu’nda
            öğrencilerini geleceğe hazırlıyor.
          </p>
        </div>

        {/* Asymmetric Visual & Narrative Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left 7 Columns: Real Space Photography Composition */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 flex flex-col gap-5"
          >
            {/* Primary Architectural Photo */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 group min-h-[280px] sm:min-h-[340px]">
              <ResilientImage
                src="/assets/brand/merkez-alan-8.jpg"
                alt="EN Deneyim Merkezi Karşılama ve Kaynak Kütüphanesi"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-medium text-[#FFB800]">
                    Kurumsal Mimari · Kaynak ve Danışma Alanı
                  </span>
                  <h3 className="font-display font-bold text-lg text-white mt-0.5">
                    Ne Eksik, Ne Fazla: İhtiyacın Olan Her Şey Bir Arada
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onOpenImageModal(
                      '/assets/brand/merkez-alan-8.jpg',
                      'EN Deneyim Merkezi Karşılama ve Kaynak Kütüphanesi',
                      'Zengin soru bankası arşivi, kurumsal danışma bankosu ve modern çalışma atmosferi.'
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black/65 hover:bg-[#FF6B00] text-white text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Expand className="w-3.5 h-3.5" />
                  <span>Büyüt</span>
                </button>
              </div>
            </div>

            {/* Bottom 2-Photo Split: Van Opening Banner + Real Study Hall */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 bg-white p-4 flex flex-col justify-between group">
                <div className="relative h-44 rounded-lg overflow-hidden bg-neutral-100">
                  <ResilientImage
                    src="/assets/brand/endeneyim-van-banner.png"
                    alt="Endeneyim Van Açıldı Resmi Duyuru Görseli"
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-semibold text-[#FF6B00]">
                      Van İpekyolu Şubesi
                    </div>
                    <div className="text-sm font-display font-bold text-[#141413]">
                      Endeneyim Van Hizmetinizde
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenImageModal(
                        '/assets/brand/endeneyim-van-banner.png',
                        'Endeneyim Van Açıldı',
                        'EN Deneyim Merkezi Van şubesi resmi açılış görseli.'
                      )
                    }
                    className="text-xs font-semibold text-neutral-600 hover:text-[#FF6B00] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    İncele
                  </button>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-neutral-200 group min-h-[220px]">
                <ResilientImage
                  src="/assets/brand/merkez-alan-4.jpg"
                  alt="EN Hall Açık Çalışma Salonu ve Kilitli Öğrenci Dolapları"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between gap-2">
                  <div>
                    <div className="text-xs text-[#FFB800] font-medium">
                      Gerçek Mekân Fotoğrafı
                    </div>
                    <div className="text-sm font-display font-bold text-white">
                      Kişisel Dolaplar & Çalışma Salonu
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenImageModal(
                        '/assets/brand/merkez-alan-4.jpg',
                        'Kişisel Öğrenci Dolapları ve Çalışma Salonu',
                        'Öğrencilerin materyallerini güvenle muhafaza ettiği kişisel dolaplar ve sessiz etüt salonu.'
                      )
                    }
                    className="p-2 rounded-md bg-black/60 hover:bg-[#FF6B00] text-white transition-colors cursor-pointer shrink-0"
                    aria-label="Fotoğrafı Büyüt"
                  >
                    <Expand className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right 5 Columns: Interactive Philosophy & Verified Institutional Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-5 flex flex-col justify-between bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-neutral-200/90"
          >
            <div>
              <span className="text-xs font-semibold tracking-wider text-neutral-500">
                EĞİTİM FELSEFEMİZ · 3 TEMEL İLKE
              </span>
              <h3 className="mt-2 font-display font-bold text-xl sm:text-2xl text-[#141413]">
                Sadece Bilgi Değil, Yanında Yürüyen Bir Sistem
              </h3>

              {/* Interactive Accordion / Selector for the 3 Philosophy Pillars */}
              <div className="mt-6 space-y-3">
                {PHILOSOPHY_PILLARS.map((pillar) => {
                  const isSelected = activePillar === pillar.id;
                  return (
                    <div
                      key={pillar.id}
                      className={`rounded-xl border transition-colors duration-150 ${
                        isSelected
                          ? 'bg-white border-[#FF6B00]'
                          : 'bg-white/60 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActivePillar(pillar.id)}
                        className="w-full text-left px-4 py-3.5 flex items-center justify-between gap-3 cursor-pointer"
                      >
                        <span className="font-display font-bold text-sm sm:text-base text-[#141413]">
                          <span className="font-mono-tabular text-[#FF6B00] mr-2">
                            {pillar.index}.
                          </span>
                          {pillar.title}
                        </span>
                        <span className="text-xs font-semibold text-[#FF6B00] whitespace-nowrap shrink-0">
                          {isSelected ? 'Açık' : 'Detay'}
                        </span>
                      </button>

                      {isSelected && (
                        <div className="px-4 pb-4 pt-1 border-t border-neutral-100 text-xs sm:text-sm text-neutral-600 space-y-2 leading-relaxed">
                          <p className="font-medium text-[#141413]">{pillar.summary}</p>
                          <p>{pillar.detail}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Verified Feature Checklist */}
              <div className="mt-6 pt-6 border-t border-neutral-200/80 space-y-2.5">
                <div className="text-xs font-semibold text-neutral-500 tracking-wider">
                  VAN ŞUBEMİZDE SUNULAN DOĞRULANMIŞ İMKANLAR
                </div>
                {[
                  'Birebir Özel Ders ve 4 Kişilik VIP Sınıflar',
                  'Gölge Koçluk Sistemi ile Haftalık Süreç Takibi',
                  'EN Box Bireysel Kabinler ve EN Hall Sessiz Kütüphane',
                  'Türkiye Geneli EN Deneme Kulübü ve EN Analiz Karnesi',
                  'ÜçDörtBeş All Star Basılı ve Dijital Kaynak Desteği',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141413]">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
              <a
                href={BRAND_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#141413] hover:text-[#FF6B00] transition-colors whitespace-nowrap"
              >
                <span>Instagram’da {BRAND_CONTACT.instagramHandle}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => onNavigate('iletisim')}
                className="px-4 py-2.5 rounded-lg bg-[#141413] hover:bg-[#FF6B00] text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Tanışma Randevusu Al
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
