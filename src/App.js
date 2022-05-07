import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";
import Files from "./pages/Files/Files";


function App() {
  return (
<BrowserRouter>
    
    < Topbar/>
    
    <div className="container">
<Sidebar/>
    <Routes>


      <Route exact path="/" element={<Home/>} />
      <Route path="/users" element={<UserList />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/newUser" element={<NewUser />} />
      <Route path="/product" element={<ProductList />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/newproduct" element={<NewProduct />} />
      <Route path="/files" element={<Files />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
    </div>
  
  </BrowserRouter>
  );
}

export default App;
