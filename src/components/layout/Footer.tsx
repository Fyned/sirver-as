import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import logoFull from '../../assets/icons/logo-full.svg';

export default function Footer() {
  return (
    <footer className="bg-sirver-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* KOLON 1: Logo & Hakkında */}
        <div className="w-48 mb-6">
  <img 
    src={logoFull} 
    alt="Sirver A.Ş. Logo" 
    className="h-12 brightness-0 invert opacity-90" 
    // Footer koyu olduğu için logoyu beyazlaştırıyoruz
  />
</div>

        {/* KOLON 2: Hızlı Linkler */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-6 text-sirver-surface">Hızlı Erişim</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/kurumsal" className="hover:text-sirver-primary transition-colors">Hakkımızda</Link></li>
            <li><Link to="/urunler" className="hover:text-sirver-primary transition-colors">Odun Cipsi (Wood Chips)</Link></li>
            <li><Link to="/lojistik" className="hover:text-sirver-primary transition-colors">Lojistik Ağımız</Link></li>
            <li><Link to="/iletisim" className="hover:text-sirver-primary transition-colors">İletişim</Link></li>
          </ul>
        </div>

        {/* KOLON 3: Ürünler */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-6 text-sirver-surface">Ürün Grupları</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
             <li>Endüstriyel Odun Cipsi (G30/G50)</li>
             <li>Biyokütle Yakıtı</li>
             <li>Orman Endüstri Atıkları</li>
             <li>Geri Dönüşüm Hammaddesi</li>
          </ul>
        </div>

        {/* KOLON 4: İletişim */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-6 text-sirver-surface">İletişim</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-sirver-primary mt-1" size={18} />
              <span>Konya Organize Sanayi Bölgesi,<br/>Konya, Türkiye</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-sirver-primary" size={18} />
              <span>+90 (332) 000 00 00</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-sirver-primary" size={18} />
              <span>info@sirver-as.com</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-sirver-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-sirver-primary transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2025 Sirver A.Ş. Tüm hakları saklıdır.</p>
        <p>GMG Design tarafından tasarlanmıştır.</p>
      </div>
    </footer>
  );
}