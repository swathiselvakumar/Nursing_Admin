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
  }

];

