import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState("Login");

  return (
    <header className="bg-white shadow-md rounded-md px-3 md:px-6 py-3">
      {" "}
      {/* py-1 = low height */}
      <div className="flex items-center justify-between h-14">
        {" "}
        {/* fixed height */}
        <div className="w-[70px]">
          {" "}
          {/* smaller logo */}
          <img
            src={logo}
            alt="Company logo"
            className="w-full h-auto object-contain"
          />
        </div>
        <nav>
          <ul className="flex gap-3 md:gap-5 text-sm md:text-base font-medium items-center">
            <li className="cursor-pointer hover:text-orange-500 transition duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition duration-200">
              <Link to="/about">About</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition duration-200">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition duration-200 flex items-center gap-1">
              <Link to="cart"><span>Cart</span></Link>
              {/* <ShoppingCart className="w-4 h-4" /> */}
            </li>
            <button
              onClick={() => {
                isLogin === "Login" ? setIsLogin("Logout") : setIsLogin("Login")
              }}
              className="cursor-pointer hover:text-orange-500 transition duration-200 flex items-center gap-1"
            >
              {isLogin}
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
