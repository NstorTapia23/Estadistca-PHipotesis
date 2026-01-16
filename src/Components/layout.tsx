import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/sideBar";

export default function Layout() {
  return (
    <div className="flex">
      <SideBar />

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
