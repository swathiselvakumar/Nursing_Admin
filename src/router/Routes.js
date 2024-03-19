import DashboardPage from "../Pages/Dashboard";
import { PATH } from "../constants/routeConstants";
import Report from "../Pages/Report";
import YearMCQ from "../Pages/YearMCQ";
import SubjectMCQ from "../Pages/SubjectMcq";
import NonNursingMCQ from "../Pages/Non_Nursing";
import ModelMock from "../Pages/Modelmock";
import Hybrid from "../Pages/Hybrid";
import PremiumPlans from "../Pages/Student/PremiumPlans";
import PlanDetails from "../Pages/Student/PremiumPlans/PlanDetails";
import Standard from "../Pages/Student/Standard";
import Premium from "../Pages/Student/Premium";
import TestPage from "../Pages/Report/TestPage";
import PreAdd from "../Pages/AddMembers/PreAdd";
import Discuss from "../Pages/DiscussForm/Discuss";
import Settings from "../Pages/settings/Settings";
import StdTb from "../Pages/StudentTable/StdTb";
import PremiumTb from "../Pages/Student/Premium/premiumTable";
import AddMCQ from "../Pages/YearMCQ/AddMCQ";
import UnBlockTable from "../Pages/Student/BlockTable";
import StAdd from "../Pages/AddMembers/StAdd";
import RecentStudentTable from "../Pages/Dashboard/RecentStudents";
import YearInstitution from "../Pages/YearMCQ/Institution";
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
  },
  {
    key:"nonnursing",
    title:"nonnursing",
    Component:NonNursingMCQ,
    route:PATH.NONNURSING
  },
  {
    key:"modelmock",
    title:"modelmock",
    Component:ModelMock,
    route:PATH.MODELMOCK
  },
  {
    key:"hybrid",
    title:"hybrid",
    Component:Hybrid,
    route:PATH.HYBRID
  },
  {
    key:"premiumplans",
    title:"premiumplans",
    Component:PremiumPlans,
    route:PATH.PREMIUMPLANS
  },
  {
    key:"plandetails",
    title:"plandetails",
    Component:PlanDetails,
    route:PATH.PLANDETAILS
  },
  {
    key:"standard",
    title:"standard",
    Component:Standard,
    route:PATH.STANDARD
  },
  {
    key:"premium",
    title:"premium", 
    Component:Premium,
    route:PATH.PREMIUM
  },
  {
    key:"testpage",
    title:"testpage",
    Component:TestPage,
    route:PATH.TESTPAGE
  },
 
  {
    key:"discuss",
    title:"discuss",
    Component:Discuss,
    route:PATH.DISCUSS
  },
  {
    key:"settings",
    title:"settings",
    Component:Settings,
    route:PATH.SETTINGS
  },
  {
    key:"stutb",
    title:"stutb",
    Component:StdTb,
    route:PATH.STUTB
  },
  {
    key:"premiumtb",
    title:"premiumtb",
    Component:PremiumTb,
    route:PATH.PREMIUMTB
  },
  {
    key:"addmcq",
    title:"addmcq",
    Component:AddMCQ,
    route:PATH.ADDMCQ
  },
  {
    key:"unblock",
    title:"unblock",
    Component:UnBlockTable,
    route:PATH.UNBLOCK
  },
  {
    key:"stadd",
    title:"stadd",
    Component:StAdd,
    route:PATH.STADD
  },
  {
    key:"preadd",
    title:"preadd",
    Component:PreAdd,
    route:PATH.PREADD
  },
  {
    key:"recentstudent",
    title:"recentstudent",
    Component:RecentStudentTable,
    route:PATH.RECENTSTUDENT
  },
  {
    key:"yearinstitution",
    title:"yearinstitution",
    Component:YearInstitution,
    route:PATH.YEARINSTITUTION
  },

];

