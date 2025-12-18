import React, { useState, useEffect } from "react";
import style from "./Header.module.css";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Button from "../../Components/UI/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [showWelcome, setShowWelcome] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("user"));
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  useEffect(() => {
    const justLoggedIn = localStorage.getItem("justLoggedIn");

    if (justLoggedIn && isLoggedIn) {
      setShowWelcome(true);

      setTimeout(() => {
        setShowWelcome(false);
        localStorage.removeItem("justLoggedIn");
      }, 15000);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const interval = setInterval(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart((prev) => {
        if (JSON.stringify(prev) !== JSON.stringify(storedCart)) {
          return storedCart;
        }
        return prev;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const menuItems = ["Home", "About Us", "Contact Us", "My Orders"];
  const categories = [
    { id: 1, name: "Monitor" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "CPU" },
    { id: 4, name: "SSD" },
    { id: 5, name: "Keyboard" },
    { id: 6, name: "RAM" },
  ];

  const getPath = (item) => {
    if (item === "Home") return "/";
    if (item === "About Us") return "/about";
    if (item === "Contact Us") return "/contact";
    if (item === "My Orders") return "/orders";
    return "/";
  };

  return (
    <>
      <nav className="w-full z-10 fixed flex top-0 items-center justify-between px-3 lg:px-11 py-4 shadow-sm bg-white">
        {/* Logo */}
        <h1 className="lg:text-2xl text-xl md:text-md font-semibold">
          Computer Hubs
        </h1>

        {/* Mobile Hamburger */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isLoggedIn && (
          <p className="hidden md:flex w-5 h-5 absolute top-2 right-[120px] lg:right-[185px] bg-[#dc3545] text-white text-xs font-semibold rounded-full items-center justify-center">
            {cart.length}
          </p>
        )}

        {showWelcome && (
          <p className="absolute text-blue bg-blue-200 p-2 md:p-3 md:pl-5 transition md:w-[22%] rounded-md md:text-lg top-[120%] right-3">
            Welcome, {user.username}
          </p>
        )}

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center lg:gap-8 gap-4 lg:text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                to={
                  item === "Home"
                    ? "/"
                    : item === "About Us"
                    ? "/about"
                    : item === "Contact Us"
                    ? "/contact"
                    : "/orders"
                }
                className={
                  location.pathname === getPath(item) ? style.activeMenu : ""
                }
                onClick={() => setActive(item)}
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Category Dropdown */}
          <li className="relative" onMouseEnter={() => setOpen(true)}>
            <button>Category</button>

            {open && (
              <div
                onMouseLeave={() => setOpen(false)}
                className={style.dropdown}
              >
                {categories.map((cat) => (
                  <p
                    className={style.dropdownItem}
                    key={cat.id}
                    onClick={() => {
                      navigate(`${cat.name.toLowerCase()}?cat_id=${cat.id}`);
                      setOpen(false);
                    }}
                  >
                    {cat.name}
                  </p>
                ))}
              </div>
            )}
          </li>

          {/* Cart Icon */}
          <div
            onClick={() =>
              !isLoggedIn ? navigate("/login") : navigate("/cart")
            }
          >
            <FaShoppingCart className="text-3xl text-blue" />
          </div>

          {/* LOGIN → LOGOUT CHANGE */}
          {isLoggedIn ? (
            <div
              onClick={() => {
                handleLogout();
              }}
            >
              <Button text="Logout" />
            </div>
          ) : (
            <div onClick={() => navigate("login")}>
              <Button text="Login" />
            </div>
          )}
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-14 left-0 w-full bg-white shadow-md rounded-b-lg flex flex-col p-6 gap-4 text-lg font-medium md:hidden z-50">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : item === "About Us"
                      ? "/about"
                      : item === "Contact Us"
                      ? "/contact"
                      : "/orders"
                  }
                  className={`w-full text-left ${
                    location.pathname === getPath(item) ? style.activeMenu : ""
                  }`}
                  onClick={() => {
                    setActive(item);
                    setMenuOpen(false);
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}

            {/* Mobile Category */}
            <li>
              <button className="font-semibold">Category</button>
              <div className="mt-2 border rounded-lg p-2">
                {categories.map((item, index) => (
                  <p
                    key={index}
                    className="p-1 hover:bg-purple-100 rounded-lg cursor-pointer"
                    onClick={() => {
                      navigate(`${item.name.toLowerCase()}?cat_id=${item.id}`);
                      setMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </li>

            {/* Cart */}
            <li
              onClick={() => {
                if (!isLoggedIn) {
                  navigate("/login");
                  setMenuOpen(false);
                } else {
                  navigate("/cart");
                  setMenuOpen(false);
                }
              }}
              className="flex relative items-center gap-2"
            >
              {isLoggedIn && (
                <p className="flex md:hidden w-5 h-5 absolute bottom-4.5 left-3 bg-[#dc3545] text-white text-xs font-semibold rounded-full items-center justify-center">
                  {savedCart.length}
                </p>
              )}
              <FaShoppingCart className="text-2xl text-purple-600" /> Cart
            </li>

            {/* MOBILE LOGIN → LOGOUT */}
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="px-6 py-2 border-2 border-blue rounded-[15px] text-blue font-semibold hover:bg-blue hover:text-white focus:bg-blue focus:text-white"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("login");
                }}
                className="px-6 py-2 border-2 border-blue rounded-[15px] text-blue font-semibold hover:bg-blue hover:text-white focus:bg-blue focus:text-white"
              >
                Login
              </button>
            )}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Header;
