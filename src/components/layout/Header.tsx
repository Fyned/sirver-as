import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import logoFull from '../../assets/icons/logo-full.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll takibi
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
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
    <div className="fixed w-full z-50 font-sans">
      
      {/* 1. TOP BAR (Sadece en üstteyken görünür, scroll yapınca kaybolur veya daralır) */}
      <div className={`bg-sirver-secondary text-white transition-all duration-500 overflow-hidden ${scrolled ? 'h-0' : 'h-10'} flex items-center`}>
        <div className="container mx-auto px-4 flex justify-between text-xs font-medium tracking-wider text-gray-300">
          <div className="flex gap-6">
            <a href="mailto:info@sirver-as.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} className="text-sirver-accent" /> info@sirver-as.com
            </a>
            <a href="tel:+905309235033" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} className="text-sirver-accent" /> +90 530 923 50 33
            </a>
          </div>
          <div className="hidden md:flex gap-4">
            <span>Konya / TÜRKİYE</span>
            <span className="text-sirver-primary">|</span>
            <span>ISO 9001:2015</span>
          </div>
        </div>
      </div>

      {/* 2. ANA MENÜ (Glassmorphism Efektli) */}
      <header 
        className={`transition-all duration-500 border-b ${
          scrolled 
            ? 'glass py-3 border-gray-200/50 shadow-glass' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" className="relative z-50">
             <img 
               src={logoFull} 
               alt="Sirver A.Ş." 
               className={`transition-all duration-500 ${
                 scrolled 
                   ? 'h-10 filter-none'  // Scroll yapınca orijinal renkli logo
                   : 'h-12 brightness-0 invert' // En tepedeyken beyaz logo (Koyu zemin üstünde)
               }`} 
             />
          </Link>

          {/* MASAÜSTÜ MENÜ */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 relative group ${
                  scrolled ? 'text-sirver-secondary hover:text-sirver-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                {/* Hover Alt Çizgisi */}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-sirver-primary' : 'bg-white'}`}></span>
              </Link>
            ))}
            
            {/* Teklif Al Butonu */}
            <Link 
              to="/iletisim" 
              className={`flex items-center gap-2 px-6 py-2.5 rounded shadow-lg font-bold text-sm transition-all transform hover:-translate-y-0.5 ${
                scrolled 
                  ? 'bg-sirver-primary text-white hover:bg-green-800' 
                  : 'bg-sirver-accent text-white hover:bg-orange-600'
              }`}
            >
              TEKLİF AL <ChevronRight size={16} />
            </Link>
          </nav>

          {/* MOBİL MENÜ BUTONU */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`md:hidden relative z-50 p-2 rounded ${
              scrolled ? 'text-sirver-secondary' : 'text-white'
            }`}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* MOBİL MENÜ (Full Screen Overlay) */}
        <div className={`fixed inset-0 bg-sirver-secondary/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-heading font-bold text-white hover:text-sirver-accent transition-colors tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/iletisim" 
            onClick={() => setIsOpen(false)} 
            className="mt-4 px-8 py-4 bg-sirver-primary text-white rounded font-bold text-lg"
          >
            TEKLİF AL
          </Link>
        </div>
      </header>
    </div>
  );
}