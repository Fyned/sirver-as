import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Factory, Truck, Leaf, Flame, ArrowRight, CheckCircle2, Wheat, Trees } from 'lucide-react';
import Placeholder from '../components/ui/Placeholder';
import CTA from '../components/sections/CTA';

// MEVCUT GÖRSELLER
import imgWood from '../assets/images/services/wood-chips-closeup.jpg';
import imgBiomass from '../assets/images/services/biomass-energy.jpg';
import imgForest from '../assets/images/services/forest-residue.jpg';
import imgLogistics from '../assets/images/services/logistics-fleet.jpg';

// ORMANSAL HİZMETLER
const forestryServices = [
  {
    id: "odun-cipsi",
    title: "Endüstriyel Odun Cipsi",
    icon: Factory,
    image: imgWood,
    desc: "Yonga levha (MDF) ve kağıt endüstrisi için yüksek standartlarda hammadde tedariği.",
    details: ["G30/G50 Standart Boyut", "Kabuksuz Temiz Yonga", "Günlük 1000+ Ton Kapasite"]
  },
  {
    id: "orman-atiklari",
    title: "Orman Endüstri Atıkları",
    icon: Trees,
    image: imgForest,
    desc: "Orman sahalarındaki üretim artıklarının ve dalların ekonomiye kazandırılması.",
    details: ["Saha Temizliği & İyileştirme", "Yerinde Mobil Kırım", "FSC Sertifikalı Kaynak"]
  }
];

// TARIMSAL HİZMETLER (YENİ)
const agriculturalServices = [
  {
    id: "misir-sapi",
    title: "Mısır Sapı Balyası",
    icon: Wheat,
    // Şimdilik Placeholder, Faz 3'te görsel gelecek
    image: null, 
    desc: "Biyokütle enerji santralleri ve hayvancılık için yüksek lifli, ekonomik mısır sapı balyaları.",
    details: ["Düşük Nem Oranı", "Yüksek Sıkıştırma (Büyük Balya)", "Enerji ve Yem Amaçlı Kullanım"]
  },
  {
    id: "tarimsal-biyokutle",
    title: "Tarımsal Biyokütle",
    icon: Leaf,
    // Şimdilik Placeholder, Faz 3'te görsel gelecek
    image: null, 
    desc: "Ayçiçeği sapı, kanola ve diğer tarla atıklarının enerjiye dönüşümü.",
    details: ["Sezonluk Düzenli Tedarik", "Yüksek Kalorifik Değer", "Çevre Dostu Geri Dönüşüm"]
  }
];

// ORTAK HİZMETLER
const commonServices = [
  {
    id: "biyokutle-yakiti",
    title: "Biyokütle Enerji Yakıtı",
    icon: Flame,
    image: imgBiomass,
    desc: "Hem ormansal hem tarımsal kaynaklı, sanayi kazanlarına uygun karma veya saf yakıt.",
    details: ["%20-30 Nem Garantisi", "Kazan Verimliliği Odaklı", "Düşük Emisyon"]
  },
  {
    id: "lojistik",
    title: "Lojistik Çözümleri",
    icon: Truck,
    image: imgLogistics,
    desc: "Tüm ürün gruplarında tarladan/ormandan fabrikanıza JIT (Tam Zamanında) teslimat.",
    details: ["Walking Floor Tırlar", "Geniş Araç Filosu", "7/24 Sevkiyat"]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Faaliyet Alanları | Sirver A.Ş.</title>
        <meta name="description" content="Ormansal atık yönetimi, odun cipsi ve tarımsal biyokütle (mısır sapı) balyalama hizmetlerimiz." />
      </Helmet>

      <main className="pt-32 pb-0 bg-gray-50">
        
        {/* HERO */}
        <section className="container mx-auto px-4 mb-20 text-center">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl mx-auto"
           >
             <span className="text-sirver-accent font-bold tracking-widest text-sm uppercase mb-4 block">Entegre Atık Yönetimi</span>
             <h1 className="text-4xl md:text-6xl font-heading font-bold text-sirver-secondary mb-6">
               DOĞANIN İKİ YÜZÜ: <br/> 
               <span className="text-sirver-primary">ORMAN</span> VE <span className="text-yellow-600">TARIM</span>
             </h1>
             <p className="text-xl text-gray-600">
               Türkiye'nin biyokütle potansiyelini tam kapasiteyle kullanıyoruz. Hem orman hem de tarla atıklarını enerjiye dönüştürüyoruz.
             </p>
           </motion.div>
        </section>

        {/* 1. BÖLÜM: ORMANSAL ATIKLAR */}
        <section className="container mx-auto px-4 mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-gray-200 pb-4">
            <Trees className="text-sirver-primary" size={40} />
            <h2 className="text-3xl font-heading font-bold text-sirver-secondary">Ormansal Faaliyetler</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {forestryServices.map((service) => (
              <ServiceItem key={service.id} service={service} color="green" />
            ))}
          </div>
        </section>

        {/* 2. BÖLÜM: TARIMSAL ATIKLAR (YENİ) */}
        <section className="container mx-auto px-4 mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-gray-200 pb-4">
            <Wheat className="text-yellow-600" size={40} />
            <h2 className="text-3xl font-heading font-bold text-sirver-secondary">Tarımsal Faaliyetler</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {agriculturalServices.map((service) => (
              <ServiceItem key={service.id} service={service} color="yellow" />
            ))}
          </div>
        </section>

        {/* 3. BÖLÜM: ORTAK & ENERJİ */}
        <section className="bg-[#111827] py-20 mb-0">
          <div className="container mx-auto px-4">
             <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-4">
                <Flame className="text-sirver-accent" size={40} />
                <h2 className="text-3xl font-heading font-bold text-white">Enerji & Lojistik</h2>
             </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {commonServices.map((service) => (
                  <ServiceItem key={service.id} service={service} color="dark" />
                ))}
             </div>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}

// YARDIMCI BİLEŞEN (KOD TEKRARINI ÖNLEMEK İÇİN)
function ServiceItem({ service, color }: any) {
  const isDark = color === 'dark';
  const accentColor = color === 'yellow' ? 'text-yellow-600' : (color === 'green' ? 'text-sirver-primary' : 'text-sirver-accent');
  const bgColor = color === 'yellow' ? 'bg-yellow-50' : (color === 'green' ? 'bg-green-50' : 'bg-white/10');
  const textColor = isDark ? 'text-white' : 'text-sirver-secondary';
  const descColor = isDark ? 'text-gray-400' : 'text-gray-600';

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100'} p-8 rounded-3xl border shadow-lg flex flex-col md:flex-row gap-8 items-center`}
    >
      {/* Görsel */}
      <div className="w-full md:w-1/2 h-48 md:h-full min-h-[200px] rounded-2xl overflow-hidden relative">
         {service.image ? (
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
         ) : (
            <Placeholder label={`${service.title} Görseli`} className="w-full h-full bg-gray-200 border-none" />
         )}
      </div>

      {/* İçerik */}
      <div className="w-full md:w-1/2">
         <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${bgColor} ${accentColor}`}>
            <service.icon size={24} />
         </div>
         <h3 className={`text-2xl font-bold mb-3 ${textColor}`}>{service.title}</h3>
         <p className={`text-sm mb-6 leading-relaxed ${descColor}`}>{service.desc}</p>
         
         <ul className="space-y-2 mb-6">
            {service.details.map((detail: string, i: number) => (
              <li key={i} className={`flex items-center gap-2 text-xs font-bold ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                <CheckCircle2 size={14} className={accentColor} /> {detail}
              </li>
            ))}
         </ul>

         <Link 
            to={`/hizmetler/${service.id}`} 
            className={`inline-flex items-center gap-2 font-bold text-sm transition-all ${accentColor} hover:gap-3`}
         >
            İncele <ArrowRight size={16} />
         </Link>
      </div>
    </motion.div>
  )
}