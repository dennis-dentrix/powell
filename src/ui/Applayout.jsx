import { Outlet } from "react-router-dom";
import HeaderNav from "../components/Headernav";
import SideNav, { TemporaryDrawer } from "../components/Sidenav";

export default function Applayout() {
  return (
    <div className="min-h-screen bg-gray-100 py-4 md:p-4 flex md:flex-row md:gap-4">
      <div className="hidden md:block">
        <SideNav />
      </div>

      <div className="md:hidden w-max">
        <TemporaryDrawer />
      </div>
      <div className="grid grid-cols-1 md:flex md:flex-col gap-4 md:w-full">
        <HeaderNav />
        <Outlet />
      </div>
    </div>
  );
}
