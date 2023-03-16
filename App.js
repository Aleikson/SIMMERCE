import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import { Cart } from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import { ShopContextProvider } from "./components/ShopContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <div className="mainContainer">
            <Routes>
              <Route path="/" element={<Home />} />
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
