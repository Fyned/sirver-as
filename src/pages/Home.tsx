import Hero from '../components/sections/Hero';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sirver A.Ş. | Endüstriyel Biyokütle ve Odun Cipsi Tedariği</title>
        <meta name="description" content="1.2 Milyon ton kapasite ile enerji sektörüne odun cipsi ve biyokütle tedariği sağlıyoruz. İnşaat kökenli lojistik güç." />
      </Helmet>
      
      <main>
        <Hero />
        
        {/* Buraya sonraki fazlarda "Hizmetler" ve "Referanslar" gelecek */}
        <section className="py-20 bg-white text-center">
            <h2 className="text-3xl font-heading text-sirver-secondary">FAZ 2: Hero Alanı Tamamlandı</h2>
            <p className="mt-4 text-gray-600">Video placeholder'ı ve istatistik şeridi yerleşti.</p>
        </section>
      </main>
    </>
  );
}