"use client";
import {  useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const Header = () => {
  const [dark, setDark] = useState("dark");
  // useEffect(() => {
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //     setDark("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     setDark("light");
  //   }
  // }, []);
  // const theme = localStorage.theme;
  const darkModeHandler = () => {
    if (localStorage.theme === "dark") {
      setDark("light");
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      setDark("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Whenever the user explicitly chooses light mode
  // localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  // localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem("theme");

  return (
    <header className="dark:text-red-700   text-blue-600 p-6 border-b border-b-zinc-500  ">
      <div className="container flex justify-between items-center text-xl child:font-bold">
        <div
          className="flex space-x-8 justify-center items-center text-2xl"
          onClick={() => darkModeHandler()}
        >
          <span> Hossein </span>
          <span className="text-zinc-700">|</span>
          <span className=" cursor-pointer">
            {dark === "dark" && <IoSunnyOutline size={30} />}
            {dark === "light" && <IoMoonOutline size={30} />}
          </span>
        </div>
        <nav className=" xl:block hidden">
          <ul className=" flex justify-between  space-x-4  ">
            <li>
              <a href="#Skills">مهارت ها </a>
            </li>
            <li>
              <a href="#About-me" className="transition-all">
                درباه من
              </a>
            </li>

            <li>
              <a href="#Home"> خانه</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
