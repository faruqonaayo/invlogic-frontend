import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";
import DashboardMenuButton from "./DashboardMenuButton";

export default function Dashboard() {
  const [showDashboardMenu, setShowDashbordMenu] = useState(false);

  function handleToggleDashboardMenu() {
    setShowDashbordMenu(!showDashboardMenu);
  }

  return (
    <div>
      <DashboardMenu
        setShowDashbordMenu={setShowDashbordMenu}
        showDashboardMenu={showDashboardMenu}
      />

      <DashboardMenuButton onClickFunc={handleToggleDashboardMenu} />

      <Outlet />
    </div>
  );
}
