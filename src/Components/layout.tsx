import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/sideBar";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <SideBar />

      <main className="p-6 md:ml-64">
        <Outlet />
      </main>
    </div>
  );
}
