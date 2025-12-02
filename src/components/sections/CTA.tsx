import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 bg-[#111827] relative overflow-hidden border-t border-white/5">
      {/* Arka Plan Efekti */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="absolute right-0 top-0 w-96 h-96 bg-sirver-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              PROJENİZ İÇİN EN UYGUN ÇÖZÜMÜ SUNALIM
            </h2>
            <p className="text-gray-400 text-lg">
              Yıllık yakıt ihtiyacınızı ve lojistik taleplerinizi uzman ekibimizle planlayın, işletmenize özel fiyat teklifimizi alın.
            </p>
          </div>

          <div>
            <Link 
              to="/iletisim" 
              className="group bg-[#1B5E20] hover:bg-[#144a17] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-green-900/50 flex items-center gap-3"
            >
              TEKLİF AL
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-xs text-gray-500 mt-3 text-center">
              *24 saat içinde dönüş garantisi
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}