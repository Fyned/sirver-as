import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppBtn from './components/ui/WhatsAppBtn'; // Yeni
import Home from './pages/Home';
import Contact from './pages/Contact'; // Yeni

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iletisim" element={<Contact />} />
          {/* Diğer sayfalar (Kurumsal, Ürünler) henüz boş olduğu için Home'a veya Contact'a yönlendirebiliriz */}
          <Route path="*" element={<Home />} /> 
        </Routes>
      </div>

      <Footer />
      
      {/* WhatsApp Butonu Tüm Sayfalarda Görünsün */}
      <WhatsAppBtn />
    </div>
  );
}

export default App;