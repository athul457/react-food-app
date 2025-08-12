import { Link } from "react-router-dom";
import logo from "/images/foo-app-logo.jpg";
import SearchItems from "../pages/SearchItem";
import { UseCart } from "../context/CartContext";

export default function Header() {
  const { cart } = UseCart();
  return (
    <div className="header bg-white p-5 shadow-md shadow-gray-600">
      <div className="w-[30px] h-[30px]">
        <img src={logo} alt="logo image" />
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

          <li className="relative text-2xl ">
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping">
                <span className="absolute bottom-6 right-4 text-red-600 text-lg  rounded-4xl w-[20px] h-[20px] bg-white flex items-center justify-center">
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
