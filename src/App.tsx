import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppBtn from './components/ui/WhatsAppBtn';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About'; // 1. YENİ IMPORT

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      <Header />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/kurumsal" element={<About />} /> {/* 2. YENİ ROTA */}
          
          {/* Diğer sayfalar için şimdilik placeholder */}
          <Route path="*" element={<Home />} /> 
        </Routes>
      </div>

      <Footer />
      <WhatsAppBtn />
    </div>
  );
}

export default App;