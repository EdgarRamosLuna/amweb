import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Comercial from './components/Comercial';
import Category from './components/Category';
import Menu from './components/admin/Menu';
import Categories from './components/admin/Categories';
import AddCategory from './components/admin/AddCategory';
import Dashboard from './components/admin/Dashboard';
import Content from './components/admin/Content';
import AddContent from './components/admin/AddContent';

function App() {
  return (
   <>

   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="comercial" element={<Comercial />} />
      <Route path="comercial/:name" element={<Category />} />
      <Route path="dashboard/" element={<Menu />}>
        <Route path="main" element={<Dashboard />} />
        <Route path="categorias" element={<Categories />} />
        <Route path="categorias/add" element={<AddCategory />} />
        <Route path="albums" element={<Content />} />
        <Route path="albums/add" element={<AddContent />} />
      </Route>
  </Routes>
   </>
  );
}

export default App;
