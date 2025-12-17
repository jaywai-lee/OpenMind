import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import ComponentPage from './components/common/componentsPage';

function App() {
  const isDevelopment = import.meta.env.MODE === 'development';
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />

          {/* component test */}
          {isDevelopment && (
            <Route path="component" element={<ComponentPage />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
