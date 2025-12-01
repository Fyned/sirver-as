import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home'; // YENİ IMPORT

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Artık gerçek Home componenti */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;