import DashboardPage from "../Pages/Dashboard";
import { PATH } from "../constants/routeConstants";
import Report from "../Pages/Report";
import YearMCQ from "../Pages/YearMCQ";
import SubjectMCQ from "../Pages/SubjectMcq";
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
  },
  {
    key:"yearmcq",
    title:"yearmcq",
    Component:YearMCQ,
    route:PATH.YEARMCQ
  },
  {
    key:"subjectmcq",
    title:"subjectmcq",
    Component:SubjectMCQ,
    route:PATH.SUBJECTMCQ
  }

];

