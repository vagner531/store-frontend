import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setshowCatMenu] = useState(false);
  const [show, setShow] = useState("tranlate-y-0");
  const [lastScrollY, setlastScrollY] = useState(0);

  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-black flex items-center 
    justify-between text-white z-20 sticky top-0 transition-transform duration-300 tranlate-y-0 ${show}`}>
      <Wrapper>
        <Link href="/">
          <img src="./logo-nerd.svg" className="w-[100px]" />
        </Link>
      </Wrapper>
    </header>
  );
};

export default Header;
