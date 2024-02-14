import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

export const TopListData = [
  { title: "Students", icon: PersonOutlineOutlinedIcon, path: "/students" },
  { title: "Test", icon: EditCalendarOutlinedIcon, path: "/test" },
  {
    title: "Purchase Acount",
    icon: MonetizationOnOutlinedIcon,
    path: "/purchase_account",
  },
];

export const BottomListData = [
  { title: "Settings", icon: SettingsOutlinedIcon },
  { title: "Logout", icon: ExitToAppOutlinedIcon, path: "/" },
];
