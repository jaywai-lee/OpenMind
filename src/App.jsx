import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './components/MainLayout';
import MainList from './components/MainList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainList />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div></div>
    </>
  );
}

export default App;
