import { HomeIcon, ClockIcon } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "หน้าหลัก",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "เวลาที่เกิด",
    to: "/birth-time",
    icon: <ClockIcon className="h-4 w-4" />,
    page: <Index />,
  },
];
