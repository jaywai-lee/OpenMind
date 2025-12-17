import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import _ComponentPage from './components/common/_ComponentsPage';

function App() {
  const isDevelopment = import.meta.env.MODE === 'development';
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />

          {/* component test */}
          {isDevelopment && (
            <Route path="component" element={<_ComponentPage />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
