import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import HomePage from './pages/HomePage';
import DemoPage from './pages/DemoPage';
import ContactPage from './pages/ContactPage';
import CreateWeb from './pages/CreateWeb'; // 👈 Aquí importas tu formulario real
import WebBuilderPage from './pages/WebBuilderPage';
import VideoTutorialsPage from './pages/VideoTutorialsPage';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/demo/:category" element={<DemoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/create-web" element={<CreateWeb />} /> {/* 👈 Cambiado */}
            <Route path="/builder" element={<WebBuilderPage />} /> {/* Si quieres dejar ambos */}
            <Route path="/tutorials" element={<VideoTutorialsPage />} />
          </Routes>
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
