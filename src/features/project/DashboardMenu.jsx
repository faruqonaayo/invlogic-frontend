import { useNavigate } from "react-router-dom";

export default function DashboardMenu({
  setShowDashbordMenu,
  showDashboardMenu,
}) {
  const navigate = useNavigate();

  return (
    <div
      className={`z-0 absolute ${showDashboardMenu ? "left-0 top-[64px]" : "left-[-100%] top-[500px]"} h-[100dvh] w-full bg-black/60 py-4 backdrop-blur-sm transition-all`}
    >
      <ul className="flex h-full w-full flex-col items-center justify-center gap-4 text-[#00B8D9]">
        <li>
          <button
            className="w-48 cursor-pointer rounded-full border-2 border-[#00B8D9] bg-[#00B8D9] p-2 text-center text-sm font-semibold tracking-wide text-white"
            onClick={() => {
              setShowDashbordMenu(false);
              navigate("/dashboard/project/new");
            }}
          >
            Create New Project
          </button>
        </li>
        <li>
          <button
            className="w-48 cursor-pointer rounded-full border-2 border-[#00B8D9] bg-white p-2 text-center text-sm font-semibold tracking-wide text-[#00B8D9]"
            onClick={() => {
              setShowDashbordMenu(false);
              navigate("/dashboard/myprojects");
            }}
          >
            My Projects
          </button>
        </li>
        <li>
          <button
            className="w-48 cursor-pointer rounded-full border-2 border-[#00B8D9] bg-white p-2 text-center text-sm font-semibold tracking-wide text-[#00B8D9]"
            onClick={() => {
              setShowDashbordMenu(false);
              navigate("/dashboard/myprojects/favorites");
            }}
          >
            Favorite Projects
          </button>
        </li>
        <li>
          <button
            className="w-48 cursor-pointer rounded-full border-2 border-[#00B8D9] bg-white p-2 text-center text-sm font-semibold tracking-wide text-[#00B8D9]"
            onClick={() => {
              setShowDashbordMenu(false);
              navigate("/dashboard/profile");
            }}
          >
            My Profile
          </button>
        </li>
      </ul>
    </div>
  );
}
