import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./components/layouts/MainLayout";
import ProductList from "./pages/ProductList";
import AddItem from "./pages/AddItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<ProductList />} />
            <Route path="/additem" element={<AddItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div></div>
    </>
  );
}

export default App;
