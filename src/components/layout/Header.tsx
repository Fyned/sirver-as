import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Placeholder from '../ui/Placeholder';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll yapınca menünün arka planını koyulaştır
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Kurumsal', path: '/kurumsal' },
    { name: 'Ürünler', path: '/urunler' },
    { name: 'Sürdürülebilirlik', path: '/surdurulebilirlik' },
    { name: 'Referanslar', path: '/referanslar' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        
        {/* LOGO ALANI */}
        <Link to="/" className="flex items-center gap-2">
           {/* Logo gelince burayı img etiketi ile değiştireceğiz */}
           {/* Önerilen Logo Boyutu: 180x50 px (SVG) */}
           <div className={scrolled ? "w-32" : "w-40"}>
             <Placeholder label="LOGO (SVG)" height="h-12" className="bg-opacity-50 border-sirver-primary" />
           </div>
        </Link>

        {/* MASAÜSTÜ MENÜ */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium uppercase tracking-wide hover:text-sirver-primary transition-colors ${scrolled ? 'text-sirver-secondary' : 'text-sirver-secondary md:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/teklif-al" className="bg-sirver-accent hover:bg-orange-700 text-white px-5 py-2 rounded font-bold uppercase text-sm transition-all shadow-lg hover:shadow-orange-500/30">
            Teklif Al
          </Link>
        </nav>

        {/* MOBİL MENÜ BUTONU */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-sirver-secondary">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBİL MENÜ DRAWER */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-sirver-secondary font-semibold text-lg border-b border-gray-100 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/teklif-al" onClick={() => setIsOpen(false)} className="bg-sirver-accent text-white text-center py-3 rounded font-bold mt-2">
            HIZLI TEKLİF AL
          </Link>
        </div>
      )}
    </header>
  );
}