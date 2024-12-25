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
      <footer className="h-[500px] w-full bg-[#2C3E50]"></footer>
    </div>
  );
}
