import { Link } from "react-router-dom";
import logo from "/images/logo2.png";
import SearchItems from "../pages/SearchItem";
import { UseCart } from "../context/CartContext";

export default function Header() {
  const { cart } = UseCart();
  return (
    <div className="header bg-gray-100 p-5 shadow-md shadow-gray-600">
      <div className="w-[50px] h-[50px]">
        <img src={logo} alt="logo image" className="rounded-4xl" />
      </div>
      <SearchItems />
      <nav className="nav-items ">
        <ul className="">
          <li className="">
            <Link to="/">
              <span className="text-lg ">home</span>
            </Link>
          </li>

          <li>
            <Link to="/login">
              <span className="text-lg hover:text-white">login</span>
            </Link>
          </li>
          {/* 
          <li>
            <Link to="/register">register</Link>
          </li> */}

          <li className="relative  ">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping text-2xl">
                <span className="absolute bottom-6 right-4 text-[10px] text-red-600  rounded-4xl w-[20px] h-[20px] bg-white flex items-center justify-center">
                  {cart.length}
                </span>
              </i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
