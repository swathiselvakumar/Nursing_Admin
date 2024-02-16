import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { PATH } from "../../../../constants/routeConstants";
import { Settings } from "@mui/icons-material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
export const TopListData = [
  {
    icon: DashboardOutlinedIcon,
    title: "Dashboard",
    path: PATH.DASHBOARD,
  },
  {
    icon:PersonOutlineOutlinedIcon,
    title: "Students",
    // path: PATH.TESTS,
  },
  {
    icon: HelpOutlineOutlinedIcon,
    title: "Questions",
    // path: PATH.TESTS,
  },
  {
    icon: ForumRoundedIcon,
    title: "Discussion Forum",
    // path: PATH.PURCHASE,
  },
  {
    icon: ContentPasteOutlinedIcon,
    title: "Report",
    path: PATH.REPORT,
  },
];

export const SubListData = [
  {
    title: "Standard",
    // path: PATH.TESTS,
  },
  {
    title: "Premium",
    // path: PATH.RESULT_ANALYSIS,
  },
  {
    title: "Premium Plans ",
    // path: PATH.RESULT_ANALYSIS,
  },
];

export const SubListData1 = [
  {
    title: "Previous Year MCQ",
    path: PATH.YEARMCQ,
  },
  {
    title: "Subject Wise MCQ",
    path: PATH.SUBJECTMCQ,
  },
  {
    title: "Non Nursing MCQ",
    // path: PATH.RESULT_ANALYSIS,
  },
  {
    title: "Model mock test",
    // path: PATH.RESULT_ANALYSIS,
  },
  {
    title: "Hybrid Test",
    // path: PATH.RESULT_ANALYSIS,
  },
];

export const BottomListData = [
  {
    icon: Settings,
    title: "Settings",
    path: PATH.HELP,
  },
  {
    icon: ExitToAppOutlinedIcon,
    title: "Logout",
    path: PATH.HOME,
  },
];
