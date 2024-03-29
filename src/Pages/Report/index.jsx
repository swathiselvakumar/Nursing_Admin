import { ReportStyle } from "./style";
import TableNav from "./Table/TableNav";
import TestTable from "./Table/TestTable";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { getLocalStorage } from "../../utils/helperFunc";
export default function Report() {
  const languageName = getLocalStorage("languageName");

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "Student Report", path: PATH.REPORT },
  ];
  return (
<div>
      <ReportStyle >
      <div style={{padding:"10px"}}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
        </div>
        <TableNav />
        <div style={{padding:'20px'}}>
          <TestTable/>
        </div>
      </ReportStyle>
    </div>
  );
}
