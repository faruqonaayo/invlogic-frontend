import { NavLink } from "react-router-dom";

export default function DesktopMenu() {
  return (
    <ul
      className={`text-sm hidden w-auto gap-4 bg-transparent text-center font-semibold text-white transition-all md:flex md:items-center`}
    >
      <li className="">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="">
        <NavLink to="/">Dashboard</NavLink>
      </li>
      <li className="">
        <NavLink to="/">About Developer</NavLink>
      </li>
      <li className="">
        <NavLink to="/auth/login">
          <button className="w-20 rounded-md border-2 border-[#FF6F3C] bg-white p-1 text-[#FF6F3C]">
            Login
          </button>
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/auth/signup">
          <button className="w-20 rounded-md bg-[#FF6F3C] p-1 text-white">
            Sign Up
          </button>
        </NavLink>
      </li>
    </ul>
  );
}
