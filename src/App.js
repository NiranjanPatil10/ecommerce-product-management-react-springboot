import logo from './logo.svg';
import './App.css';
import Home from './componets/Home';
import About from './componets/About';
import Contact from './componets/Contact';
import ProductList from './componets/ProductList';
import Login from './componets/Login';
import { BrowserRouter , Route, Switch, Routes } from 'react-router-dom';
import AdminDashBoard from './componets/AdminDashBoard';
import AddProduct from './componets/AddProduct';
import EditProduct from './componets/EditProduct';


function App() {
  return (
    <>
    <BrowserRouter>
       
      <div className="container-fluid1">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product"  element={<ProductList />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashBoard/>} />
          <Route path="/addproduct" element={<AddProduct />} />

          <Route path="/edit/:id" element={<EditProduct />} />        
        </Routes>
      </div>
    
    </BrowserRouter>

    
</>
  );
}

export default App;
