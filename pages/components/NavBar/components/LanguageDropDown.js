import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

function LanguageDropDown(props) {
  const [selectedLang, setSelectedLang] = useState(0);
  const [menuClicked, setMenuClicked] = useState(false);
  const languages = [
    {
      code: "fr-FR",
      label: "Français",
      lang: "fr",
      icon: "assets/images/français.png",
    },
    {
      code: "en-EN",
      label: "English",
      lang: "en",
      icon: "assets/images/english.png",
    },
  ];
  const { t, i18n } = useTranslation();

  const wrapperRef = useRef(null);

  const setLang = (lang) => {
    setMenuClicked(!menuClicked);

    setSelectedLang(lang);
    i18n.changeLanguage(languages[lang].lang);
  };

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
  }, [menuClicked, wrapperRef]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (!menuClicked) return;

      if (event.key === "Escape") {
        setMenuClicked(false);
      }
    };

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [menuClicked]);

  const toggleMenu = () => {
    if (menuClicked) return;
    setMenuClicked(!menuClicked);
  };

  return (
    <div className="relative z-50  text-right">
      <div className="relative w-28 mx-auto inline-block text-left">
        <div>
          <button
            onClick={toggleMenu}
            className="inline-flex w-full space-x-2 rounded-md border border-gray-300 shadow-sm px-4 py-2 hover:bg-brand hover:text-white  text-white text-sm font-bold"
          >
            <img
              className="w-5 cursor-pointer"
              src={languages[selectedLang].icon}
            />
            <label className="cursor-pointer">
              {languages[selectedLang].label}
            </label>{" "}
          </button>
        </div>

        {menuClicked && (
          <div
            ref={wrapperRef}
            className="origin-top-left absolute left-0 mt-2 w-auto rounded-md shadow-lg bg-gray-900 bg-opacity-50"
          >
            <button
              onClick={() => setLang(0)}
              className="inline-flex w-full space-x-2 text-left px-4 py-2 hover:bg-brand hover:text-white  text-white text-sm font-bold"
            >
              <img className="w-5 cursor-pointer" src={languages[0].icon} />
              <label className="cursor-pointer">
                {languages[0].label}
              </label>{" "}
            </button>
            <button
              onClick={() => setLang(1)}
              className="inline-flex w-full space-x-2 text-left px-4 py-2 hover:bg-brand hover:text-white  text-white text-sm font-bold"
            >
              <img className="w-5 cursor-pointer" src={languages[1].icon} />
              <label className="cursor-pointer">{languages[1].label}</label>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LanguageDropDown;
