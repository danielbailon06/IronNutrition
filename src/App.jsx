import './App.css'
import Sidebar from "./Components/Sidebar.jsx";
import "./Components/Sidebar.css";
import Navbar from './Components/Navbar.jsx';
import "./Components/Navbar.css";
import Footer from './Components/Footer.jsx';
import "./Components/Footer.css";
import "./Components/SupplementsList.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import supplements from "./data/supplements.json";

import DashboardPage from "./Routes/DashboardPage.jsx";
import ItemDetailsPage from "./Routes/ItemDetailsPage.jsx";
import AboutPage from "./Routes/AboutPage.jsx";
import NotFoundPage from "./Routes/NotFoundPage.jsx";
import AddProductPage from './Components/AddProductPage.jsx';

function App() {
  const [supplementsList, setSupplementsList] = useState(supplements);

  const addItem = (newItem) => {
    setSupplementsList([newItem, ...supplementsList]);
  };

  const deleteItem = (id) => {
    const newItemList = supplementsList.filter((item) => item.id !== id);
    setSupplementsList(newItemList);
  };

  return (
    <div>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route
          path="/"
          element={
            <DashboardPage
              supplementsList={supplementsList}
              onDelete={deleteItem}
            />
          }
        />
        <Route
          path="/new-product"
          element={<AddProductPage onAddItem={addItem} />}
        />
        <Route path="/items/:itemId" element={<ItemDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;