import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  Instagram,
  CheckCircle2,
  Send,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';
import { BRAND_CONTACT } from '../data/brandData';
import { BrandLogo } from './BrandLogo';

interface ContactFooterSectionProps {
  selectedProgramInquiry: string;
  onNavigate: (sectionId: string) => void;
}

export const ContactFooterSection: React.FC<ContactFooterSectionProps> = ({
  selectedProgramInquiry,
  onNavigate,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [studentLevel, setStudentLevel] = useState('12. Sınıf / YKS Hazırlık');
  const [program, setProgram] = useState('Elite Performans & Gölge Koçluk');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedProgramInquiry) {
      setProgram(selectedProgramInquiry);
    }
  }, [selectedProgramInquiry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedName = fullName.trim();
    const cleanedPhone = phone.replace(/\D/g, '');

    if (trimmedName.length < 3) {
      setErrorMsg('Lütfen adınızı ve soyadınızı eksiksiz giriniz.');
      return;
    }

    if (cleanedPhone.length < 10) {
      setErrorMsg('Lütfen geçerli bir telefon numarası giriniz (Örn: 05XX XXX XX XX).');
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg('Lütfen geçerli bir e-posta adresi giriniz.');
      return;
    }

    setSubmitted(true);
  };

  const buildWhatsAppInquiryUrl = () => {
    const text = `Merhaba EN Deneyim Merkezi Van,\nAd Soyad: ${fullName}\nTelefon: ${phone}\nSınıf/Hedef: ${studentLevel}\nİlgilenilen Alan/Paket: ${program}\nNot: ${
      message || 'Detaylı bilgi ve tanışma randevusu talep ediyorum.'
    }`;
    return `https://wa.me/905550383433?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      {/* H. İLETİŞİM BÖLÜMÜ */}
      <section
        id="iletisim"
        className="py-16 lg:py-24 bg-[#FAF8F5] bg-architectural-grid border-b border-neutral-200"
      >
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FF6B00]">
              <span>İLETİŞİM VE KONUM BİLGİLERİ</span>
              <span aria-hidden="true">·</span>
              <span>İPEKYOLU / VAN</span>
            </div>
            <h2 className="mt-3 font-display font-bold text-2xl sm:text-4xl text-[#141413] tracking-tight text-balance">
              Merkezimizi Ziyaret Edin veya Eğitim Danışmanlarımızla Görüşün
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              EN Hall çalışma salonlarımızı, EN Box kabinlerimizi ve 4 kişilik VIP sınıflarımızı
              yerinde incelemek veya paketlerimiz hakkında bilgi almak için bize ulaşabilirsiniz.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 5 Columns: Verified Contact Details & Interactive Map */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-7 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-neutral-500">
                      Van Şubesi Adresimiz
                    </div>
                    <p className="mt-1 font-display font-bold text-sm sm:text-base text-[#141413]">
                      {BRAND_CONTACT.addressPrimary}
                    </p>
                    <p className="mt-1 text-xs text-neutral-600">
                      {BRAND_CONTACT.addressSecondary}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="pt-5 border-t border-neutral-100 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-neutral-500">
                      Telefon & Danışma Hattı
                    </div>
                    <div className="mt-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <a
                        href={BRAND_CONTACT.phoneHref}
                        className="font-mono-tabular font-bold text-base sm:text-lg text-[#141413] hover:text-[#FF6B00] transition-colors"
                      >
                        {BRAND_CONTACT.phoneDisplay}
                      </a>
                      <span className="text-xs text-neutral-500">
                        (Van Şube Doğrudan Hat)
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-neutral-600">
                      Genel Merkez İletişim:{' '}
                      <a
                        href={BRAND_CONTACT.hqPhoneHref}
                        className="font-mono-tabular font-semibold hover:text-[#FF6B00]"
                      >
                        {BRAND_CONTACT.hqPhoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email & Instagram */}
                <div className="pt-5 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#FF6B00] shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-neutral-500">E-Posta</div>
                      <a
                        href={`mailto:${BRAND_CONTACT.email}`}
                        className="text-xs sm:text-sm font-semibold text-[#141413] hover:text-[#FF6B00] break-all"
                      >
                        {BRAND_CONTACT.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Instagram className="w-4 h-4 text-[#FF6B00] shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-neutral-500">Resmi Instagram</div>
                      <a
                        href={BRAND_CONTACT.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-[#141413] hover:text-[#FF6B00]"
                      >
                        {BRAND_CONTACT.instagramHandle}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Action Buttons: Yol Tarifi & WhatsApp */}
                <div className="pt-5 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={BRAND_CONTACT.googleMapsDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-lg bg-[#141413] hover:bg-[#FF6B00] text-white text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Yol Tarifi Al</span>
                  </a>

                  <a
                    href={BRAND_CONTACT.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-lg bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp İletişim</span>
                  </a>
                </div>
              </div>

              {/* Embedded Google Maps Frame */}
              <div className="rounded-2xl overflow-hidden border border-neutral-200/90 bg-white flex-1 min-h-[250px] relative">
                <iframe
                  title="EN Deneyim Merkezi Van İpekyolu Harita Konumu"
                  src={BRAND_CONTACT.googleMapsEmbedUrl}
                  className="w-full h-full min-h-[250px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right 7 Columns: Interactive Lead & Appointment Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-10 flex flex-col justify-between">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-[#FF6B00]">
                      ÖN KAYIT, DENEME KULÜBÜ VE TANIŞMA FORMU
                    </span>
                    <h3 className="mt-1 font-display font-bold text-xl sm:text-2xl text-[#141413]">
                      Sizi Arayalım & Merkezimizde Ağırlayalım
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-600">
                      Bilgilerinizi bırakın; eğitim danışmanlarımız ve Gölge Koç ekibimiz size
                      en uygun çalışma modelini planlamak için dönüş yapsın.
                    </p>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700 font-medium"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-fullname"
                        className="block text-xs font-semibold text-[#141413] mb-1.5"
                      >
                        Öğrenci veya Veli Adı Soyadı *
                      </label>
                      <input
                        id="contact-fullname"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:border-[#FF6B00] focus:outline-none text-sm text-[#141413] bg-[#FAF8F5]/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-[#141413] mb-1.5"
                      >
                        Telefon Numarası *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="05XX XXX XX XX"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:border-[#FF6B00] focus:outline-none text-sm text-[#141413] bg-[#FAF8F5]/50 font-mono-tabular"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-level"
                        className="block text-xs font-semibold text-[#141413] mb-1.5"
                      >
                        Sınıf / Sınav Grubu
                      </label>
                      <select
                        id="contact-level"
                        value={studentLevel}
                        onChange={(e) => setStudentLevel(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:border-[#FF6B00] focus:outline-none text-sm text-[#141413] bg-[#FAF8F5]/50"
                      >
                        <option value="12. Sınıf / YKS Hazırlık">12. Sınıf / YKS Hazırlık</option>
                        <option value="Mezun / YKS Hazırlık">Mezun / YKS Hazırlık</option>
                        <option value="11. Sınıf Ara Sınıf">11. Sınıf / YKS Temel</option>
                        <option value="9-10. Sınıf Okul Destek">9–10. Sınıf Okul Destek</option>
                        <option value="8. Sınıf / LGS Hazırlık">8. Sınıf / LGS Hazırlık</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-program"
                        className="block text-xs font-semibold text-[#141413] mb-1.5"
                      >
                        İlgilendiğiniz Deneyim Alanı / Paket
                      </label>
                      <select
                        id="contact-program"
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:border-[#FF6B00] focus:outline-none text-sm text-[#141413] bg-[#FAF8F5]/50"
                      >
                        <option value="Elite Performans & Gölge Koçluk">
                          Elite Performans & Gölge Koçluk
                        </option>
                        <option value="Premium Performans (4 Kişilik VIP Sınıf + Özel Ders)">
                          Premium Performans (4 Kişilik VIP Sınıf + Özel Ders)
                        </option>
                        <option value="Solo Performans (EN Hall & EN Box Kütüphane)">
                          Solo Performans (EN Hall & EN Box Kütüphane)
                        </option>
                        <option value="Türkiye Geneli EN Deneme Kulübü">
                          Türkiye Geneli EN Deneme Kulübü
                        </option>
                        <option value="ÜçDörtBeş All Star & EN Analiz">
                          ÜçDörtBeş All Star & EN Analiz
                        </option>
                        {selectedProgramInquiry &&
                          ![
                            'Elite Performans & Gölge Koçluk',
                            'Premium Performans (4 Kişilik VIP Sınıf + Özel Ders)',
                            'Solo Performans (EN Hall & EN Box Kütüphane)',
                            'Türkiye Geneli EN Deneme Kulübü',
                            'ÜçDörtBeş All Star & EN Analiz',
                          ].includes(selectedProgramInquiry) && (
                            <option value={selectedProgramInquiry}>
                              {selectedProgramInquiry}
                            </option>
                          )}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#141413] mb-1.5"
                    >
                      E-Posta Adresi (İsteğe Bağlı)
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ornek@eposta.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:border-[#FF6B00] focus:outline-none text-sm text-[#141413] bg-[#FAF8F5]/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#141413] mb-1.5"
                    >
                      Notunuz veya Sorunuz
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hedeflediğiniz bölüm, merak ettiğiniz çalışma saatleri veya özel ders talebinizi belirtebilirsiniz..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:border-[#FF6B00] focus:outline-none text-sm text-[#141413] bg-[#FAF8F5]/50 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <span className="text-xs text-neutral-500">
                      Bilgileriniz yalnızca EN Deneyim Merkezi Van danışmanlığı için kullanılır.
                    </span>

                    <button
                      type="submit"
                      className="px-6 py-3.5 rounded-lg bg-[#FF6B00] hover:bg-[#e05e00] text-white font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>Bilgi ve Randevu Talebi Gönder</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="my-auto py-8 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#141413]">
                    Talebiniz Başarıyla Oluşturuldu, {fullName}!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    <strong className="text-[#141413]">{program}</strong> ({studentLevel}) için
                    bıraktığınız iletişim talebi kaydedildi. Dilerseniz hiç beklemeden aşağıdaki
                    butonla doğrudan Van şubemizin WhatsApp danışma hattına da iletebilirsiniz.
                  </p>

                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={buildWhatsAppInquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-lg bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Talebi WhatsApp ile Anında İlet</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFullName('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="px-4 py-3 rounded-lg border border-neutral-300 text-xs sm:text-sm font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
                    >
                      Yeni Form Oluştur
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* I. PREMIUM VE SADE FOOTER */}
      <footer className="bg-[#141413] text-[#FAF8F5] pt-14 pb-10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <BrandLogo variant="light" className="h-12 w-auto" />
                <span className="font-display font-bold text-lg text-white">
                  EN Deneyim Merkezi Van
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
                Keşfet, Deneyimle, Öğren! Van İpekyolu’nda yeni nesil YKS/LGS hazırlık,
                EN Hall sessiz kütüphane, EN Box kabinler, 4 kişilik VIP sınıflar, Gölge Koçluk
                ve Türkiye geneli Deneme Kulübü merkezi.
              </p>
              <div className="pt-1 flex items-center gap-4 text-xs text-neutral-400">
                <a
                  href={BRAND_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white hover:text-[#FFB800] font-semibold transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#FF6B00]" />
                  <span>{BRAND_CONTACT.instagramHandle}</span>
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={BRAND_CONTACT.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>endeneyimmerkezi.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <div className="text-xs font-semibold tracking-wider text-[#FFB800]">
                HIZLI BAĞLANTILAR
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                {[
                  { id: 'hero', label: 'Ana Sayfa' },
                  { id: 'hakkimizda', label: 'Hakkımızda' },
                  { id: 'deneyim-alanlari', label: 'Deneyim Alanları' },
                  { id: 'galeri', label: 'Mekân Galerisi' },
                  { id: 'etkinlikler', label: 'Etkinlikler & Duyurular' },
                  { id: 'iletisim', label: 'İletişim & Konum' },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(link.id);
                      }}
                      className="hover:text-[#FF6B00] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience Modules */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-semibold tracking-wider text-[#FFB800]">
                DENEYİM ALANLARIMIZ
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                <li>EN Hall — VIP Sessiz Çalışma Salonu</li>
                <li>EN Box — Bireysel Odak Kabinleri</li>
                <li>Gölge Koçluk Sistemi</li>
                <li>4 Kişilik VIP Sınıflar & EN Özel Ders</li>
                <li>Türkiye Geneli EN Deneme Kulübü</li>
                <li>ÜçDörtBeş All Star & EN Analiz</li>
              </ul>
            </div>

            {/* Verified Contact Summary */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-semibold tracking-wider text-[#FFB800]">
                VAN ŞUBESİ İLETİŞİM
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-neutral-300">
                <p>{BRAND_CONTACT.addressPrimary}</p>
                <p className="text-neutral-400 text-xs">{BRAND_CONTACT.addressSecondary}</p>
                <p className="pt-1">
                  <a
                    href={BRAND_CONTACT.phoneHref}
                    className="font-mono-tabular font-bold text-white hover:text-[#FF6B00]"
                  >
                    {BRAND_CONTACT.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${BRAND_CONTACT.email}`}
                    className="text-neutral-300 hover:text-[#FF6B00]"
                  >
                    {BRAND_CONTACT.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>
              © {new Date().getFullYear()} EN Deneyim Merkezi Van ({BRAND_CONTACT.instagramHandle}).
              Tüm hakları saklıdır.
            </p>
            <p>Keşfet · Deneyimle · Öğren</p>
          </div>
        </div>
      </footer>
    </>
  );
};
