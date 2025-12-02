import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Leaf, Truck } from 'lucide-react';
import heroVideo from '../../assets/videos/hero-bg.webm'; 

export default function Hero() {
  return (
    // Değişiklik: min-h arttırıldı ve pt eklendi
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-sirver-secondary pt-20 md:pt-0">
      
      {/* 1. ARKA PLAN KATMANI */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-50"
        >
          <source src={heroVideo} type="video/webm" />
        </video> 
        <div className="absolute inset-0 bg-gradient-to-t from-sirver-secondary via-sirver-secondary/40 to-black/60" />
      </div>

      {/* 2. İÇERİK KATMANI */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white flex flex-col items-center justify-center h-full pb-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto" // Genişlik kısıtlaması eklendi
        >
          <span className="inline-block py-2 px-4 rounded-full bg-sirver-primary/80 border border-sirver-primary/50 text-white text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm shadow-lg">
            Yüksek Kalorili Biyokütle Yakıtı
          </span>
          
          {/* Başlık Boyutları Revize Edildi */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight drop-shadow-2xl tracking-tight">
            <span className="block text-white mb-2">STANDARTLARI AŞAN</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sirver-primary via-green-400 to-sirver-accent">
              ODUN CİPSİ TEDARİĞİ
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-medium drop-shadow-md leading-relaxed">
            Enerji santralleri ve sanayi tesisleri için ISO 17225-4 standartlarında, 
            düşük nem ve minimum kül oranına sahip <strong>G30/G50 Odun Cipsi</strong> üretiyoruz.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full"
        >
          <a href="/urunler" className="w-full sm:w-auto group bg-sirver-primary hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/30 hover:-translate-y-1">
            Ürünlerimizi İnceleyin
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/iletisim" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-bold backdrop-blur-md transition-all flex items-center justify-center hover:-translate-y-1">
            Lojistik Ağı & İletişim
          </a>
        </motion.div>
      </div>

      {/* 3. İSTATİSTİK ŞERİDİ */}
      <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md border-t border-white/10 hidden md:block z-20">
        <div className="container mx-auto px-4 py-6 grid grid-cols-3 gap-8 text-white divide-x divide-white/10">
          
          <div className="flex items-center justify-center gap-4">
            <TrendingUp className="text-sirver-accent" size={32} />
            <div className="text-left">
              <div className="text-2xl font-heading font-bold">1.2M Ton</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Yıllık Kapasite</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Leaf className="text-sirver-primary" size={32} />
            <div className="text-left">
              <div className="text-2xl font-heading font-bold">%100 Yerli</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Sürdürülebilir Kaynak</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Truck className="text-blue-400" size={32} />
            <div className="text-left">
              <div className="text-2xl font-heading font-bold">7/24</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Kesintisiz Lojistik</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}