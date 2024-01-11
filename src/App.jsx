import './App.css';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
