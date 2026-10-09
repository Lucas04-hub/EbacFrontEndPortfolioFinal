import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SobreMim from './components/SobreMim/SobreMim';
import Contato from './components/Contato/Contato';
import Habilidades from './components/Habilidades/Habilidades';
import Projetos from './components/Projetos/Projetos';
import './App.css';

function App() {
  return (
    <div className="site-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SobreMim />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
