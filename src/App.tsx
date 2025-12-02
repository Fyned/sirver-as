import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppBtn from './components/ui/WhatsAppBtn';
import ScrollToTop from './components/utils/ScrollToTop';

// Lazy Loading
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail')); // 1. YENİ IMPORT (ReferencesPage yerine)

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#ECEFF1]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sirver-primary"></div>
  </div>
);

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#ECEFF1]">
      <ScrollToTop />
      <Header />
      
      <div className="flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kurumsal" element={<About />} />
            <Route path="/hizmetler" element={<ServicesPage />} />   {/* 2. YENİ ROTA */}
            <Route path="/hizmetler/:slug" element={<ServiceDetail />} /> {/* YENİ DİNAMİK ROTA */}
            <Route path="/urunler" element={<Products />} />
            <Route path="/surdurulebilirlik" element={<Sustainability />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="*" element={<Home />} /> 
          </Routes>
        </Suspense>
      </div>

      <Footer />
      <WhatsAppBtn />
    </div>
  );
}

export default App;