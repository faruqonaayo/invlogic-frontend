import { NavLink } from "react-router-dom";

export default function DesktopMenu() {
  return (
    <ul
      className={`hidden w-auto gap-4 bg-transparent text-center text-sm font-semibold text-white transition-all md:flex md:items-center`}
    >
      <li className="hover:text-[#00B8D9]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text-[#00B8D9]">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li className="hover:text-[#00B8D9]">
        <NavLink to="/">About Developer</NavLink>
      </li>
      <li className="">
        <NavLink to="/auth/login">
          <button className="w-20 rounded-md border-2 border-[#00B8D9] bg-white p-1 text-[#00B8D9]">
            Login
          </button>
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/auth/signup">
          <button className="w-20 rounded-md bg-[#00B8D9] p-1 text-white">
            Sign Up
          </button>
        </NavLink>
      </li>
    </ul>
  );
}
