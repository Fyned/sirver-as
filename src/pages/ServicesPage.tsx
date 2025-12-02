import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Link import edildi
import { Factory, Truck, Leaf, Flame, ArrowRight, CheckCircle2 } from 'lucide-react';
import Placeholder from '../components/ui/Placeholder';
import CTA from '../components/sections/CTA';

const services = [
  {
    id: "odun-cipsi",
    title: "Endüstriyel Odun Cipsi",
    icon: Factory,
    desc: "Yonga levha (MDF) ve kağıt endüstrisi için yüksek standartlarda hammadde tedariği.",
    details: [
      "Standart Boyutlandırma: İstenilen ebatlarda (G30, G50) homojen kırım.",
      "Kabuksuz Üretim: Lif kalitesini artıran temiz hammadde.",
      "Yüksek Kapasite: Günlük 1000+ ton üretim ve sevkiyat gücü.",
      "Analiz Garantisi: Her parti için nem ve boyut dağılım raporu."
    ]
  },
  {
    id: "biyokutle",
    title: "Biyokütle Yakıtı",
    icon: Flame,
    desc: "Enerji santralleri ve sanayi kazanları için yüksek kalorili, ekonomik yakıt çözümü.",
    details: [
      "Yüksek Kalori: 3500-4200 kcal/kg arası net enerji değeri.",
      "Düşük Nem: Doğal veya fırın kurutma ile %20-30 nem seviyesi.",
      "Düşük Kül Oranı: Kazan verimliliğini koruyan temiz yanma.",
      "Karbon Nötr: Fosil yakıtlara göre çevre dostu alternatif."
    ]
  },
  {
    id: "orman-atiklari",
    title: "Orman Endüstri Atıkları",
    icon: Leaf,
    desc: "Orman sahalarındaki üretim artıklarının ekonomiye kazandırılması.",
    details: [
      "Saha Temizliği: Orman yangın riskini azaltan atık toplama operasyonu.",
      "Geri Dönüşüm: Dal, kök ve kabukların enerjiye dönüşümü.",
      "Sürdürülebilir Kaynak: OGM izinli sahalardan yasal tedarik.",
      "Çevresel Etki: Karbon döngüsüne pozitif katkı."
    ]
  },
  {
    id: "lojistik",
    title: "Lojistik Çözümleri",
    icon: Truck,
    desc: "Hammaddeyi kaynağından fabrikanıza tam zamanında (JIT) ulaştıran güçlü filo.",
    details: [
      "Hareketli Taban (Walking Floor): Hızlı boşaltım sağlayan özel tırlar.",
      "Geniş Filo: Türkiye'nin her noktasına sevkiyat imkanı.",
      "Stok Yönetimi: Fabrikanızın sahasında stok takibi ve yönetimi.",
      "7/24 Operasyon: Üretiminizin durmaması için kesintisiz akış."
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz | Sirver A.Ş.</title>
        <meta name="description" content="Endüstriyel odun cipsi, biyokütle yakıtı, orman atıkları geri dönüşümü ve lojistik çözümleri." />
      </Helmet>

      <main className="pt-32 pb-0 bg-gray-50">
        
        {/* HERO */}
        <section className="container mx-auto px-4 mb-20 text-center">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-3xl mx-auto"
           >
             <span className="text-sirver-accent font-bold tracking-widest text-sm uppercase mb-4 block">Çözüm Alanlarımız</span>
             <h1 className="text-4xl md:text-6xl font-heading font-bold text-sirver-secondary mb-6">
               ENDÜSTRİYEL <br/> <span className="text-sirver-primary">ÇÖZÜM ORTAĞINIZ</span>
             </h1>
             <p className="text-xl text-gray-600">
               Hammadde tedariğinden enerji üretimine kadar uzanan entegre hizmet yelpazemiz.
             </p>
           </motion.div>
        </section>

        {/* HİZMETLER LİSTESİ */}
        <section className="container mx-auto px-4 mb-24 space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Görsel */}
              <div className="w-full lg:w-1/2 h-[400px] relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 1 ? 'from-sirver-accent/20' : 'from-sirver-primary/20'} to-transparent rounded-3xl transform rotate-3 group-hover:rotate-0 transition-all duration-500`}></div>
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                   <Placeholder label={`${service.title} GÖRSELİ`} className="h-full w-full border-none bg-gray-100" />
                </div>
              </div>

              {/* İçerik */}
              <div className="w-full lg:w-1/2">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${index % 2 === 1 ? 'bg-orange-100 text-sirver-accent' : 'bg-green-100 text-sirver-primary'}`}>
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-sirver-secondary mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {service.desc}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {service.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 size={20} className={`shrink-0 mt-1 ${index % 2 === 1 ? 'text-sirver-accent' : 'text-sirver-primary'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* GÜNCELLENEN BUTON: Artık İletişim Sayfasına Gidiyor */}
                <Link 
  to={`/hizmetler/${service.id}`} 
  className={`flex items-center gap-2 font-bold transition-all ${index % 2 === 1 ? 'text-sirver-accent hover:gap-4' : 'text-sirver-primary hover:gap-4'}`}
>
  Detaylı Bilgi Al <ArrowRight size={20} />
</Link>
              </div>
            </motion.div>
          ))}
        </section>

        <CTA />
      </main>
    </>
  );
}