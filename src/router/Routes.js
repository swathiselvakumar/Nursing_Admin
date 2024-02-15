import DashboardPage from "../Pages/Dashboard";
import { PATH } from "../constants/routeConstants";
import Report from "../Pages/Report";
export const routeConfig = [
 
  {
    key: "dashboard",
    title: "Dashboard",
    Component: DashboardPage,
    route: PATH.DASHBOARD,
    isPublic:false,
  },
  {
    key:"report",
    title:"report",
    Component:Report,
    route:PATH.REPORT
  }
];

