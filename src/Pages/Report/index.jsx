import { ReportStyle } from "./style";
import TableNav from "./Table/TableNav";
import TableButton from "./Table/TableButton";


export default function Report() {
  return (
<div>
      <ReportStyle >
        <TableNav />
        <TableButton name="Student" name2="Test" />
      </ReportStyle>
    </div>
  );
}
