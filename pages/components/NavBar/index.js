import { Link } from "react-scroll";
import React, { useEffect, useState, useRef } from "react";
import MenuItems from "../../../assets/menuItems/MenuItems";
import LanguageDropDown from "./components/LanguageDropDown";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [inView, setInview] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const wrapperRef = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMenuClicked(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  const toggleMenu = () => {
    if (menuClicked) return;
    setMenuClicked(!menuClicked);
  };
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    if (offset > 253) {
      setInview(true);
    } else {
      setInview(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses =
    "z-20 w-full bg-gray-900 transition-all duration-1000 ease-in-out bg-opacity-50";
  let activeClass = "bg-gradient-to-r from-cyan-400 to-emerald-400";
  let defaultClass =
    "cursor-pointer hover:bg-brand hover:text-white px-3 py-2 rounded-md text-white text-sm font-bold";
  if (scrolled) {
    navbarClasses = navbarClasses + " opacity-0";
  }
  if (inView) {
    navbarClasses = navbarClasses + "opacity-100 fixed w-full z-40";
  }
  return (
    <div className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="w-full hidden md:block md:ml-6">
            <div className="flex justify-center space-x-4">
              {MenuItems.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.url}
                    className={
                      index === selectedIndex
                        ? defaultClass + " " + activeClass
                        : defaultClass
                    }
                    activeClass={activeClass}
                    spy={true}
                    smooth={true}
                    offset={0}
                    onSetActive={() => {
                      setSelectedIndex(index);
                    }}
                    isDynamic={true}
                    duration={500}
                  >
                    {t(item.title)}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            {menuClicked ? (
              <div className="inline-flex cursor-pointer items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            ) : (
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            )}
          </div>

          <LanguageDropDown></LanguageDropDown>
        </div>
      </div>

      {menuClicked && (
        <div ref={wrapperRef} className="p-2 md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {MenuItems.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.url}
                  className={
                    index === selectedIndex
                      ? defaultClass + " block " + activeClass
                      : defaultClass + " block"
                  }
                  activeClass={activeClass}
                  onSetActive={() => setSelectedIndex(index)}
                  onClick={() => setMenuClicked(false)}
                  spy={true}
                  smooth={true}
                  offset={0}
                  isDynamic={true}
                  duration={500}
                >
                  {t(item.title)}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
