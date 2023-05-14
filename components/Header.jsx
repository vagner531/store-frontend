import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { BsCart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavBar = () => {
    if(window.scrolly > 200) {
      if(window.scrolly > lastScrollY && !mobileMenu) {
        setShow("translate-y-[80px]")
      }else {
        setShow("shadow-sm")
      }
    }else {
      setShow("translate-y-0")
    }
    setLastScrollY(window.scrolly)
  }

  useEffect(()=> {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar)
    }
  }, [lastScrollY])

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-black flex items-center 
    justify-between text-white z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <img src="./logo-nerd.svg" className="w-[100px]" />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className="flex items-center gap-2 text-white">
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center
          items-center hover:bg-black/[0.05] cursor-pointer relative"
          >
            <IoIosHeartEmpty className="text-[15px] md:text-[24px]" />
            <div
              className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px]
            rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white
            text-[10px] md:text-[12px] flex justify-center items-center px-[2px]
            md:px-[5px]"
            >
              51
            </div>
          </div>
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center
          items-center hover:bg-black/[0.05] cursor-pointer relative"
          >
            <BsCart className="text-[15px] md:text-[20px]" />
            <div
              className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px]
            rounded-full bg-yellow-600 absolute top-1 left-5 md:left-7 text-white
            text-[10px] md:text-[12px] flex justify-center items-center px-[2px]
            md:px-[5px]"
            >
              5
            </div>
          </div>
        </div>

        {/* Mobile icon start */}
        <div
          className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center
          items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2"
        >
          {mobileMenu ? (
            <VscChromeClose
              className="text-[16px]"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <BiMenuAltRight
              className="text-[20px]"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
