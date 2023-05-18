import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import { Shopping } from './components/Shopping/Shopping';
import { Cart } from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import { ShopContextProvider } from "./components/ShopContext";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <ScrollToTop />
          <h1>teste</h1>
          <Navbar />
          <div className="mainContainer">
            <Routes>
              <Route path="/" element={<div> <Home /> <Shopping /> </div>} />
              <Route path='/shopping' element={<Shopping />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </Router>
      </ShopContextProvider>
      <Footer />
    </div>
  );
}

export default App;
