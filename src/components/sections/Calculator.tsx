import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Banknote, Leaf, ArrowRight, RefreshCcw } from 'lucide-react';

export default function Calculator() {
  const [fuelType, setFuelType] = useState('komur'); // Varsayılan: İthal Kömür
  const [amount, setAmount] = useState(1000); // Varsayılan: 1000 Ton/Yıl
  const [savings, setSavings] = useState(0);
  const [co2Savings, setCo2Savings] = useState(0);

  // PİYASA VERİLERİ (Birim Maliyetler - Temsili)
  // Bu oranlar odun cipsinin kalorifik değerine göre normalize edilmiştir.
  const marketData: any = {
    komur: { name: 'İthal Kömür', unit: 'Ton', priceIndex: 1.8, co2Factor: 2.4 }, // Kömür 1.8 kat daha pahalı
    dogalgaz: { name: 'Doğalgaz', unit: 'm³', priceIndex: 2.5, co2Factor: 1.9 }, // Doğalgaz 2.5 kat daha pahalı
    fueloil: { name: 'Fuel-Oil', unit: 'Litre', priceIndex: 3.2, co2Factor: 3.0 }, // En pahalısı
  };

  // Hesaplama Fonksiyonu
  useEffect(() => {
    // Basit Matematik: (Mevcut Yakıt Maliyeti - Odun Cipsi Maliyeti) * Miktar
    // Sirver Odun Cipsi Baz Fiyatı: 1.0 birim kabul edilirse;
    const currentFuelIndex = marketData[fuelType].priceIndex;
    const baseCost = amount * 1000; // Temsili baz maliyet
    
    const currentCost = baseCost * currentFuelIndex;
    const sirverCost = baseCost * 1.0; // Odun cipsi maliyeti (Daha ucuz)
    
    const calculatedSavings = currentCost - sirverCost;
    const calculatedCo2 = amount * marketData[fuelType].co2Factor; // Ton başına karbon

    setSavings(Math.floor(calculatedSavings));
    setCo2Savings(Math.floor(calculatedCo2));
  }, [fuelType, amount]);

  return (
    <section className="py-24 bg-sirver-secondary text-white relative overflow-hidden">
      {/* Arka Plan Efekti */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sirver-primary rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* SOL: Form Alanı */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-sirver-primary/20 rounded-lg text-sirver-primary">
                <CalcIcon size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Tasarrufunuzu Hesaplayın
              </h2>
            </div>
            <p className="text-gray-400 mb-10 text-lg">
              Mevcut yakıt tüketiminizi girin, Sirver A.Ş. Yüksek Kalorili Odun Cipsi ile işletmenizin yıllık kazancını anında görün.
            </p>

            <div className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              {/* Yakıt Tipi Seçimi */}
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">Mevcut Yakıt Türünüz</label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.keys(marketData).map((key) => (
                    <button
                      key={key}
                      onClick={() => setFuelType(key)}
                      className={`py-3 px-4 rounded-lg text-sm font-bold transition-all border ${
                        fuelType === key 
                        ? 'bg-sirver-primary border-sirver-primary text-white shadow-lg shadow-green-900/50' 
                        : 'bg-transparent border-gray-600 text-gray-400 hover:border-gray-400'
                      }`}
                    >
                      {marketData[key].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Miktar Girişi */}
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                  Yıllık Tüketim ({marketData[fuelType].unit})
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-sirver-primary"
                  />
                  <div className="flex justify-between mt-2 font-mono text-sirver-primary font-bold text-xl">
                    <span>{amount.toLocaleString()} {marketData[fuelType].unit}</span>
                    <RefreshCcw size={16} className="text-gray-500 animate-spin-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ: Sonuç Kartı (Dinamik) */}
          <div className="relative">
            <motion.div 
              key={savings} // Rakam değişince animasyon tetikler
              initial={{ scale: 0.95, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-br from-white to-gray-200 text-sirver-secondary rounded-3xl p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Banknote size={180} />
              </div>

              <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-2">Tahmini Yıllık Tasarruf</h3>
              <div className="text-5xl md:text-6xl font-heading font-bold text-sirver-primary mb-2">
                ₺{savings.toLocaleString()}
              </div>
              <p className="text-sm text-gray-500 mb-8">* Piyasa ortalamalarına göre yaklaşık değerdir.</p>

              <div className="flex items-center gap-4 bg-green-100 p-4 rounded-xl mb-8">
                <div className="bg-white p-2 rounded-full text-green-600">
                  <Leaf size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-green-800">Doğa da Kazanıyor</div>
                  <div className="text-xs text-green-600">
                    Yıllık <strong>{co2Savings} Ton</strong> karbon salınımı engellenecek.
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-sirver-secondary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                Detaylı Fizibilite Raporu Alın
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}