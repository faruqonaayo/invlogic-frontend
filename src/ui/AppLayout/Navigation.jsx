import { useState } from "react";
import { NavLink } from "react-router-dom";
import DesktopMenu from "./DesktopMenu";

export default function Navigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="fixed left-0 top-0 flex h-16 w-full items-center justify-between bg-[#2C3E50] px-6">
      <div>
        <label className="mb-1 font-montserrat text-3xl font-bold text-white">
          INVLOGIC
        </label>
      </div>

      <ul
        className={`absolute text-sm backdrop-blur-md ${showMobileMenu ? "left-0 top-[64px]" : "left-[-100%] top-0"} flex w-full flex-col gap-4 bg-black/30 py-4 text-center font-semibold text-white transition-all md:hidden`}
      >
        <li className="">
          <NavLink to="/" onClick={() => setShowMobileMenu(false)}>
            Home
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/dashboard" onClick={() => setShowMobileMenu(false)}>
            Dashboard
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/" onClick={() => setShowMobileMenu(false)}>
            About Developer
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/auth/login" onClick={() => setShowMobileMenu(false)}>
            <button className="w-20 rounded-md border-2 border-[#00B8D9] bg-white p-1 text-[#00B8D9]">
              Login
            </button>
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/auth/signup" onClick={() => setShowMobileMenu(false)}>
            <button className="w-20 rounded-md bg-[#00B8D9] p-1 text-white">
              Sign Up
            </button>
          </NavLink>
        </li>
      </ul>

      <DesktopMenu />

      <div
        className="cursor-pointer md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {!showMobileMenu ? (
          <img src="/menu.svg" alt="Menu Icon" className="w-8" />
        ) : (
          <img src="/close.svg" alt="Close Icon" className="w-8" />
        )}
      </div>
    </nav>
  );
}
