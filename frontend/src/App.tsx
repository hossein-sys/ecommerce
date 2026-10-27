import './App.css';
import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-['Vazirmatn',sans-serif]">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
