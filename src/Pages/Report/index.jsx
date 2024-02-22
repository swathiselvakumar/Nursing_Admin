import { ReportStyle } from "./style";
import TableNav from "./Table/TableNav";
import TestTable from "./Table/TestTable";


export default function Report() {
  return (
<div>
      <ReportStyle >
        <TableNav />
        <div style={{padding:'25px'}}>
          <TestTable/>
        </div>
      </ReportStyle>
    </div>
  );
}
