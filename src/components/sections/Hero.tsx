import { motion } from 'framer-motion';
import { ArrowRight, Leaf, TrendingUp, Truck } from 'lucide-react';
import Placeholder from '../ui/Placeholder';

// Video dosyanız gelince buraya import edeceksiniz. 
// Şimdilik Placeholder kullanıyoruz ama üzerine "Video Alanı" yazacağız.

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-sirver-secondary">
      
      {/* 1. ARKA PLAN KATMANI (Video Gelecek) */}
      <div className="absolute inset-0 z-0">
        {/* GERÇEK VİDEO İÇİN KOD (Dosya hazır olunca bu yorumu açın):
        <video 
          autoPlay loop muted playsInline 
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/assets/videos/hero-bg.webm" type="video/webm" />
        </video> 
        */}
        
        {/* ŞİMDİLİK: Placeholder */}
        <div className="w-full h-full relative">
           <Placeholder 
             label="ARKA PLAN VİDEOSU (1920x1080 - 15MB)" 
             height="h-full" 
             className="opacity-20 border-none bg-black rounded-none" 
           />
           {/* Videonun üzerine koyu perde çekiyoruz ki yazı okunsun */}
           <div className="absolute inset-0 bg-gradient-to-t from-sirver-secondary via-transparent to-black/60" />
        </div>
      </div>

      {/* 2. İÇERİK KATMANI */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white mt-10">
        
        {/* Animasyonlu Başlık */}
        <motion.div 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <span className="inline-block py-1 px-3 rounded-full bg-sirver-primary/20 border border-sirver-primary/50 text-sirver-primary text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
    Yüksek Kalorili Biyokütle Yakıtı
  </span>
  <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
    <span className="block text-white">STANDARTLARI AŞAN</span>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sirver-primary to-green-400">
      ODUN CİPSİ TEDARİĞİ
    </span>
  </h1>
  <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
    Enerji santralleri ve sanayi tesisleri için ISO 17225-4 standartlarında, 
    düşük nem ve minimum kül oranına sahip <strong>G30/G50 Odun Cipsi</strong> üretiyoruz.
  </p>
</motion.div>

        {/* Aksiyon Butonları */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <a href="/urunler" className="group bg-sirver-primary hover:bg-green-700 text-white px-8 py-4 rounded font-bold transition-all flex items-center gap-2">
            Ürünlerimizi İnceleyin
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/iletisim" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded font-bold backdrop-blur-md transition-all">
            Lojistik Ağı & İletişim
          </a>
        </motion.div>
      </div>

      {/* 3. İSTATİSTİK ŞERİDİ (Alt Kısım) */}
      <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-md border-t border-white/10 hidden md:block">
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