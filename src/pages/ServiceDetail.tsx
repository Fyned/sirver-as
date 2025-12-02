import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, FileText, BarChart, Settings, HelpCircle } from 'lucide-react';
import CTA from '../components/sections/CTA';

// GÖRSELLER
import imgWood from '../assets/images/services/wood-chips-closeup.jpg';
import imgBiomass from '../assets/images/services/biomass-energy.jpg';
import imgForest from '../assets/images/services/forest-residue.jpg';
import imgLogistics from '../assets/images/services/logistics-fleet.jpg';

// GÖRSEL HARİTASI
const serviceImages: any = {
  "odun-cipsi": imgWood,
  "biyokutle": imgBiomass,
  "orman-atiklari": imgForest,
  "lojistik": imgLogistics
};

// DETAYLI İÇERİK VERİTABANI
const serviceData: any = {
  "odun-cipsi": {
    title: "Endüstriyel Odun Cipsi",
    desc: "MDF, Yonga Levha ve Kağıt endüstrisi için ISO 17225-4 standartlarında üretilmiş, lif yapısı korunmuş yüksek kaliteli hammadde.",
    specs: [
      { label: "Standart", value: "ISO 17225-4 (A1/A2)" },
      { label: "Boyut Sınıfı", value: "G30 / G50 / G100" },
      { label: "Nem Oranı", value: "%20 - %45 (İsteğe Bağlı)" },
      { label: "Kül Oranı", value: "< %1.0" },
      { label: "Yabancı Madde", value: "%0 (Metal/Taş Ayrıştırılmış)" }
    ],
    features: [
      "Tam Otomatik Kırım Hattı: Tomruklar el değmeden işlenir.",
      "Homojen Boyutlandırma: Elek sistemimiz sayesinde toz oranı minimize edilir.",
      "Lif Kalitesi: Bıçak açıları, lif yapısını bozmayacak şekilde ayarlanır.",
      "Stok Kapasitesi: 50.000 Ton anlık stok ile kesintisiz tedarik."
    ],
    process: [
      { title: "Hammadde Kabul", text: "Ormandan gelen tomrukların nem ve çap kontrolü." },
      { title: "Kabuk Soyma", text: "Lif kalitesi için ağaç kabuklarının ayrıştırılması." },
      { title: "Kırım (Chipping)", text: "Endüstriyel yonga makinelerinde istenilen boyuta getirme." },
      { title: "Eleme & Tasnif", text: "Toz ve irilerin ayrılması, standart boyutun garantisi." }
    ]
  },
  "biyokutle": {
    title: "Biyokütle Yakıtı",
    desc: "Enerji santralleri (BES) ve sanayi kazanları için fosil yakıtlara alternatif, yüksek kalorili ve karbon nötr enerji kaynağı.",
    specs: [
      { label: "Kalorifik Değer", value: "3.5 - 4.2 kWh/kg" },
      { label: "Nem İçeriği", value: "< %25 (Kuru Bazda)" },
      { label: "Klor (Cl)", value: "< %0.02" },
      { label: "Kükürt (S)", value: "< %0.05" },
      { label: "Yoğunluk", value: "250-300 kg/m³" }
    ],
    features: [
      "Yüksek Verim: Düşük nem oranı sayesinde kazan verimini %15 artırır.",
      "Düşük Emisyon: Kükürt ve azot oksit salınımı minimumdur.",
      "Ekonomik: Doğalgaz ve ithal kömüre göre %40'a varan maliyet avantajı.",
      "Yerli Kaynak: Kur dalgalanmalarından daha az etkilenen fiyat istikrarı."
    ],
    process: [
      { title: "Kaynak Toplama", text: "Orman atıkları ve tarımsal biyokütlenin toplanması." },
      { title: "Doğal Kurutma", text: "Nem oranını düşürmek için açık hava sirkülasyonu." },
      { title: "Öğütme", text: "Yakma sistemine uygun partikül boyutuna getirme." },
      { title: "Enerji Analizi", text: "Kalori ve nem değerlerinin laboratuvar onayı." }
    ]
  },
  "orman-atiklari": {
    title: "Orman Endüstri Atıkları",
    desc: "Orman sahalarında kalan dal, kök ve üretim artıklarının toplanarak ekonomiye kazandırılması ve orman yangın riskinin azaltılması.",
    specs: [
      { label: "Kaynak Türü", value: "Dal, Tepe, Kök, Kabuk" },
      { label: "İşleme Yeri", value: "Mobil Kırıcı ile Sahada" },
      { label: "Kapasite", value: "Günlük 20 Hektar Temizlik" },
      { label: "Sertifika", value: "FSC & OGM İzinli" }
    ],
    features: [
      "Yangın Önleme: Yanıcı materyalin ormandan uzaklaştırılması.",
      "Toprak İyileştirme: Alanın yeni fidan dikimine hazır hale getirilmesi.",
      "Sıfır Atık: Doğada çürümeye terk edilen değerin enerjiye dönüşümü.",
      "Mobil Operasyon: Kendi yürür makinelerle zorlu arazide çalışma."
    ],
    process: [
      { title: "Saha Etüdü", text: "Atık yoğunluğunun ve arazi yapısının analizi." },
      { title: "Toplama", text: "Ekskavatör ve forwarder ile atıkların biriktirilmesi." },
      { title: "Mobil Kırım", text: "Sahada cips haline getirilip hacmin küçültülmesi." },
      { title: "Nakliye", text: "Tesis veya santrale doğrudan sevkiyat." }
    ]
  },
  "lojistik": {
    title: "Lojistik Çözümleri",
    desc: "Sadece ürün değil, zaman yönetimi satıyoruz. Walking Floor (Hareketli Taban) teknolojisi ile Türkiye'nin her yerine JIT teslimat.",
    specs: [
      { label: "Filo Büyüklüğü", value: "50+ Özmal Tır" },
      { label: "Dorse Tipi", value: "Walking Floor (92m³)" },
      { label: "Günlük Kapasite", value: "1000+ Ton Sevkiyat" },
      { label: "Takip Sistemi", value: "7/24 Uydu Takibi" }
    ],
    features: [
      "Hızlı Boşaltım: Damper kaldırmadan, yatay boşaltım sistemi (İSG Dostu).",
      "Maksimum Hacim: Standart tırlara göre %30 daha fazla yük taşıma.",
      "Fabrika İçi Yönetim: Hammadde sahanızın yönetimini üstleniyoruz.",
      "Esnek Rota: Orman yollarından otoyollara uyumlu araç parkuru."
    ],
    process: [
      { title: "Planlama", text: "Müşteri üretim planına göre sevkiyat takvimi." },
      { title: "Yükleme", text: "Kantarda hassas tartım ve nem kontrolü." },
      { title: "Canlı Takip", text: "Aracın konumunun anlık paylaşımı." },
      { title: "Teslimat", text: "Fabrika sahasına otomatik boşaltım." }
    ]
  }
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const data = serviceData[slug || ""];
  const image = serviceImages[slug || ""];

  if (!data) return <Navigate to="/hizmetler" />;

  return (
    <>
      <Helmet>
        <title>{data.title} | Sirver A.Ş.</title>
        <meta name="description" content={data.desc} />
      </Helmet>

      <main className="pt-24 pb-0 bg-gray-50">
        
        <div className="container mx-auto px-4 py-8">
           <Link to="/hizmetler" className="inline-flex items-center gap-2 text-gray-500 hover:text-sirver-primary transition-colors mb-6 font-bold text-sm">
              <ArrowLeft size={18} /> Tüm Hizmetlere Dön
           </Link>
           <motion.h1 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="text-4xl md:text-5xl font-heading font-bold text-sirver-secondary mb-4"
           >
             {data.title}
           </motion.h1>
           <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
             {data.desc}
           </p>
        </div>

        <section className="container mx-auto px-4 mb-20">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div className="lg:col-span-2 space-y-12">
                 {/* GÖRSEL ALANI */}
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                   className="h-[400px] md:h-[500px] bg-gray-200 rounded-3xl overflow-hidden relative shadow-lg"
                 >
                    <img 
                      src={image} 
                      alt={data.title} 
                      className="h-full w-full object-cover" 
                    />
                 </motion.div>

                 {/* Neden Biz? */}
                 <div>
                    <h3 className="text-2xl font-heading font-bold text-sirver-secondary mb-6 flex items-center gap-2">
                       <CheckCircle2 className="text-sirver-primary" /> Neden Tercih Edilmeli?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {data.features.map((feature: string, i: number) => (
                          <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                             <p className="text-gray-700 font-medium leading-relaxed">{feature}</p>
                          </div>
                       ))}
                    </div>
                 </div>

                 {/* Süreç Adımları */}
                 <div>
                    <h3 className="text-2xl font-heading font-bold text-sirver-secondary mb-6 flex items-center gap-2">
                       <Settings className="text-sirver-accent" /> Operasyon Süreci
                    </h3>
                    <div className="relative border-l-4 border-gray-200 ml-4 space-y-8">
                       {data.process.map((step: any, i: number) => (
                          <div key={i} className="relative pl-8">
                             <div className="absolute -left-[11px] top-0 w-5 h-5 bg-sirver-primary rounded-full border-4 border-white shadow-sm"></div>
                             <h4 className="text-lg font-bold text-sirver-secondary mb-1">{step.title}</h4>
                             <p className="text-gray-600 text-sm">{step.text}</p>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* SAĞ: Teknik Tablo ve Dosyalar */}
              <div className="space-y-8">
                 
                 <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-sirver-primary">
                    <h3 className="text-xl font-bold text-sirver-secondary mb-6 flex items-center gap-2">
                       <BarChart className="text-sirver-primary" /> Teknik Veriler
                    </h3>
                    <div className="space-y-4">
                       {data.specs.map((spec: any, i: number) => (
                          <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                             <span className="text-gray-500 text-sm font-medium">{spec.label}</span>
                             <span className="text-sirver-secondary font-bold text-right">{spec.value}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-sirver-secondary text-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                       <FileText className="text-sirver-accent" /> Dökümanlar
                    </h3>
                    <div className="space-y-3">
                       <button className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors text-sm">
                          <span>Ürün Analiz Raporu (.pdf)</span>
                          <ArrowLeft size={16} className="rotate-[-135deg]" />
                       </button>
                       <button className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors text-sm">
                          <span>FSC Sertifikası (.pdf)</span>
                          <ArrowLeft size={16} className="rotate-[-135deg]" />
                       </button>
                    </div>
                 </div>

                 <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <div className="flex items-start gap-3">
                       <HelpCircle className="text-blue-600 shrink-0 mt-1" />
                       <div>
                          <h4 className="font-bold text-blue-900 text-sm mb-1">Özel Üretim Yapıyor Musunuz?</h4>
                          <p className="text-blue-700 text-xs leading-relaxed">
                             Evet, tesislerimizde kazan tipinize uygun nem ve boyut aralığında (G30-G100) özel üretim yapabilmekteyiz.
                          </p>
                       </div>
                    </div>
                 </div>

              </div>

           </div>
        </section>

        <CTA />
      </main>
    </>
  );
}