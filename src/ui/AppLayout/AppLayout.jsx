import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function AppLayout() {
  return (
    <div className="font-lato">
      <header>
        <Navigation />
      </header>
      <main className="mt-16">
        <Outlet />
      </main>
      <footer className="w-full bg-[#2C3E50] py-2 text-center text-sm">
        <span className="text-white">&copy; Copywrite Faruq Ayomide</span>
      </footer>
    </div>
  );
}
