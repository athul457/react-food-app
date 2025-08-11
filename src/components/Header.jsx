import { Link } from "react-router-dom";
import logo from "/images/foo-app-logo.jpg";
import SearchItems from "../pages/SearchItem";

export default function Header() {
  return (
    <div className="header ">
      <div className="w-[30px] h-[30px]">
        <img src={logo} alt="logo image" />
      </div>
      <SearchItems />
      <nav className="nav-items">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>

          <li>
            <Link to="/login">login</Link>
          </li>
          {/* 
          <li>
            <Link to="/register">register</Link>
          </li> */}

          <li>
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
