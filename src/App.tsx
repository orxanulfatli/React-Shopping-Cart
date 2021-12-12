import "./App.css";

import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

import Category from "./Pages/Category";
import ProductDetails from "./Pages/ProductDetails";
import Card from "./Pages/Card";
import Header from "./Components/Header/Header";
import Search from "./Pages/Search";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />}>
        </Route>
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="card" element={<Card />} />
        <Route path="search/:searchTemp" element={<Search />}>
          
        </Route>
      </Routes>
    </div>
  );
};

export default App;
