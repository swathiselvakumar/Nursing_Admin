import LoginPage from "../Pages/Login";
import SignupPage from "../Pages/Signup";
import DashboardPage from "../Pages/Dashboard";
import PurchaseAccountPage from "../Pages/Purchase Account";
import StudentsPage from "../Pages/Students";
import TestPage from "../Pages/Test Upload/index";
import HelpPage from "../Pages/Help";
import LandingPage from "../Pages/Landing";
import UploadQuestionsPage from "../Pages/Test Upload/UploadQuestions";
import InstructionsPage from "../Pages/Test Upload/Instructions";
import QuestionsView from "../Pages/Result Analysis/QuestionsView";
import ResultAnalysisPage from "../Pages/Result Analysis";
import ViewTestPage from "../Pages/ViewTest/index";
import { PATH } from "../constants/routeConstants";
import Report from "../Pages/Report";
export const routeConfig = [
  {
    key: "home",
    title: "Home",
    Component: LandingPage,
    route: PATH.HOME, 
    isPublic: true,
  },
  {
    key: "login",
    title: "Login",
    Component: LoginPage,
    route: PATH.LOGIN,
    isPublic: true,
  },
  {
    key: "signup",
    title: "Signup",
    Component: SignupPage,
    route: PATH.SIGNUP,
    isPublic: true,
  },
  {
    key: "dashboard",
    title: "Dashboard",
    Component: DashboardPage,
    route: PATH.DASHBOARD,
  },
  {
    key: "purchase-account",
    title: "Purchase Account",
    Component: PurchaseAccountPage,
    route: PATH.PURCHASE,
  },
  {
    key: "students",
    title: "Students",
    Component: StudentsPage,
    route: PATH.STUDENTS,
  },
  { key: "tests", title: "Tests", Component: TestPage, route: PATH.TESTS },
  {
    key: "upload-questions",
    title: "Upload Questions",
    Component: UploadQuestionsPage,
    route: PATH.QUESTIONS_UPLOAD,
  },
  {
    key: "instructions",
    title: "Instructions",
    Component: InstructionsPage,
    route: PATH.INSTRUCTIONS,
  },
  {
    key: "result-analysis",
    title: "Result Analysis",
    Component: ResultAnalysisPage,
    route: PATH.RESULT_ANALYSIS,
  },
  { 
    key: "question-view",
    title: "Question View",
    Component: QuestionsView,
    route: PATH.QUESTION_VIEW,
  },
  { key: "help", title: "Help", Component: HelpPage, route: PATH.HELP },
  {
    key: "view-test-details",
    title: "View Test Details",
    Component: ViewTestPage,
    route: PATH.VIEW_TEST_DETAILS,
  },
  {
    key:"report",
    title:"report",
    Component:Report,
    route:PATH.REPORT
  }
];

