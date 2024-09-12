import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { PATH } from "../../../../constants/routeConstants";
import { Settings } from "@mui/icons-material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SchoolIcon from '@mui/icons-material/School';
export const TopListData = [
  {
    icon: DashboardOutlinedIcon,
    title: "Dashboard",
    path: PATH.DASHBOARD,
  },
  {
    icon:PersonOutlineOutlinedIcon,
    title: "Students",
    // path: PATH.STANDARD,
  },
  {
    icon: HelpOutlineOutlinedIcon,
    title: "Questions",
    // path:PATH.YEARMCQ,
  },
  {
    icon: ForumRoundedIcon,
    title: "Discussion Forum",
    path: PATH.DISCUSS,
  },
  {
    icon: ContentPasteOutlinedIcon,
    title: "Report",
    path: PATH.REPORT,
  },
  {
    icon:MenuBookOutlinedIcon,
    title:"Course",
    path:PATH.COURSE
  },
  {
    icon:SchoolIcon,
    title:"Achievement",
    path:PATH.ACHIEVEMENT
  }
];

export const SubListData = [
  {
    title: "Standard",
    path: PATH.STANDARD,
  },
  {
    title: "Premium",
    path: PATH.PREMIUM,
  },
  {
    title: "Premium Plans ",
    path: PATH.PREMIUMPLANS,
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
    path: PATH.NONNURSING,
  },
  {
    title: "Model mock MCQ",
    path: PATH.MODELMOCK,
  },
  {
    title: "Hybrid Test",
    path: PATH.HYBRID,
  },
  {
    title: "Aiims",
    path: PATH.AIIMSPRELIMS,
  },
];

export const BottomListData = [
  {
    icon: Settings,
    title: "Setting",
    path: PATH.SETTINGS,
  },
  {
    icon: ExitToAppOutlinedIcon,
    title: "Logout",
    path:PATH.SIGNIN
    
  },
];
