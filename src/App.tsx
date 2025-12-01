import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppBtn from './components/ui/WhatsAppBtn'; // Yeni Import
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      <Header />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="*" element={<Home />} /> 
        </Routes>
      </div>

      <Footer />
      <WhatsAppBtn /> {/* Tüm sayfalarda görünen buton */}
    </div>
  );
}

export default App;