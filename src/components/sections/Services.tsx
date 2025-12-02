import { motion } from 'framer-motion';
import { Factory, Leaf, Truck, Flame } from 'lucide-react';
import Placeholder from '../ui/Placeholder';

const ServiceCard = ({ title, desc, icon: Icon, delay, className, children }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between overflow-hidden relative group ${className}`}
  >
    <div className="z-10 relative">
      <div className="w-12 h-12 rounded-lg bg-sirver-surface flex items-center justify-center mb-4 text-sirver-primary group-hover:bg-sirver-primary group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-heading font-bold text-sirver-secondary mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
    {children}
  </motion.div>
);

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-sirver-secondary mb-4">
            SANAYİ TİPİ ENERJİ HAMMADDESİ
          </h2>
          <p className="text-gray-600">
            Odun cipsini sadece bir atık değil, kalorifik değeri yüksek mühendislik ürünü bir yakıt olarak işliyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          
          <ServiceCard 
            title="Premium Odun Cipsi (G30 / G50)" 
            desc="Kazan verimliliğini maksimize eden homojen partikül boyutu. <%20 nem oranı garantisi ile fosil yakıtlara göre %40'a varan maliyet avantajı sağlayan yüksek enerjili yakıt."
            icon={Flame}
            delay={0.1}
            className="md:col-span-2 relative border-l-4 border-l-sirver-primary"
          >
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity hidden md:block bg-sirver-primary">
               <Placeholder label="YAKIN ÇEKİM CİPS (G50)" height="h-full" className="border-none bg-transparent" />
            </div>
          </ServiceCard>

          <ServiceCard 
            title="Endüstriyel Hammadde" 
            desc="MDF, Sunta ve Kağıt endüstrisi için lif yapısı bozulmamış, kabuksuz ve temiz yonga tedariği. Standartlara uygun eleme teknolojisi."
            icon={Factory}
            delay={0.2}
            className="md:row-span-2 bg-sirver-secondary text-white"
          >
             <div className="mt-6 h-40 w-full rounded-lg overflow-hidden opacity-50">
                <Placeholder label="HAMMADDE STOK SAHASI" height="h-full" className="bg-white/10 text-white border-white/20" />
             </div>
          </ServiceCard>

          <ServiceCard 
            title="Sertifikalı Kaynak" 
            desc="%100 Orman Genel Müdürlüğü endüstriyel plantasyon sahalarından yasal ve izlenebilir kesim."
            icon={Leaf}
            delay={0.3}
          />

          <ServiceCard 
            title="Fabrika Teslim Lojistik" 
            desc="Kendi tır filomuz ile tam zamanında (JIT) teslimat güvencesi."
            icon={Truck}
            delay={0.4}
          />

        </div>
      </div>
    </section>
  );
}