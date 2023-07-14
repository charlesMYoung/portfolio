"use client";
import { singleCls } from "@/utils/tailcls";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface NavLink {
  name: string;
  path: string;
  type?: string;
}
const defaultNavList = [
  {
    name: "GH",
    path: "https://github.com",
  },
  {
    name: "BG",
    path: "https://blog.cyatime.com/",
  },
];

function NavBar() {
  const pathname = usePathname();
  const [navList, setNavList] = useState<NavLink[]>(defaultNavList);
  useEffect(() => {
    const [, pathnameNotSlut] = pathname.split("/");
    if (["about", "contact"].includes(pathnameNotSlut)) {
      setNavList([
        {
          name: "HOME",
          path: "/",
        },
      ]);
    } else {
      setNavList(defaultNavList);
    }
  }, [pathname]);
  return (
    <nav
      className={singleCls(
        "flex fixed text-on-surface w-full z-50 font-SmileySans",
        "items-center pt-6 px-6 space-x-5",
        "md:flex-col md:w-24 md:px-0 md:space-x-0 md:space-y-5 md:h-screen",
        "md:space-x-0 md:space-y-6 md:py-7 md:items-center"
      )}
    >
      {navList.map((item) => {
        return (
          <div key={item.name} className="px-6 md:-rotate-90">
            <a href={item.path} className="uppercase letter-spacing-[0.2em]">
              {item.name}
            </a>
          </div>
        );
      })}
      <div className="w-24 bg-on-surface !ml-0 h-1 md:h-24 md:w-1"></div>
      <div className="text-right flex-1 md:flex-none md:-rotate-90 md:absolute md:bottom-10">
        ©/{new Date().getFullYear()}
      </div>
    </nav>
  );
}

export default NavBar;
