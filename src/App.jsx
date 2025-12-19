import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import AnswerPage from './pages/AnswerPage';
import _ComponentPage from './components/common/_ComponentsPage';
import SubjectsFeedPage from './pages/SubjectsFeedPage';
import { DeviceProvider } from './contexts/DeviceContext';

function App() {
  const isDevelopment = import.meta.env.MODE === 'development';
  return (
    <DeviceProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post/:id" element={<SubjectsFeedPage />} />
          <Route path="/answer" element={<AnswerPage />} />
          <Route path="/list" element={<ListPage />} />

          {/* component test */}
          {isDevelopment && (
            <Route path="component" element={<_ComponentPage />} />
          )}
        </Routes>
      </BrowserRouter>
    </DeviceProvider>
  );
}

export default App;
