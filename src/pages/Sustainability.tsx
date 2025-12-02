import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Leaf, RefreshCcw, Globe, Trees } from 'lucide-react';
import Placeholder from '../components/ui/Placeholder';
import CTA from '../components/sections/CTA'; // YENİ EKLENDİ

export default function Sustainability() {
  return (
    <>
      <Helmet>
        <title>Sürdürülebilirlik | Sirver A.Ş.</title>
        <meta name="description" content="Karbon nötr gelecek için çalışıyoruz. Sürdürülebilir orman yönetimi ve temiz enerji zinciri." />
      </Helmet>

      <main className="pt-32 pb-0">
        
        {/* HERO */}
        <section className="container mx-auto px-4 mb-20">
          <div className="bg-sirver-primary rounded-3xl p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
             
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="relative z-10"
             >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/20">
                  <Leaf size={16} /> YEŞİL GELECEK VİZYONU
                </div>
                <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6">
                  DOĞADAN ALDIĞIMIZI <br/> DOĞAYA VERİYORUZ
                </h1>
                <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
                  Sadece enerji üretmiyoruz; atıl orman atıklarını ekonomiye kazandırarak karbon döngüsünü dengeliyoruz.
                </p>
             </motion.div>
          </div>
        </section>

        {/* DÖNGÜSEL EKONOMİ */}
        <section className="container mx-auto px-4 mb-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-sirver-secondary mb-6">
                  Döngüsel Ekonomi Modeli
                </h2>
                <div className="space-y-6">
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shrink-0 font-bold text-xl">1</div>
                      <div>
                        <h4 className="font-bold text-lg text-sirver-secondary">Orman Bakımı</h4>
                        <p className="text-gray-600 text-sm">Orman Genel Müdürlüğü kontrolünde, orman sağlığı için yapılması gereken aralama ve bakım çalışmaları.</p>
                      </div>
                   </div>
                   <div className="h-8 w-0.5 bg-gray-200 ml-6"></div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shrink-0 font-bold text-xl">2</div>
                      <div>
                        <h4 className="font-bold text-lg text-sirver-secondary">Atık Toplama</h4>
                        <p className="text-gray-600 text-sm">Orman zemininde kalan ve yangın riski oluşturan dalların/atıkların toplanması.</p>
                      </div>
                   </div>
                   <div className="h-8 w-0.5 bg-gray-200 ml-6"></div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-sirver-primary rounded-full flex items-center justify-center text-white shrink-0 font-bold text-xl">3</div>
                      <div>
                        <h4 className="font-bold text-lg text-sirver-secondary">Enerjiye Dönüşüm</h4>
                        <p className="text-gray-600 text-sm">Toplanan atıkların cips haline getirilerek fosil yakıt yerine kullanılması.</p>
                      </div>
                   </div>
                </div>
              </div>
              
              <div className="h-[500px] rounded-3xl overflow-hidden relative">
                 <Placeholder label="ORMAN / DOĞA FOTOSU" className="h-full w-full border-none" />
                 <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 rounded-xl">
                    <div className="flex items-center gap-4">
                       <RefreshCcw className="text-sirver-primary" size={32} />
                       <div>
                          <div className="font-bold text-sirver-secondary text-lg">%0 Karbon Ayak İzi</div>
                          <div className="text-xs text-gray-500">Biyokütle, büyürken emdiği karbonu geri verir.</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* İSTATİSTİKLER */}
        <section className="bg-gray-50 py-24">
           <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                 <div className="bg-white p-10 rounded-2xl shadow-sm">
                    <Trees size={48} className="text-sirver-primary mx-auto mb-4" />
                    <div className="text-4xl font-heading font-bold text-sirver-secondary mb-2">500+ Ha</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Temizlenen Orman Alanı</div>
                 </div>
                 <div className="bg-white p-10 rounded-2xl shadow-sm">
                    <Globe size={48} className="text-blue-500 mx-auto mb-4" />
                    <div className="text-4xl font-heading font-bold text-sirver-secondary mb-2">250k Ton</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Önlenen CO2 Salınımı</div>
                 </div>
                 <div className="bg-white p-10 rounded-2xl shadow-sm">
                    <Leaf size={48} className="text-sirver-accent mx-auto mb-4" />
                    <div className="text-4xl font-heading font-bold text-sirver-secondary mb-2">%100</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Yenilenebilir Kaynak</div>
                 </div>
              </div>
           </div>
        </section>

        <CTA />
      </main>
    </>
  );
}