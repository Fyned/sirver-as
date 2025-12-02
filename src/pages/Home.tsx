import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Calculator from '../components/sections/Calculator';
import References from '../components/sections/References';
import CTA from '../components/sections/CTA'; // YENİ EKLENDİ
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sirver A.Ş. | Endüstriyel Biyokütle ve Odun Cipsi Tedariği</title>
        <meta name="description" content="1.2 Milyon ton kapasite ile enerji sektörüne odun cipsi ve biyokütle tedariği sağlıyoruz. İnşaat kökenli lojistik güç." />
      </Helmet>
      
      <main>
        {/* 1. VİTRİN: Hero Alanı */}
        <Hero />
        
        {/* 2. HİZMETLER: Bento Grid */}
        <Services />
        
        {/* 3. BEYİN: Tasarruf Hesaplayıcı */}
        <Calculator />

        {/* 4. GÜVEN: Referanslar ve Miras */}
        <References />

        {/* 5. AKSİYON: Teklif Al */}
        <CTA />
      </main>
    </>
  );
}