import { ReportStyle } from "./style";
// import { Typography } from '@mui/material'

import TableNav from "./Table/TableNav";
import TableButton from "./Table/TableButton";

import TableViewOrg from "./Table/TableView";
import Settings from "../settings/Settings";
import Discuss from "../DiscussForm/Discuss";
import Notify from "../Notification/Notify";
import StdTb from "../StudentTable/StdTb";
import AlertBox from "../AlertBox/AlertBox";

export default function Report() {
  return (
    <div style={{ padding: "20px", height: "100vh" }}>
      <ReportStyle>
        {/* <TableNav /> */}
        {/* <TableButton /> */}
        {/* <TableViewOrg/>       */}
        <Settings/>
        {/* <Discuss/> */}
        {/* <Notify/> */}
        {/* <StdTb/> */}
        {/* <AlertBox/> */}

      </ReportStyle>
    </div>
  );
}
