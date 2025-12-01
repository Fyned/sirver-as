import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>İletişim | Sirver A.Ş.</title>
        <meta name="description" content="Konya merkezli ofisimiz ve Türkiye geneli lojistik ağımızla iletişime geçin. Odun cipsi tedariği için teklif alın." />
      </Helmet>

      <main className="pt-32 pb-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-sirver-secondary mb-4">BİZE ULAŞIN</h1>
            <p className="text-gray-600 text-lg">
              Enerji ve hammadde tedariği süreçleriniz için uzman ekibimizle görüşün. 
              <br/>Size en uygun çözümü sunmak için buradayız.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* SOL: İletişim Kartı */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border-t-4 border-sirver-primary h-full">
              <h3 className="text-2xl font-bold text-sirver-secondary mb-8">İletişim Bilgileri</h3>
              
              <div className="space-y-8">
                {/* Adres */}
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-sirver-primary shrink-0 group-hover:bg-sirver-primary group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-1">Merkez Ofis</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Esmira Office Center No:1/49<br/>
                      Musalla Bağları, Gürsesler Sk.<br/>
                      42060 Selçuklu, Konya
                    </p>
                    <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.362624328321!2d32.4895679!3d37.8753281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085006093602d%3A0xe5305016e78046f0!2sEsmira%20Office%20Center!5e0!3m2!1str!2str!4v1701440000000!5m2!1str!2str" target="_blank" rel="noreferrer" className="text-sirver-primary text-sm font-bold mt-2 inline-flex items-center gap-1 hover:underline">
                      Yol Tarifi Al <ExternalLink size={12}/>
                    </a>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-sirver-primary shrink-0 group-hover:bg-sirver-primary group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-1">Telefon / WhatsApp</h4>
                    <p className="text-gray-600">
                      <a href="tel:+905309235033" className="hover:text-sirver-primary transition-colors text-lg font-bold text-sirver-secondary">+90 530 923 50 33</a>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Hafta içi 08:30 - 18:00</p>
                  </div>
                </div>

                {/* E-Posta */}
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-sirver-primary shrink-0 group-hover:bg-sirver-primary group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-1">E-Posta</h4>
                    <p className="text-gray-600 font-medium">
                      info@sirver-as.com
                    </p>
                    <p className="text-xs text-gray-400 mt-1">24 saat içinde yanıtlanır</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SAĞ: Harita */}
            <div className="lg:col-span-2 bg-white p-2 rounded-2xl shadow-xl shadow-gray-200/50 h-[400px] lg:h-auto overflow-hidden relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.362624328321!2d32.4895679!3d37.8753281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085006093602d%3A0xe5305016e78046f0!2sEsmira%20Office%20Center!5e0!3m2!1str!2str!4v1701440000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sirver Ofis Konumu"
                className="group-hover:scale-[1.02] transition-transform duration-700"
              ></iframe>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}