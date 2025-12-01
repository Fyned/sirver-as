import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Şimdilik Home sayfasını burada basitçe tanımlayalım, sonra dosyasına taşıyacağız
function Home() {
  return (
    <main className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto p-10 text-center">
        <h1 className="text-4xl font-heading font-bold text-sirver-secondary mb-4">
          FAZ 1 TAMAMLANDI: Layout ve Navigasyon
        </h1>
        <p className="text-gray-600">Header ve Footer yerleşti. Artık içerik girmeye hazırız.</p>
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Diğer sayfalar buraya eklenecek */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;