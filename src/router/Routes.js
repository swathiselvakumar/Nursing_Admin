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
import SubInstitution from "../Pages/SubjectMcq/Institution";
import NonInstitution from "../Pages/Non_Nursing/Institution";
import ModelInstitution from "../Pages/Modelmock/Institution";
import Course from "../Pages/Course";
import UpdatePlan from "../Pages/Student/PremiumPlans/UpdatePlan";
import UpdateDetails from "../Pages/Student/PremiumPlans/UpdateDetails";
import AddPremiumplan from "../Pages/Student/PremiumPlans/AddPremiumplan";
import PremiumPlanDetails from "../Pages/Student/PremiumPlans/AddPremiumDetails";
import PasswordChange from "../Pages/settings/PasswordChange";
import Notification from "../Pages/Notification/Notify";
import ViewCourse from "../Pages/Course/ViewCourse";
import AddCourse from "../Pages/Course/AddCourse";
import DailyInstitution from "../Pages/Hybrid/Institution";
import AddQuestion from "../Pages/Hybrid/AddQuestion";
import AddNonNursing from "../Pages/Non_Nursing/AddNonNursing";
import AddMock from "../Pages/Modelmock/AddMock";
import AddMock1 from "../Pages/Modelmock/AddMock1";
import AddMCQ1 from "../Pages/YearMCQ/AddMCQ1";
import McqTable from "../Pages/SubjectMcq/McqTable";
import McqTablePage from "../Pages/SubjectMcq/McqTablePage";
import UploadTest from "../Pages/TestPages/UploadTest";
import Achievement from "../Pages/Achievement";
import Update from "../Pages/Achievement/Update";
import ADDACHIEVEMENT from "../Pages/Achievement/AddAchievement";
import Updatecourse from "../Pages/Course/Updatecourse";
import NotificationHistory from "../Pages/Notification/NotificationHistory";
import UpdateAds from "../Pages/Notification/UpdateAds";
import AddSub from "../Pages/SubjectMcq/AddSub";
import UploadTestsub from "../Pages/SubjectMcq/Uploadtest";
import UploadTestmodel from "../Pages/Modelmock/Updatetestmodel";
import Signin from "../Pages/signin";
import Otp from "../Pages/otp";
import Forget from "../Pages/forget";
import UploadDailyTest from "../Pages/Hybrid/UploadDailyTest";
import MiniInstitution from "../Pages/Hybrid/MiniInstitution";
import MiniUpload from "../Pages/Hybrid/MiniUpload";
import MicroInstitution from "../Pages/Hybrid/MicroInstitution";
import MicroUpload from "../Pages/Hybrid/MicroUpload";
import Mcqnursingtable from "../Pages/Non_Nursing/Mcqnursingtable";
import Mocktablepage from "../Pages/Modelmock/Mocktablepage";
import Viewquestions from "../Pages/SubjectMcq/Viewquetions";
import Viewquestionsnursing from "../Pages/Non_Nursing/Viewquetionsnursing";
import Viewquestionsmodel from "../Pages/Modelmock/Viewquestionsmodel";
import Uploadtestnursing from "../Pages/Non_Nursing/Uploadtestnursing";
import Blocktablepre from "../Pages/Student/Premium/Blocktablepre";
import HybridViewTest from "../Pages/Hybrid/ViewTest";
import MiniTestQuestions from "../Pages/Hybrid/MiniTestQuestions";
import MicroTestQuestions from "../Pages/Hybrid/MicroTestQuestions";
import UploadQuestion from "../Pages/Modelmock/UploadQuestion";
import Aiims from "../Pages/Aiims";
import PrelimsCard from "../Pages/Aiims/Prelims/Card";
import PrelimsInstitution from "../Pages/Aiims/Prelims/institution";
import AddPrelims from "../Pages/Aiims/Prelims/addPrelims";
import PrelimsTablePage from "../Pages/Aiims/Prelims/McqTablePage";
import PrelimsQuestions from "../Pages/Aiims/Prelims/Viewquetions";
import MainsQuestions from "../Pages/Aiims/Mains/Viewquetions";
import MainsCard from "../Pages/Aiims/Mains/Card";
import AddMains from "../Pages/Aiims/Mains/addMains";
import MainsInstitution from "../Pages/Aiims/Mains/institution";
import MainsTablePage from "../Pages/Aiims/Mains/McqTablePage";
import Image from "../Pages/YearMCQ/Image";
export const routeConfig = [
  {
    key: "dashboard",
    title: "Dashboard",
    Component: DashboardPage,
    route: PATH.DASHBOARD,
  },
  {
    key: "report",
    title: "report",
    Component: Report,
    route: PATH.REPORT,
  },
  {
    key: "yearmcq",
    title: "yearmcq",
    Component: YearMCQ,
    route: PATH.YEARMCQ,
  },
  {
    key: "subjectmcq",
    title: "subjectmcq",
    Component: SubjectMCQ,
    route: PATH.SUBJECTMCQ,
  },
  {
    key: "nonnursing",
    title: "nonnursing",
    Component: NonNursingMCQ,
    route: PATH.NONNURSING,
  },
  {
    key: "modelmock",
    title: "modelmock",
    Component: ModelMock,
    route: PATH.MODELMOCK,
  },
  {
    key: "hybrid",
    title: "hybrid",
    Component: Hybrid,
    route: PATH.HYBRID,
  },
  {
    key: "premiumplans",
    title: "premiumplans",
    Component: PremiumPlans,
    route: PATH.PREMIUMPLANS,
  },
  {
    key: "plandetails",
    title: "plandetails",
    Component: PlanDetails,
    route: PATH.PLANDETAILS,
  },
  {
    key: "standard",
    title: "standard",
    Component: Standard,
    route: PATH.STANDARD,
  },
  {
    key: "premium",
    title: "premium",
    Component: Premium,
    route: PATH.PREMIUM,
  },
  {
    key: "testpage",
    title: "testpage",
    Component: TestPage,
    route: PATH.TESTPAGE,
  },

  {
    key: "discuss",
    title: "discuss",
    Component: Discuss,
    route: PATH.DISCUSS,
  },
  {
    key: "settings",
    title: "settings",
    Component: Settings,
    route: PATH.SETTINGS,
  },
  {
    key: "stutb",
    title: "stutb",
    Component: StdTb,
    route: PATH.STUTB,
  },
  {
    key: "premiumtb",
    title: "premiumtb",
    Component: PremiumTb,
    route: PATH.PREMIUMTB,
  },
  {
    key: "addmcq",
    title: "addmcq",
    Component: AddMCQ,
    route: PATH.ADDMCQ,
  },
  {
    key: "unblock",
    title: "unblock",
    Component: UnBlockTable,
    route: PATH.UNBLOCK,
  },
  {
    key: "stadd",
    title: "stadd",
    Component: StAdd,
    route: PATH.STADD,
  },
  {
    key: "preadd",
    title: "preadd",
    Component: PreAdd,
    route: PATH.PREADD,
  },
  {
    key: "recentstudent",
    title: "recentstudent",
    Component: RecentStudentTable,
    route: PATH.RECENTSTUDENT,
  },
  {
    key: "yearinstitution",
    title: "yearinstitution",
    Component: YearInstitution,
    route: PATH.YEARINSTITUTION,
  },
  {
    key: "subinstitution",
    title: "subinstitution",
    Component: SubInstitution,
    route: PATH.SUBINSTITUTION,
  },
  {
    key: "addsub",
    title: "addsub",
    Component: AddSub,
    route: PATH.ADDSUB,
  },
  {
    key: "noninstitution",
    title: "noninstitution",
    Component: NonInstitution,
    route: PATH.NONINSTITUTION,
  },
  {
    key: "modelinstitution",
    title: "modelinstitution",
    Component: ModelInstitution,
    route: PATH.MODELINSTITUTION,
  },
  {
    key: "course",
    title: "course",
    Component: Course,
    route: PATH.COURSE,
  },
  {
    key: "updateplan",
    title: "updateplan",
    Component: UpdatePlan,
    route: PATH.UPDATEPLAN,
  },
  {
    key: "updatedetails",
    title: "updatedetails",
    Component: UpdateDetails,
    route: PATH.UPDATEDETAILS,
  },
  {
    key: "addpremium",
    title: "addpremium",
    Component: AddPremiumplan,
    route: PATH.ADDPREMIUMPLAN,
  },
  {
    key: "premiumplandetails",
    title: "premiumplandetails",
    Component: PremiumPlanDetails,
    route: PATH.PREMIUMPLANDETAILS,
  },
  {
    key: "passwordchange",
    title: "passwordchange",
    Component: PasswordChange,
    route: PATH.PASSWORDCHANGE,
  },
  {
    key: "notification",
    title: "notification",
    Component: Notification,
    route: PATH.NOTIFICATION,
  },
  {
    key: "viewcourse",
    title: "viewcourse",
    Component: ViewCourse,
    route: PATH.VIEWCOURSE,
  },
  {
    key: "addcourse",
    title: "addcourse",
    Component: AddCourse,
    route: PATH.ADDCOURSE,
  },
  {
    key: "dailyinstitution",
    title: "dailyinstitution",
    Component: DailyInstitution,
    route: PATH.DAILYINSTITUTION,
  },
  {
    key: "addquestion",
    title: "addquestion",
    Component: AddQuestion,
    route: PATH.ADDQUESTION,
  },
  {
    key: "addnonnursing",
    title: "addnonnursing",
    Component: AddNonNursing,
    route: PATH.ADDNONNURSING,
  },
  {
    key: "addmock",
    title: "addmock",
    Component: AddMock,
    route: PATH.ADDMOCK,
  },
  {
    key: "addmock1",
    title: "addmock1",
    Component: AddMock1,
    route: PATH.ADDMOCK1,
  },
  {
    key: "addmcq1",
    title: "addmcq1",
    Component: AddMCQ1,
    route: PATH.ADDMCQ1,
  },
  {
    key: "mcqtable",
    title: "mcqtable",
    Component: McqTable,
    route: PATH.MCQTABLE,
  },
  {
    key: "mcqtablepage",
    title: "mcqtablepage",
    Component: McqTablePage,
    route: PATH.MCQTABLEPAGE,
  },
  {
    key: "uploadtest",
    title: "uploadtest",
    Component: UploadTest,
    route: PATH.UPLOADTEST,
  },
  {
    key: "achievement",
    title: "achievement",
    Component: Achievement,
    route: PATH.ACHIEVEMENT,
  },
  {
    key: "update",
    title: "update",
    Component: Update,
    route: PATH.UPDATE,
  },
  {
    key: "addachievement",
    title: "addachievement",
    Component: ADDACHIEVEMENT,
    route: PATH.ADDACHIEVEMENT,
  },
  {
    key: "updatecourse",
    title: "updatecourse",
    Component: Updatecourse,
    route: PATH.UPDATECOURSE,
  },
  {
    key: "history",
    title: "history",
    Component: NotificationHistory,
    route: PATH.NOTIFICATIONHISTORY,
  },
  {
    key: "updateads",
    title: "updateads",
    Component: UpdateAds,
    route: PATH.UPDATEADS,
  },
  {
    key: "uploadtestsub",
    title: "uploadtestsub",
    Component: UploadTestsub,
    route: PATH.UPLOADTESTSUB,
  },
  {
    key: "uploadtestmodel",
    title: "uploadtestmodel",
    Component: UploadTestmodel,
    route: PATH.UPLOADTESTMODEL,
  },
  {
    key: "signin",
    title: "signin",
    Component: Signin,
    route: PATH.SIGNIN,
    type: 1,
  },
  {
    key: "otp",
    title: "otp",
    Component: Otp,
    route: PATH.OTP,
    type: 1,
  },
  {
    key: "forget",
    title: "forget",
    Component: Forget,
    route: PATH.FORGET,
    type: 1,
  },
  {
    key: "uploaddailytest",
    title: "uploaddailytest",
    Component: UploadDailyTest,
    route: PATH.UPLOADDAILYTEST,
  },
  {
    key: "miniinstitution",
    title: "miniinstitution",
    Component: MiniInstitution,
    route: PATH.MINIINSTITUTION,
  },
  {
    key: "miniupload",
    title: "miniupload",
    Component: MiniUpload,
    route: PATH.MINIUPLOAD,
  },
  {
    key: "microinstitution",
    title: "microinstitution",
    Component: MicroInstitution,
    route: PATH.MICROINSTITUTION,
  },
  {
    key: "microupload",
    title: "microupload",
    Component: MicroUpload,
    route: PATH.MICROUPLOAD,
  },
  {
    key: "mcqnursingtable",
    title: "mcqnursingtable",
    Component: Mcqnursingtable,
    route: PATH.NONNURSINGMCQ,
  },
  {
    key: "mocktablepage",
    title: "mocktablepage",
    Component: Mocktablepage,
    route: PATH.MOCKTABLEPAGE,
  },
  {
    key: "viewquestionssub",
    title: "viewquestionssub",
    Component: Viewquestions,
    route: PATH.VIEWQUETIONSSUB,
  },
  {
    key: "viewquestionsnursing",
    title: "viewquestionsnursing",
    Component: Viewquestionsnursing,
    route: PATH.VIEWQUESTIONSNURSING,
  },
  {
    key: "viewquestionsmodel",
    title: "viewquestionsmodel",
    Component: Viewquestionsmodel,
    route: PATH.VIEWQUESTIONSMODEL,
  },
  {
    key: "uploadtestnursing",
    title: "uploadtestnursing",
    Component: Uploadtestnursing,
    route: PATH.UPLOADTESTNURSING,
  },
  {
    key: "blocktablepre",
    title: "blocktablepre",
    Component: Blocktablepre,
    route: PATH.BLOCKTABLEPRE,
  },
  {
    key: "hybridviewtest",
    title: "hybridviewtest",
    Component: HybridViewTest,
    route: PATH.HYBRIDVIEWTEST,
  },
  {
    key: "minitestquestions",
    title: "minitestquestions",
    Component: MiniTestQuestions,
    route: PATH.MINITESTQUESTIONS,
  },
  {
    key: "microtestquestions",
    title: "microtestquestions",
    Component: MicroTestQuestions,
    route: PATH.MICROTESTQUESTIONS,
  },
  {
    key: "uploadquestion",
    title: "uploadquestion",
    Component: UploadQuestion,
    route: PATH.UPLOADQUESTION,
  },
  {
    key: "aiims",
    title: "aiims",
    Component: Aiims,
    route: PATH.AIIMSPRELIMS,
  },
  {
    key: "prelimscard",
    title: "prelimscard",
    Component: PrelimsCard,
    route: PATH.PRELIMSCARD,
  },
  {
    key: "prelimsinstitution",
    title: "prelimsinstitution",
    Component:PrelimsInstitution,
    route: PATH.PRELIMSINSTITUTION,
  },
  {
    key: "addprelims",
    title: "addprelims",
    Component:AddPrelims,
    route: PATH.ADDPRELIMS,
  },
  {
    key: "prelimstablepage",
    title: "prelimstablepage",
    Component:PrelimsTablePage,
    route: PATH.PRELIMSTABLE,
  },
  {
    key: "prelimsquestion",
    title: "prelimsquestion",
    Component:PrelimsQuestions,
    route: PATH.PRELIMSQUESTION,
  },
  // mains
  {
    key: "mainscard",
    title: "mainscard",
    Component: MainsCard,
    route: PATH.MAINSCARD,
  },
  {
    key: "mainsinstitution",
    title: "mainsinstitution",
    Component:MainsInstitution,
    route: PATH.MAINSINSTITUTION,
  },
  {
    key: "addmains",
    title: "addmains",
    Component:AddMains,
    route: PATH.ADDMAINS,
  },
  {
    key: "mainstablepage",
    title: "mainstablepage",
    Component:MainsTablePage,
    route: PATH.MAINSTABLE,
  },
  {
    key: "mainsquestion",
    title: "mainsquestion",
    Component:MainsQuestions,
    route: PATH.MAINSQUESTION,
  },
  {
    key: "image",
    title: "image",
    Component:Image,
    route: PATH.IMAGE,
  },
];

