import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "../languageSelector";
import Sidebar from "../sidebar";
import { useTranslation } from "react-i18next";
import { navbarData } from "../../data";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openSidebar, setOpenSideBar] = useState(false);
  const url = useLocation();
  const pathname = "/" + url.pathname.split("/")[1];
  const { t } = useTranslation();
  const navbarItems = navbarData(t);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const getTextColor = (path) => {
    if (scrolled) {
      if (pathname === path) {
        return "text-[#F5F9FF]";
      } else if (openSidebar) {
        return "text-[#F5F9FF]";
      } else {
        return "text-[#7F8186]";
      }
    } else {
      if (pathname === path) {
        return "text-[#F5F9FF]";
      } else if (openSidebar) {
        return "text-[#F5F9FF]";
      } else {
        return "text-[#8FBBE9]";
      }
    }
  };
  const getSpanWidth = (path) => {
    if (pathname === path) {
      return "w-full";
    } else {
      return "w-0";
    }
  };
  return (
    <header
      id="header"
      className={`py-4 top-[30px] min-[600px]:top-9 z-100 px-5 overflow-hidden fixed w-full  ${
        scrolled ? "bg-[#090A0E]" : "bg-transparent"
      }`}
    >
      <div
        className={`relative max-w-[1400px] mx-auto flex justify-between items-center`}
      >
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="main-logo" />
          <p className="text-radial font-semibold text-[34px] leading-[100%] text-[#F5F9FF]">
            Vypex AI
          </p>
        </a>
        <ul className="hidden min-[1000px]:flex items-center gap-8">
          {navbarItems?.map((item) => (
            <li
              key={item.slug}
              className=" cursor-pointer relative  inline-block group"
            >
              <Link
                className={`font-medium translate-all duration-300  text-[18px] group-hover:text-[#F5F9FF] leading-[150%] ${getTextColor(
                  item.slug
                )}`}
                to={item.slug}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="min-[1000px]:flex items-center gap-2.5 hidden home-select">
          <LanguageSelector />
          <button className="px-4 rounded-2xl cursor-pointer user-button h-[46px]">
            <img src="/home/user.svg" alt="user" />
          </button>
          <button
            className={`bg-[#F5F9FF] px-4 h-[46px] cursor-pointer transition-all duration-200 rounded-2xl flex items-center`}
          >
            <span className=" btn-gradient font-bold text-[20px] leading-[100%]">
              Buy $VYPEX
            </span>
          </button>
        </div>
        <div
          onClick={() => setOpenSideBar(true)}
          className="w-[42px] h-[42px] min-[1000px]:hidden flex  rounded-xl bg-white/20 cursor-pointer items-center justify-center"
        >
          <img src="/menu-bar.svg" alt="menu-bar" />
        </div>
      </div>
      <Sidebar
        getSpanWidth={getSpanWidth}
        getTextColor={getTextColor}
        setOpenSideBar={setOpenSideBar}
        openSidebar={openSidebar}
      />
    </header>
  );
}

export default Header;
