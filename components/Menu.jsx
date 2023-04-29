import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Sobre", url: "/about" },
  { id: 3, name: "Categorias", subMenu: true },
  { id: 4, name: "Contato", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Star Wars", doc_count: 11 },
  { id: 2, name: "Star Trek", doc_count: 8 },
  { id: 3, name: "Marvel", doc_count: 64 },
  { id: 4, name: "DC", doc_count: 107 },
];

const Menu = ({ showCatMenu, setshowCatMenu }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-white">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setshowCatMenu(true)}
                onMouseLeve={() => setshowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && (
                  <ul className="bg-black absolute top-11 left min-w-[250px] px-1 py-1 text-white shadow-lg">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link key={submenu.id} href="/">
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-white/[0.06]">
                            {submenu.name}
                            <span className="opacity-50 text-sm">78</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
