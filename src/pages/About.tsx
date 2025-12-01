import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, TrendingUp, Users } from 'lucide-react';
import Placeholder from '../components/ui/Placeholder';

export default function About() {
  return (
    <>
      <Helmet>
        <title>Hakkımızda | Sirver A.Ş.</title>
        <meta name="description" content="Sirver A.Ş., inşaat sektöründeki köklü tecrübesini biyokütle enerji sektörüne taşıyarak, sürdürülebilir ve yüksek kapasiteli hammadde tedariği sağlar." />
      </Helmet>

      <main className="pt-20">
        
        {/* 1. ÜST BAŞLIK (Hero) */}
        <section className="bg-sirver-secondary text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6"
            >
              GELECEĞİN ENERJİSİNİ <br/>
              <span className="text-sirver-primary">İNŞA EDİYORUZ</span>
            </motion.h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              İnşaat sektöründeki operasyonel disiplinimizi, enerji sektörünün hammadde ihtiyacıyla birleştirdik.
            </p>
          </div>
          {/* Arka plan deseni */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </section>

        {/* 2. BİZ KİMİZ (Görsel + Metin) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                 <Placeholder label="KURUMSAL / FABRİKA FOTOĞRAFI" height="h-full" className="bg-gray-200 border-none" />
              </div>
              {/* Yüzen İstatistik Kutusu */}
              <div className="absolute -bottom-6 -right-6 bg-sirver-primary text-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="text-4xl font-heading font-bold">1.2M+</div>
                <div className="text-sm opacity-90">Yıllık Ton Kapasite</div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-bold text-sirver-secondary mb-6">
                Gücümüzü Tecrübemizden Alıyoruz
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sirver A.Ş., kökleri büyük ölçekli altyapı ve üstyapı projelerine dayanan bir mühendislik ve taahhüt firması olarak kurulmuştur. Yıllarca şantiyelerde edindiğimiz <strong>"zorlu koşullarda iş yönetme"</strong> ve <strong>"dakik lojistik"</strong> yetkinliğimizi, bugün enerji sektörüne aktarıyoruz.
                </p>
                <p>
                  Küresel enerji krizinin ve karbon nötr hedeflerinin gündemde olduğu bu dönemde, sanayi tesislerine ve biyokütle santrallerine <strong>kesintisiz, standartlara uygun ve yüksek kalorili</strong> odun cipsi tedariği sağlıyoruz.
                </p>
                <p>
                  Sadece bir tedarikçi değil, enerji üretim sürecinizin stratejik bir ortağıyız.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 3. DEĞERLERİMİZ (Grid) */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-sirver-primary">
                <ShieldCheck size={40} className="text-sirver-primary mb-4" />
                <h3 className="text-xl font-bold text-sirver-secondary mb-3">Güvenilirlik</h3>
                <p className="text-gray-500 text-sm">
                  Taahhüt ettiğimiz nem oranı ve kalori değerinin arkasındayız. Her sevkiyat laboratuvar analizinden geçer.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-sirver-accent">
                <TrendingUp size={40} className="text-sirver-accent mb-4" />
                <h3 className="text-xl font-bold text-sirver-secondary mb-3">Süreklilik</h3>
                <p className="text-gray-500 text-sm">
                  7/24 çalışan lojistik ağımız ve geniş stok sahalarımız ile fabrikanız asla yakıtsız kalmaz.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-500">
                <Users size={40} className="text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-sirver-secondary mb-3">Çözüm Ortaklığı</h3>
                <p className="text-gray-500 text-sm">
                  Sadece ürün satmıyor, kazan verimliliğinizi artıracak teknik danışmanlık da sunuyoruz.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. MİSYON & VİZYON */}
        <section className="py-20 bg-sirver-secondary text-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-sirver-primary" size={32} />
                <h3 className="text-2xl font-heading font-bold">Misyonumuz</h3>
              </div>
              <p className="text-gray-400">
                Türkiye'nin yerli biyokütle kaynaklarını en verimli şekilde enerjiye dönüştürerek, sanayicimizin enerji maliyetlerini düşürmek ve karbon ayak izini azaltmak.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-sirver-accent" size={32} />
                <h3 className="text-2xl font-heading font-bold">Vizyonumuz</h3>
              </div>
              <p className="text-gray-400">
                Avrupa standartlarında üretim yapan, dijital altyapısı ve lojistik gücüyle bölgenin lider biyokütle yakıt tedarikçisi olmak.
              </p>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}