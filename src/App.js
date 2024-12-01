import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from './nav.js';
import Home from './home.js';
import Newlyadded from './newlyadded.js';
import Popular from './popular.js';
import Classics from './classics.js';
import Product from './product.js';

function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/newlyadded" element={<Newlyadded />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/classics" element={<Classics />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
