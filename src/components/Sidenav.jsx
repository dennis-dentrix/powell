import { Link } from "react-router-dom";
import { FaChartBar, FaCheck, FaFile, FaHome, FaUser } from "react-icons/fa";
import { GrTemplate } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SiBaremetrics } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";

import logo from "../assets/logo.png";

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { CiMenuBurger } from "react-icons/ci";
import { Box } from "@mui/material";

export default function SideNav() {
  return (
    <aside className="bg-white p-4 rounded-md shadow space-y-4 flex flex-col justify-between">
      <ul className="space-y-2">
        <div className="flex items-center ">
          <img alt="logo" className="h-14 w-16" src={logo} />
        </div>
        <Link to="/home" className="flex items-center space-x-2">
          <FaHome className="h-4 w-6 text-gray-600" />
          <span>Home</span>
        </Link>
        <Link className="flex items-center space-x-2">
          <FaFile className="h-4 w-6 text-gray-600" />
          <span>New Inspection</span>
        </Link>
        <Link className="flex items-center space-x-2">
          <FaCheck className="h-4 w-6 text-gray-600" />
          <span>Inspected</span>
        </Link>
        <Link to="/reports" className="flex items-center space-x-2">
          <FaChartBar className="h-4 w-6 text-gray-600" />
          <span>Reports</span>
        </Link>
        <Link className="flex items-center space-x-2">
          <GrTemplate className="h-4 w-6 text-gray-600" />
          <span>Templates</span>
        </Link>
        <Link className="flex items-center space-x-2">
          <FaUser className="h-4 w-6 text-gray-600" />
          <span>Clients</span>
        </Link>
        <Link className="flex items-center space-x-2">
          <SiBaremetrics className="h-4 w-6 text-gray-600" />
          <span>Metrics</span>
        </Link>
        <Link className="flex items-center space-x-2">
          <MdOutlineSupportAgent className="h-4 w-6 text-gray-600" />
          <span>Training/Support</span>
        </Link>
      </ul>
      <ul className="space-y-2">
        <Link className="flex items-center space-x-2">
          <CiSettings className="h-4 w-6 text-gray-600" />
          <span>Email setting</span>
        </Link>
        <Link className="flex items-center space-x-2">
          <CiSettings className="h-4 w-6 text-gray-600" />
          <span>General setting</span>
        </Link>
        <Link className="flex items-center space-x-2">
          <IoMdLogOut className="h-4 w-6 text-gray-600" />
          <span>Log Out</span>
        </Link>
      </ul>
    </aside>
  );
}

export function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <SideNav />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <CiMenuBurger />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
