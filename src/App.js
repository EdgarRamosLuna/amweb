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
import Albums from './components/Albums';
import Services from './components/admin/Services';
import AddService from './components/admin/AddService';

function App() {
  return (
   <>

   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="servicio/:name" element={<Comercial />} />
      <Route path="servicio/:service/:name" element={<Category />} />
      <Route path="servicio/:service/:name/:name" element={<Albums />} />
      
      <Route exact path="dashboard/" element={<Menu />}>
        <Route exact path="main" element={<Dashboard />} />
        <Route exact path="categorias" element={<Categories />} />
        <Route exact path="categorias/add" element={<AddCategory />} />
        <Route exact path="albums" element={<Content />} />
        <Route exact path="albums/add" element={<AddContent />} />
        <Route exact path="/dashboard/servicios" element={<Services />} />
        <Route exact path="/dashboard/servicios/add" element={<AddService />} />
      </Route>
  </Routes>
   </>
  );
}

export default App;
