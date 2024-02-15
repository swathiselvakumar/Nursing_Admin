

import { ReportStyle } from "./style";
// import { Typography } from '@mui/material'

import TableNav from "./Table/TableNav";
import TableButton from "./Table/TableButton";

import TableViewOrg from "./Table/TableView";

export default function Report() {
  return (
    <div
      style={{ padding: "20px",  height: "100vh" }}
    > 
      <ReportStyle>
        <TableNav />
        <TableButton />
        <TableViewOrg/>      
        
      </ReportStyle>
    </div>
  );
}
