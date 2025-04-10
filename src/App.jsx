import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login"
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ProtectedRoute from "./Components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import Bill from "./pages/Bill";
import Footer from "./Components/Footer";
import Latest from "./Components/Latest";

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
          />
          <Route path="/bill" element={<Bill />} />
        </Routes>
      </Router>
      <Latest />
      <Footer />
    </>
  )
}

export default App
