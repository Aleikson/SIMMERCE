import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from './components/Cart/Cart';
import { Home } from './components/Home/Home';
import { Navbar } from './components/NavBar/NavBar';
import { ShopContextProvider } from "./components/ShopContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>            
      </ShopContextProvider>
    </div>
  );
}

export default App;
