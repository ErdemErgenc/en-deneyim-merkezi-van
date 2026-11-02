export interface ExperienceArea {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  secondaryImage?: string;
  badgeSvg?: string;
  iconImg?: string;
  highlights: string[];
  idealFor: string;
  spanClass: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'calisma' | 'sinif' | 'mimari' | 'sinav';
  categoryLabel: string;
  description: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  type: 'photo' | 'video-tour';
  videoSlides?: string[];
  instagramUrl: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  periodLabel: string;
  statusType: 'active' | 'ongoing' | 'archive';
  summary: string;
  details: string[];
  image: string;
  instagramUrl: string;
}

export interface PackageModel {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface InstagramPost {
  id: string;
  title: string;
  caption: string;
  category: string;
  image: string;
  url: string;
}

export const BRAND_CONTACT = {
  name: 'EN Deneyim Merkezi Van',
  shortName: 'EN Deneyim Van',
  slogan: 'Keşfet, Deneyimle, Öğren!',
  subSlogan: 'Ezberlemek mi, gerçekten öğrenmek mi? Van İpekyolu’nda yeni nesil YKS/LGS hazırlık, VIP kütüphane ve Gölge Koçluk ekosistemi.',
  phoneDisplay: '+90 (555) 038 34 33',
  phoneHref: 'tel:+905550383433',
  whatsappHref: 'https://wa.me/905550383433?text=Merhaba%2C%20EN%20Deneyim%20Merkezi%20Van%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.',
  hqPhoneDisplay: '0212 571 71 55',
  hqPhoneHref: 'tel:+902125717155',
  email: 'iletisim@endeneyimmerkezi.com',
  instagramHandle: '@endeneyim.van',
  instagramUrl: 'https://www.instagram.com/endeneyim.van/',
  officialWebsite: 'https://endeneyimmerkezi.com',
  addressPrimary: 'Halilağa Mahallesi, İki Nisan Caddesi, İpekyolu / Van',
  addressSecondary: 'Hafiziye Mahallesi, Gölbaşı 4. Sokak Altı, Deluxe Life Rezidans, İpekyolu / Van',
  googleMapsDirectUrl: 'https://www.google.com/maps/search/?api=1&query=EN+Deneyim+Merkezi+Van+%C4%B0ki+Nisan+Caddesi+%C4%B0pekyolu+Van',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Iki%20Nisan%20Caddesi%20Ipekyolu%20Van&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

export const EXPERIENCE_AREAS: ExperienceArea[] = [
  {
    id: 'en-hall',
    index: '01',
    title: 'EN Hall — VIP Sessiz Çalışma Salonları',
    subtitle: 'Yüksek Odaklanma · Akustik Konfor',
    shortDesc: 'Sadece kendinize ait, sessiz ve motive edici yeni nesil kütüphane düzeni. Uzun çalışma saatlerinde duruş sağlığını koruyan ergonomik koltuklar ve akustik bölmeler.',
    fullDesc: 'EN Hall, öğrencilerin dış uyaranlardan tamamen arındırılmış, ferah ve yüksek tavanlı mimari atmosferde odaklanarak ders çalışabilmesi için tasarlanmıştır. Her çalışma masası geniş kaynak yayılımına uygun ölçülerde, özel priz ve aydınlatma altyapısıyla donatılmıştır.',
    image: '/assets/brand/merkez-alan-9.jpg',
    secondaryImage: '/assets/brand/merkez-alan-4.jpg',
    badgeSvg: '/assets/brand/enhall.svg',
    highlights: [
      'Akustik yan panellerle izole edilmiş geniş çalışma masaları',
      'Uzun süreli oturumlara uygun ergonomik çalışma koltukları',
      'Kişiye özel kilitli öğrenci dolapları ve iklimlendirme sistemi',
      'Gün boyu sessizliği ve çalışma disiplinini koruyan gözetim sistemi'
    ],
    idealFor: 'Sessiz, düzenli ve yüksek motivasyonlu bir topluluk içinde uzun saatler verimli çalışmak isteyen YKS ve LGS öğrencileri.',
    spanClass: 'lg:col-span-7',
  },
  {
    id: 'en-box',
    index: '02',
    title: 'EN Box — Bireysel Odak Kabinleri & Destek Seti',
    subtitle: 'Kişisel İzolasyon · Planlı Takip Materyalleri',
    shortDesc: 'Tamamen izole bireysel çalışma kabinleri ve öğrencinin zaman yönetimini destekleyen haftalık/aylık hedef takip çizelgeleri, deneme ve soru bankası destek kutusu.',
    fullDesc: 'EN Box iki güçlü bileşeni bir araya getirir: Merkez içinde yer alan sıcak LED aydınlatmalı, üst dolaplı bireysel çalışma kabinleri ve öğrencinin akademik takibini kolaylaştıran kapsamlı eğitim destek materyalleri (haftalık-aylık çalışma planları, hedef takip çizelgeleri, motivasyon kartları ve soru fasikülleri).',
    image: '/assets/brand/merkez-alan-5.jpg',
    secondaryImage: '/assets/brand/merkez-alan-7.jpg',
    badgeSvg: '/assets/brand/enbox.svg',
    highlights: [
      'Göz yormayan sıcak LED okuma aydınlatmalı özel kabinler',
      'Kabin üstü kilitlenebilir kişisel kaynak ve kitap dolabı',
      'Haftalık ve aylık çalışma planlayıcıları ile hedef takip çizelgeleri',
      'Maksimum bireysel konsantrasyon sağlayan derin kabin mimarisi'
    ],
    idealFor: 'Çevresel hareketlerden etkilenmeden tamamen kendi kabininde derin odaklanma (deep work) arayan öğrenciler.',
    spanClass: 'lg:col-span-5',
  },
  {
    id: 'golge-koc',
    index: '03',
    title: 'Gölge Koçluk Sistemi',
    subtitle: 'Birebir Süreç Yönetimi · Akademik Mentörlük',
    shortDesc: '“Yalnız değilsin, Gölge Koç en yakınında.” Öğrencinin sınav hazırlık sürecini adım adım planlayan, eksiklerini analiz eden ve motivasyonunu diri tutan uzman rehberlik.',
    fullDesc: 'Gölge Koç, öğrencinin bireysel gelişimi ve sınav başarısı için özelleştirilmiş birebir takip sistemidir. Kişiye özel çalışma programı hazırlayarak öğrencinin eksik konularına odaklanır, her deneme sınavı sonrası ilerlemeyi denetler ve sınav gününe kadar süreci disiplinle yönetir.',
    image: '/assets/brand/merkez-alan-6.jpg',
    iconImg: '/assets/brand/icon-golgekoc.png',
    highlights: [
      'Öğrencinin öğrenme hızına ve hedeflerine özel haftalık çalışma programı',
      'Günlük ve haftalık soru hedefi ile konu tamamlama kontrolü',
      'Deneme sınavı sonuçlarına göre dinamik revize edilen strateji haritası',
      'Sınav kaygısı yönetimi ve sürdürülebilir motivasyon görüşmeleri'
    ],
    idealFor: 'Nasıl çalışacağını planlamakta zorlanan, düzenli takip ve profesyonel yol arkadaşlığıyla netlerini istikrarlı artırmak isteyen öğrenciler.',
    spanClass: 'lg:col-span-4',
  },
  {
    id: 'vip-sinif-ozel-ders',
    index: '04',
    title: '4 Kişilik VIP Sınıflar & EN Özel Ders',
    subtitle: 'Butik Sınıf · Kişiselleştirilmiş Öğretmen Eşleşmesi',
    shortDesc: 'Kalabalık dershane sınıfları yerine maksimum 4 kişilik VIP sınıflar ve öğrencinin eksik olduğu konulara nokta atışı müdahale eden birebir EN Özel Ders modeli.',
    fullDesc: 'EN Özel Ders ve VIP Sınıf konseptinde her öğrencinin öğrenme tarzı, mevcut bilgi seviyesi ve hedef sıralaması analiz edilir. Akıllı tahta donanımlı konforlu 4 kişilik VIP sınıflarda veya birebir özel ders odalarında deneyimli branş öğretmenleriyle eksikler hızla kapatılır.',
    image: '/assets/brand/merkez-alan-1.jpg',
    iconImg: '/assets/brand/icon-ozelders.png',
    highlights: [
      'Maksimum 4 kişilik kontenjanla yüksek etkileşimli VIP sınıf dersleri',
      'Öğrencinin seviyesine ve öğrenme stiline uygun branş öğretmeni eşleştirmesi',
      'Konu eksiği analizine dayalı nokta atışı birebir özel ders planlaması',
      'Akıllı tahta ve modern eğitim materyalleriyle interaktif ders işlenişi'
    ],
    idealFor: 'Kalabalık sınıflarda vakit kaybetmek istemeyen, sorularını anında sorup birebir ilgiyle hızla ilerlemek isteyen öğrenciler.',
    spanClass: 'lg:col-span-4',
  },
  {
    id: 'en-deneme-analiz',
    index: '05',
    title: 'EN Deneme Kulübü & EN Analiz',
    subtitle: 'Türkiye Geneli 200+ Şube · Çok Boyutlu Raporlama',
    shortDesc: 'Türkiye genelinde 200’ü aşkın şubenin katıldığı gerçek sınav simülasyonları ve sadece net hesaplamakla kalmayıp konu/zaman analizini çıkaran EN Analiz sistemi.',
    fullDesc: 'Sınav pratiğini en üst düzeye çıkaran EN Deneme Kulübü, seçkin yayınların Türkiye geneli denemelerini gerçek sınav ciddiyetinde uygular. Her deneme sonrasında devreye giren EN Analiz modülü; öğrencinin hangi soru tiplerinde zorlandığını, zaman yönetimini ve önceki sınavlara göre gelişim eğrisini detaylı olarak raporlar.',
    image: '/assets/brand/deneme-optik.webp',
    secondaryImage: '/assets/brand/endeneme-farki.webp',
    iconImg: '/assets/brand/icon-endeneme.png',
    highlights: [
      'Türkiye genelinde 200+ şubeyle eşzamanlı gerçek sıralama ve yüzdelik dilim',
      'Konu, kazanım ve soru tipi bazlı çok boyutlu EN Analiz karnesi',
      'Kayıp puan (Lost Points) tespiti ve kişiye özel nokta atışı ödevlendirme',
      'Gerçek sınav stresini ve süre yönetimini öğreten kurumsal sınav disiplini'
    ],
    idealFor: 'Farklı yayınların Türkiye geneli denemeleriyle gerçek sıralamasını görmek ve hatalarından ders çıkararak net artırmak isteyen tüm adaylar.',
    spanClass: 'lg:col-span-4',
  },
  {
    id: 'ucdortbes-allstar',
    index: '06',
    title: 'ÜçDörtBeş All Star & Bilişsel Destek Modülleri',
    subtitle: 'Basılı + Dijital Kaynak · NeuroSound & NeuroPass',
    shortDesc: 'ÜçDörtBeş All Star basılı ve dijital sınav hazırlık ekosistemi ile odaklanma ve bilişsel performansı destekleyen NeuroSound, NeuroPass ve Mizaç Testleri.',
    fullDesc: 'EN Deneyim Merkezi Van, Türkiye’nin öncü eğitim markası ÜçDörtBeş All Star iş birliğiyle öğrencilerine hem basılı kitap setleri hem de dijital video/ölçme-değerlendirme uygulaması sunar. Ayrıca NeuroSound, NeuroPass ve RBA Mizaç Testleri ile öğrencinin duyusal odaklanma ve bilişsel işlem becerilerini bilimsel yöntemlerle destekler.',
    image: '/assets/brand/merkez-alan-3.jpg',
    iconImg: '/assets/brand/icon-allstar.png',
    highlights: [
      'ÜçDörtBeş All Star basılı kaynak setleri ve dijital takip uygulaması',
      'NeuroSound ve NeuroPass ile dikkat, odaklanma ve bilişsel performans desteği',
      'RBA ve Mizaç Testleri ile öğrencinin en verimli öğrenme kanalının tespiti',
      'Soru çözüm uygulaması ve dijital gelişim panosu entegrasyonu'
    ],
    idealFor: 'Nitelikli kaynak arayışıyla vakit kaybetmeden entegre bir basılı/dijital müfredat ve bilimsel odaklanma desteği isteyen öğrenciler.',
    spanClass: 'lg:col-span-6',
  },
  {
    id: 'en-kafe-sosyal',
    index: '07',
    title: 'EN Kafe & Sosyal Dinlenme Alanı',
    subtitle: 'Nezih Atmosfer · Motivasyon Molaları',
    shortDesc: 'Ders aralarında keyifli sohbetlerin yapıldığı, ücretsiz içecek ikramları ve konforlu oturma gruplarıyla zihni dinlendiren modern sosyal yaşam alanı.',
    fullDesc: 'Yoğun çalışma temposunda verilen doğru molalar, bir sonraki etüdün verimini belirler. EN Kafe ve fuaye alanı; sıcak-soğuk içecek imkanları, modern mimari aydınlatması, ferah dinlenme koltukları ve akran etkileşimi sağlayan sosyal atmosferiyle öğrencilerin merkezde kendilerini evlerinde hissetmelerini sağlar.',
    image: '/assets/brand/yks-hazirlik.jpg',
    secondaryImage: '/assets/brand/merkez-alan-8.jpg',
    iconImg: '/assets/brand/icon-encoffe.png',
    highlights: [
      'Etüt aralarında zihinsel yenilenme sağlayan ferah lounge ve kafe alanı',
      'Öğrencilere sunulan içecek imkanları ve zengin kafe menüsü',
      'Sınav stresini azaltan sıcak, modern ve güvenli sosyal ortam',
      'Fenomen EN’leri ve motivasyon buluşmalarına ev sahipliği yapan etkinlik alanı'
    ],
    idealFor: 'Gün boyu merkezde çalışırken konforlu, sosyal ve motive edici bir kampüs atmosferi arayan öğrenciler.',
    spanClass: 'lg:col-span-6',
  }
];

export const PACKAGE_MODELS: PackageModel[] = [
  {
    id: 'solo',
    name: 'Solo Performans',
    tagline: 'Kendi Çalışma Planı Olanlar İçin',
    description: 'Kendi hızında ve kişisel tercihlerine uygun şekilde sınav hazırlık sürecini yönetmek isteyen öğrenciler için esnek ve odaklı çalışma paketi.',
    features: [
      'EN Hall & EN Box Özel Çalışma Alanı Kullanımı',
      'Türkiye Geneli EN Deneme Kulübü Katılımı',
      'Çok Boyutlu EN Sınav Analizi Raporları',
      'ÜçDörtBeş All Star Kaynak & Dijital Sistem Desteği',
      'EN Kafe ve Sosyal Alan Ayrıcalıkları'
    ],
  },
  {
    id: 'elite',
    name: 'Elite Performans',
    tagline: 'Profesyonel Planlama ve Gölge Koç Takibi',
    description: 'Sadece bilgi aktarımını değil; strateji, motivasyon ve birebir Gölge Koçluk takibini ön planda tutarak en yüksek başarıyı hedefleyen destek paketi.',
    features: [
      'Gölge Koçluk Sistemi ile Birebir Haftalık Planlama ve Takip',
      'EN Hall & EN Box Özel Çalışma Alanı Kullanımı',
      'Türkiye Geneli EN Deneme Kulübü & Standart Sınav Simülasyonu',
      'ÜçDörtBeş All Star Tam Set & Soru Çözüm Uygulaması',
      'NeuroSound / Mizaç Analizi ve Özel Seminerlere Katılım'
    ],
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium Performans',
    tagline: 'Tam Kapsamlı VIP Ders & Koçluk Ekosistemi',
    description: 'Sınav sürecinin A’dan Z’ye planlandığı, Gölge Koçun belirlediği EN Özel Dersler ve 4 kişilik VIP grup dersleriyle eksiklerin en hızlı kapatıldığı üst düzey paket.',
    features: [
      '4 Kişilik VIP Sınıf Dersleri ve Birebir EN Özel Dersler',
      'Gölge Koçluk ile Günlük/Haftalık Akademik Süreç Yönetimi',
      'Detaylı Sınav Simülasyonu, EN Deneme Kulübü ve EN Analiz',
      'ÜçDörtBeş All Star Basılı + Dijital Ekosistem ve Soru Çözüm',
      'VIP Kütüphane (EN Box / EN Hall) ve Bilişsel Gelişim Modülleri'
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'EN Deneyim Merkezi Fuaye ve Karşılama Alanı',
    category: 'mimari',
    categoryLabel: 'Mimari & Sosyal Alan',
    description: 'Turuncu ve antrasit kurumsal kimlikle tasarlanmış, ferah dinlenme koltukları ve ışıklı EN Deneyim Merkezi duvar logosuyla modern karşılama salonu.',
    image: '/assets/brand/yks-hazirlik.jpg',
    aspect: 'square',
    type: 'photo',
    instagramUrl: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'gal-2',
    title: 'EN Hall — Yeni Nesil Sessiz Çalışma Salonu',
    category: 'calisma',
    categoryLabel: 'Çalışma Alanları',
    description: 'Akustik bölmeli geniş çalışma masaları, ergonomik turuncu koltuklar ve yüksek tavanlı aydınlık kütüphane mimarisi.',
    image: '/assets/brand/merkez-alan-9.jpg',
    aspect: 'square',
    type: 'photo',
    instagramUrl: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'gal-3',
    title: '4 Kişilik VIP Sınıf & Akıllı Tahta Uygulaması',
    category: 'sinif',
    categoryLabel: 'VIP Sınıflar & Koçluk',
    description: 'Öğrencilerin konforlu koltuklarda, akıllı tahta eşliğinde uzman öğretmenlerle yüksek etkileşimli ders işlediği butik sınıf ortamı.',
    image: '/assets/brand/merkez-alan-1.jpg',
    aspect: 'wide',
    type: 'photo',
    instagramUrl: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'gal-4',
    title: 'EN Box — Bireysel Odak Kabinleri',
    category: 'calisma',
    categoryLabel: 'Çalışma Alanları',
    description: 'Sıcak LED aydınlatmalı, üstten kilitli dolaplı ve çevresel uyaranlardan tamamen izole edilmiş bireysel çalışma kabinleri.',
    image: '/assets/brand/merkez-alan-5.jpg',
    aspect: 'tall',
    type: 'photo',
    instagramUrl: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'gal-5',
    title: 'Gölge Koçluk ve Birebir Rehberlik Odası',
    category: 'sinif',
    categoryLabel: 'VIP Sınıflar & Koçluk',
    description: 'Öğrencinin deneme analizlerinin değerlendirildiği ve haftalık çalışma stratejisinin planlandığı cam bölmeli koçluk odası.',
    image: '/assets/brand/merkez-alan-6.jpg',
    aspect: 'wide',
    type: 'photo',
    instagramUrl: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'gal-6',
    title: 'ÜçDörtBeş All Star & Çalışma Masası Düzeni',
    category: 'calisma',
    categoryLabel: 'Çalışma Alanları',
    description: 'Turuncu akustik ayırıcılarla donatılmış çalışma masaları ve öğrencilere sunulan ÜçDörtBeş All Star hazırlık materyalleri.',
    image: '/assets/brand/merkez-alan-3.jpg',
    aspect: 'tall',
    type: 'photo',
    instagramUrl: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'gal-7',
    title: 'EN Hall — Akustik Kabinler ve Okuma Lambaları',
    category: 'calisma',
    categoryLabel: 'Çalışma Alanları',
    description: 'Her masada kişisel okuma lambası ve ses emici panellerle desteklenen VIP çalışma istasyonları.',
    image: '/assets/brand/merkez-alan-7.jpg',
    aspect: 'wide',
    type: 'photo',
    instagramUrl: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'gal-8',
    title: 'Öğrenci Kilitli Dolapları ve Açık Çalışma Alanı',
    category: 'calisma',
    categoryLabel: 'Çalışma Alanları',
    description: 'Öğrencilerin tüm kitaplarını güvenle bırakabildiği kişisel dolaplar ve gün ışığı alan çalışma salonu.',
    image: '/assets/brand/merkez-alan-4.jpg',
    aspect: 'tall',
    type: 'photo',
    instagramUrl: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'gal-9',
    title: 'Merkez Karşılama Bankosu ve Kaynak Kitaplığı',
    category: 'mimari',
    categoryLabel: 'Mimari & Sosyal Alan',
    description: 'Zengin soru bankası ve deneme arşiviyle donatılmış karşılama ve danışma alanı.',
    image: '/assets/brand/merkez-alan-8.jpg',
    aspect: 'wide',
    type: 'photo',
    instagramUrl: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'gal-10',
    title: 'Etkileşimli Merkez Tanıtım Turu (Video & Reel Akışı)',
    category: 'mimari',
    categoryLabel: 'Video Tanıtım Turu',
    description: 'EN Deneyim Merkezi’nin çalışma salonları, VIP sınıfları, Gölge Koçluk odaları ve sosyal alanlarını adım adım keşfedin.',
    image: '/assets/brand/kutuphane-slider.png',
    aspect: 'wide',
    type: 'video-tour',
    videoSlides: [
      '/assets/brand/yks-hazirlik.jpg',
      '/assets/brand/merkez-alan-9.jpg',
      '/assets/brand/merkez-alan-1.jpg',
      '/assets/brand/merkez-alan-5.jpg',
      '/assets/brand/merkez-alan-6.jpg',
      '/assets/brand/merkez-alan-3.jpg',
    ],
    instagramUrl: 'https://www.instagram.com/endeneyim.van/',
  },
];

export const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'ann-van-acilis',
    title: 'EN Deneyim Merkezi Van Şubesi Öğrencileriyle Buluşuyor',
    periodLabel: 'Güncel Duyuru · İpekyolu / Van',
    statusType: 'active',
    summary: 'Van İpekyolu’nda yeni nesil YKS ve LGS hazırlık standartlarını değiştiren EN Deneyim Merkezi; EN Box, EN Hall, 4 kişilik VIP sınıflar ve Gölge Koçluk sistemiyle hizmetinizde.',
    details: [
      'Merkezimizi ziyaret ederek EN Hall ve EN Box çalışma alanlarını yerinde deneyimleyebilirsiniz.',
      'Solo, Elite ve Premium performans paketleri için yüz yüze eğitim danışmanlığı verilmektedir.',
      'ÜçDörtBeş All Star kaynak seti ve Türkiye geneli EN Deneme Kulübü kayıtları devam etmektedir.'
    ],
    image: '/assets/brand/endeneyim-van-banner.png',
    instagramUrl: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'ann-deneme-kulubu',
    title: 'Türkiye Geneli EN Deneme Kulübü ve EN Analiz Uygulamaları',
    periodLabel: 'Dönem Boyunca Sürekli Program',
    statusType: 'ongoing',
    summary: 'Türkiye genelinde 200’ü aşkın şubenin katılımıyla gerçekleştirilen kurumsal deneme sınavları ve sınav sonrası konu/kazanım bazlı EN Analiz karnesi.',
    details: [
      'Gerçek sınav saatinde ve optik kodlama disipliniyle Türkiye geneli sıralama tespiti.',
      'Her sınav sonrası Kayıp Puan (Lost Points) analizi ve Gölge Koç eşliğinde eksik kapama planı.',
      'Dışarıdan sadece Deneme Kulübü üyeliği veya tam paket kapsamında katılım imkanı.'
    ],
    image: '/assets/brand/deneme-optik.webp',
    instagramUrl: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'ann-vip-kocluk',
    title: '4 Kişilik VIP Sınıflar ve Gölge Koçluk Kayıt Dönemi',
    periodLabel: 'Akademik Dönem Programı',
    statusType: 'ongoing',
    summary: 'Kalabalık sınıf ortamlarında kaybolmadan, maksimum 4 kişilik butik VIP sınıflarda ders ve birebir Gölge Koçluk takibiyle kişiselleştirilmiş sınav hazırlığı.',
    details: [
      'Seviye tespit ve Mizaç Testi analizine göre oluşturulan homojen 4 kişilik VIP gruplar.',
      'Eksik konulara özel planlanan birebir EN Özel Ders takviyeleri.',
      'Velilere ve öğrenciye düzenli gelişim raporlaması.'
    ],
    image: '/assets/brand/merkez-alan-1.jpg',
    instagramUrl: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'ann-basari-sinavi',
    title: 'EN Başarı ve Bursluluk Sınavı Organizasyonu (%100’e Varan Burs)',
    periodLabel: 'Geçmiş Dönem Etkinliği · 3–4 Ocak Arşivi',
    statusType: 'archive',
    summary: 'EN Deneyim Merkezlerinde düzenlenen ve öğrencilere %100’e varan eğitim bursu imkanı sunan Türkiye geneli EN Başarı Sınavı organizasyonu.',
    details: [
      'Yeni dönem bursluluk ve kabul sınavı tarihleri resmi Instagram hesabımız @endeneyim.van üzerinden duyurulmaktadır.',
      'Sınav sonuçlarına göre EN Analiz raporu tüm katılımcı öğrencilerle paylaşılmaktadır.'
    ],
    image: '/assets/brand/en-basari-sinavi.png',
    instagramUrl: 'https://www.instagram.com/endeneyim.van/',
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    title: 'Endeneyim Van Açıldı!',
    caption: 'Van’da eğitimde yeni bir deneyim başladı! 4 kişilik VIP sınıflar, Gölge Koçluk, EN Box ve EN Hall çalışma salonlarımızla İpekyolu’ndayız. #endeneyimvan #yks #van',
    category: 'Kurumsal Duyuru',
    image: '/assets/brand/endeneyim-van-banner.png',
    url: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'ig-2',
    title: 'EN Hall VIP Sessiz Kütüphane',
    caption: 'Sadece kendinize ait, sessiz ve motive edici bir çalışma alanı. Odaklanmanın en konforlu hali EN Hall ile tanışın.',
    category: 'Deneyim Alanı',
    image: '/assets/brand/merkez-alan-9.jpg',
    url: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'ig-3',
    title: '4 Kişilik VIP Sınıflar & Özel Ders',
    caption: 'Kalabalık sınıflarda kaybolma! Maksimum 4 kişilik VIP sınıflarımız ve birebir özel derslerimizle eksik konularını hızla tamamla.',
    category: 'VIP Eğitim',
    image: '/assets/brand/merkez-alan-1.jpg',
    url: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'ig-4',
    title: 'ÜçDörtBeş All Star İş Birliği',
    caption: 'Hem basılı hem dijital formatta, kendi içinde ölçme değerlendirme sistemi olan ÜçDörtBeş All Star ayrıcalığı EN Deneyim Van’da!',
    category: 'Akademik Kaynak',
    image: '/assets/brand/merkez-alan-3.jpg',
    url: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'ig-5',
    title: 'EN Box Bireysel Çalışma Kabinleri',
    caption: 'Kişiye özel aydınlatmalı kabinler ve kilitli dolap sistemiyle dikkatin dağılmadan hedefine odaklan.',
    category: 'EN Box',
    image: '/assets/brand/merkez-alan-5.jpg',
    url: 'https://www.instagram.com/endeneyim.van/',
  },
  {
    id: 'ig-6',
    title: 'Yalnız Değilsin, Gölge Koç En Yakınında',
    caption: 'Sınav hazırlık sürecini adım adım planlayan, deneme analizlerini takip eden ve motivasyonunu yöneten Gölge Koç sistemiyle tanış.',
    category: 'Gölge Koçluk',
    image: '/assets/brand/merkez-alan-6.jpg',
    url: 'https://www.instagram.com/endeneyim.van/',
  },
];
