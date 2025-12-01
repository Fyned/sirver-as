import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import logoFull from '../../assets/icons/logo-full.svg';

export default function Footer() {
  return (
    <footer className="bg-sirver-secondary text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* KOLON 1: Logo & Adres */}
        <div>
          <div className="w-48 mb-6">
            <img 
              src={logoFull} 
              alt="Sirver A.Ş. Logo" 
              className="h-12 brightness-0 invert opacity-90" 
            />
          </div>
          <div className="space-y-4 text-gray-400 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-sirver-primary mt-1 min-w-[18px]" size={18} />
              <span>
                <strong>MERKEZ</strong><br/>
                Esmira Office Center No:1/49<br/>
                Musalla Bağları, Gürsesler Sk.<br/>
                42060 Selçuklu, Konya/TÜRKİYE
              </span>
            </div>
          </div>
        </div>

        {/* KOLON 2: Hızlı Linkler */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-6 text-white">Kurumsal</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-sirver-primary transition-colors">Anasayfa</Link></li>
            <li><Link to="/kurumsal" className="hover:text-sirver-primary transition-colors">Hakkımızda</Link></li>
            <li><Link to="/surdurulebilirlik" className="hover:text-sirver-primary transition-colors">Sürdürülebilirlik</Link></li>
            <li><Link to="/iletisim" className="hover:text-sirver-primary transition-colors">İletişim & Ulaşım</Link></li>
          </ul>
        </div>

        {/* KOLON 3: Ürünler */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-6 text-white">Hizmetlerimiz</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
             <li>Endüstriyel Odun Cipsi (G30/G50)</li>
             <li>Biyokütle Enerji Yakıtı</li>
             <li>Orman Endüstri Atıkları</li>
             <li>Lojistik ve Tedarik Zinciri</li>
          </ul>
        </div>

        {/* KOLON 4: İletişim */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-6 text-white">Bize Ulaşın</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="text-sirver-primary" size={18} />
              <a href="tel:+905309235033" className="hover:text-white transition-colors font-bold text-lg">
                +90 530 923 50 33
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-sirver-primary" size={18} />
              <a href="mailto:info@sirver-as.com" className="hover:text-white transition-colors">
                info@sirver-as.com
              </a>
            </li>
          </ul>
          <div className="flex gap-4 mt-8">
            <a 
              href="https://www.instagram.com/sirver_tarim/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-sirver-primary hover:text-white text-gray-400 transition-all"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2025 Sirver A.Ş. Tüm hakları saklıdır.</p>
        <p>Tarım ve Enerji Sektöründe Güçlü Çözüm Ortağınız.</p>
      </div>
    </footer>
  );
}