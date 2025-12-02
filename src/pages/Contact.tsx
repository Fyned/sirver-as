import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react'; // Kullanılmayanlar kaldırıldı

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>İletişim | Sirver A.Ş.</title>
      </Helmet>

      <main className="pt-32 pb-24 bg-[#ECEFF1] min-h-screen">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-sirver-secondary mb-4">BİZE ULAŞIN</h1>
            <p className="text-gray-600 text-lg">
              Enerji tedariği ve lojistik çözümlerimiz için uzman ekibimizle iletişime geçin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* İLETİŞİM KARTI */}
            <div className="bg-white p-8 rounded-2xl shadow-lg h-full border border-gray-100">
               <h3 className="text-2xl font-bold text-sirver-secondary mb-8 flex items-center gap-2">
                 <Phone className="text-sirver-primary" /> İletişim Kanalları
               </h3>
               <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-sirver-primary shrink-0"><MapPin /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider">Merkez Ofis</h4>
                      <p className="text-gray-600 text-sm mt-1">Esmira Office Center No:1/49<br/>Selçuklu, Konya</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-sirver-primary shrink-0"><Phone /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider">Telefon</h4>
                      <a href="tel:+905309235033" className="text-lg font-bold text-sirver-secondary hover:text-sirver-primary">+90 530 923 50 33</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-sirver-primary shrink-0"><Mail /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider">E-Posta</h4>
                      <a href="mailto:info@sirver-as.com" className="text-gray-600 hover:text-sirver-primary">info@sirver-as.com</a>
                    </div>
                  </div>
               </div>
            </div>

            {/* İLETİŞİM FORMU */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-sirver-secondary mb-6 flex items-center gap-2">
                <Send className="text-sirver-accent" /> Hızlı Teklif Formu
              </h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Adınız Soyadınız</label>
                  <input type="text" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-sirver-primary focus:ring-2 focus:ring-green-100 outline-none transition-all" placeholder="Örn: Ahmet Yılmaz" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Firma Adı</label>
                  <input type="text" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-sirver-primary outline-none transition-all" placeholder="Firma Ünvanı" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Telefon</label>
                  <input type="tel" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-sirver-primary outline-none transition-all" placeholder="05XX XXX XX XX" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">İhtiyaç (Ton/Ay)</label>
                  <select className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-sirver-primary outline-none transition-all">
                    <option>Seçiniz</option>
                    <option>0 - 100 Ton</option>
                    <option>100 - 500 Ton</option>
                    <option>500 - 1000 Ton</option>
                    <option>1000+ Ton</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700">Mesajınız</label>
                  <textarea rows={4} className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-sirver-primary outline-none transition-all" placeholder="Varsa özel talepleriniz..."></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="button" className="bg-sirver-secondary hover:bg-sirver-primary text-white py-4 px-8 rounded-lg font-bold w-full transition-colors shadow-lg">
                    TEKLİF İSTEĞİNİ GÖNDER
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* HARİTA */}
          <div className="w-full h-[400px] bg-white p-2 rounded-2xl shadow-lg">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.362624328321!2d32.4895679!3d37.8753281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085006093602d%3A0xe5305016e78046f0!2sEsmira%20Office%20Center!5e0!3m2!1str!2str!4v1701440000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sirver Ofis Konumu"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
          </div>

        </div>
      </main>
    </>
  );
}