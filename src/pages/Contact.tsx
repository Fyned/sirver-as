import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>İletişim | Sirver A.Ş.</title>
        <meta name="description" content="Konya merkezli ofisimiz ve Türkiye geneli lojistik ağımızla iletişime geçin. Odun cipsi tedariği için teklif alın." />
      </Helmet>

      <main className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl font-heading font-bold text-sirver-secondary mb-4">BİZE ULAŞIN</h1>
            <p className="text-gray-600">
              Enerji ve hammadde tedariği süreçleriniz için uzman ekibimizle görüşün.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* SOL: İletişim Bilgileri */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-sirver-primary h-full">
              <h3 className="text-xl font-bold text-sirver-secondary mb-6">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-sirver-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase">Merkez Ofis</h4>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      Esmira Office Center No:1/49<br/>
                      Musalla Bağları, Gürsesler Sk.<br/>
                      42060 Selçuklu, Konya
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-sirver-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase">Telefon / WhatsApp</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      <a href="tel:+905309235033" className="hover:text-sirver-primary transition-colors">+90 530 923 50 33</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-sirver-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase">E-Posta</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      info@sirver-as.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-sirver-primary shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase">Çalışma Saatleri</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Pzt - Cmt: 08:30 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SAĞ: Harita (Google Maps Embed) */}
            <div className="lg:col-span-2 bg-white p-2 rounded-2xl shadow-lg h-[400px] lg:h-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.362624328321!2d32.4895679!3d37.8753281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085006093602d%3A0xe5305016e78046f0!2sEsmira%20Office%20Center!5e0!3m2!1str!2str!4v1701440000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sirver Ofis Konumu"
              ></iframe>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}