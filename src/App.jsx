import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {
  const [hideFooter, setHideFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const hidePaths = ["/login", "/register", "/cart"];
    setHideFooter(!hidePaths.includes(location.pathname));
  }, [location]);
  return (
    <div className="w-full m-0 p-0 bg-orange-50 overflow-hidden box-border">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </main>
      {hideFooter && <Footer />}
    </div>
  );
}

export default App;
