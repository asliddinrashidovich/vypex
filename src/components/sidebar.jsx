import { X } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSelector from "./languageSelector";
import { useTranslation } from "react-i18next";
import { navbarData } from "../data";
function Sidebar({ setOpenSideBar, openSidebar, getTextColor, getSpanWidth }) {
  const { t } = useTranslation();
  const navbarItems = navbarData(t);

  return (
    <div className="min-[1250px]:hidden flex ">
      <div
        className={`fixed top-0 right-0 bottom-0
            ${openSidebar ? "translate-x-0" : "translate-x-full"}
            transition-all duration-200 bg-white w-full md:w-[40%]
            z-9999 p-[37px]`}
      >
        <div className="flex items-center justify-between">
          <LanguageSelector />
          <button onClick={() => setOpenSideBar(false)}>
            <X className="cursor-pointer" />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-6 mt-7">
          {navbarItems?.map((item) => (
            <li
              key={item.slug}
              className="cursor-pointer relative inline-block group"
            >
              <Link
                className={`p-1 font-normal text-[#090A0E] text-[16px] duration-300 group-hover:text-[#090A0E] `}
                to={item.slug}
              >
                {item.title}
              </Link>
              <span
                className={`absolute left-0 -bottom-2 h-0.5 w-0 bg-[#090A0E] duration-300 group-hover:w-full ${getSpanWidth(
                  item.slug
                )}`}
              ></span>
            </li>
          ))}
        </ul>
      </div>

      {openSidebar && (
        <div
          onClick={() => setOpenSideBar(false)}
          className="fixed top-0 left-0 bottom-0 w-full bg-black/50 z-9998"
        ></div>
      )}
    </div>
  );
}

export default Sidebar;
