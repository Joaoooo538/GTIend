import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>np
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/produtos" element={<iframe src="products.html" title="Produtos" />} />
          <Route path="/" element={<iframe src="index.html" title="Início" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

