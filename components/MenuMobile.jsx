import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "HOME", url: "/" },
  { id: 2, name: "SOBRE", url: "/about" },
  { id: 3, name: "CATEGORIAS", subMenu: true },
  { id: 4, name: "CONTATO", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Star Wars", doc_count: 11 },
  { id: 2, name: "Star Trek", doc_count: 8 },
  { id: 3, name: "Marvel", doc_count: 64 },
  { id: 4, name: "DC", doc_count: 107 },
];

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0
    w-full h-[calc(100vh-50px)] bg-black border-t text-white">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col
                relative "
                onClick={()=> setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          key={submenu.id}
                          href="/"
                          onClick={() => {
                            setShowCatMenu(false); 
                            setShowCatMenu(false);
                          }}
                        >
                          <li className="py-4 px-8 border-t flex
                          justify-between">
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
              <li className="py-4 px-5 border-b">
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
