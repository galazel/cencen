import React, { useEffect, useState, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Notification from "../common/Notification";
import { Input } from "@/components/ui/input";
import { categories, headerIcons } from "../../../constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [removeNotification, setRemoveNotification] = useState(false);
  const [hoverMenu, setHoverMenu] = useState({});
  const [hoverSearch, setHoverSearch] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        setRemoveNotification(true);
      } else {
        setScrolled(false);
        setRemoveNotification(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`grid grid-rows-2 fixed top-0 right-0 left-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        scrolled
          ? "bg-white/90 shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      {!removeNotification && <Notification />}
      <div
        className={`border-b grid grid-cols-3  px-5 items-center ${
          hoverMenu.isHover ? "bg-white text-black" : ""
        }`}
      >
        <div onMouseEnter={() => {}}>
          <Input
            className={`w-full !border-none shadow-none bg-transparent ${
              scrolled || hoverMenu.isHover
                ? "text-black placeholder-black"
                : "text-white placeholder-white"
            }`}
            placeholder="Search"
          />
        </div>

        <h1
          className={`text-center font-bold transition-colors ${
            scrolled || hoverMenu.isHover ? "text-black" : "text-white"
          }`}
        >
          CANCAN
        </h1>
        <div className="flex justify-end gap-2 ">
          {headerIcons.map((item, index) => {
            return (
              <FontAwesomeIcon

                key={index}
                icon={item}
                className={`cursor-pointer ${scrolled || hoverMenu.isHover ? 'text-black' : 'text-white'}`}
              />
            );
          })}
        </div>
      </div>
      <div
        className={`flex justify-center items-center h-16 ${
          hoverMenu.isHover ? "bg-white text-black" : ""
        }`}
      >
        <ul className="flex gap-10 items-center justify-center">
          {categories.map((item, index) => (
            <li
              key={index}
              className={`font-bold cursor-pointer transition-colors${
                scrolled
                  ? "text-black hoverMenu:text-gray-600"
                  : "text-white hoverMenu:text-gray-300"
              }`}
              onMouseEnter={() => {
                setHoverMenu({
                  isHover: true,
                  submenues: item.submenu,
                  name: item.menu,
                });
              }}
              onClick={() => {
                if (hoverMenu.submenues == undefined) console.log("hello");
              }}
            >
              {item.menu}
            </li>
          ))}
        </ul>
      </div>
      {hoverMenu.isHover && hoverMenu.submenues != undefined && (
        <div
          className="bg-white p-1 text-black border-b-2 border-gray-500"
          onMouseLeave={() => setHoverMenu({ isHover: false })}
        >
          <ul className="flex flex-col gap-3">
            {hoverMenu.submenues.map((item, index) => {
              return (
                <li className="list-none cursor-pointer hover:underline" key={index}>
                  {item.menu}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {hoverMenu.isHover &&
        hoverMenu.submenues == undefined &&
        setHoverMenu({ isHover: false })}
    </header>
  );
}
