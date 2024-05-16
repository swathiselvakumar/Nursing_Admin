import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Pagination from "@mui/material/Pagination";
import { NavLink } from "react-router-dom";
import { PATH } from "../../constants/routeConstants";
import CustomBreadcrumbs from "../../components/Common/CustomBreadcrumbs";
import { useNavigate } from "react-router-dom";
import UnBlockIcon from "../../assets/icons/unlock.png";
import { TableStdStyle } from "../StudentTable/style";
import axios from "axios";

function createData(sno, sname, email, memberSince) {
  return { sno, sname, email, memberSince };
}

function UnBlockTable() {
  const Navigate = useNavigate();

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "standard List", path: PATH.STANDARD },
    { label: "Block List", path: PATH.UNBLOCK },
  ];

  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [Originaldata, setOriginaldata] = useState();
  const [index, setindex] = useState();
  const [modified, setmodified] = useState();
  const [True, setTrue] = useState();
const email=localStorage.getItem("userMail");

  useEffect(() => {
    if (Originaldata && index >= 0) {
      setmodified(Originaldata[index]);
    }
  }, [Originaldata, index]);

  console.log(modified);

  const HandleUnblock=(()=>{
     const modifiedData = { ...modified, status: "unblock" };
     setmodified(modifiedData);
     setTrue(!True);
  })


   useEffect(() => {
     console.log("Modified changed:", modified);
     if (modified && modified.email) {
       unblocklist();
     }
   }, [True, modified]);
  
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    table();
// unblocklist();
  }, []);
  
  const unblocklist = async () => {
    try {
      const response = await axios.put(
        "https://vebbox.in/Nursing/controllers/api/admin/put/A_blockUnblockStd.php",
        {
          adminId: email,
          id: modified.email,
          status: modified.status,
        }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const table = async () => {
    try {
      const response = await axios.post(
        "http://localhost/_Nursing_final/controllers/api/admin/get/A_ViewBlockStandardStd.php",
        {
          adminId:email,
        }
      );

      setOriginaldata(response.data);

      const blockedData = response.data.filter((item) => item.status === 0);

      const newData = blockedData.map((item,index) =>
        createData(item.sno, item.username, item.email, item.plan_join_date)
      );
      console.log(newData);
      setRows(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  return (
    <>
      <TableStdStyle>
        <div style={{ margin: "10px" }}>
          <div style={{ padding: "25px" }}>
            <CustomBreadcrumbs items={BreadcrumbItems} />
          </div>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "18px", paddingBottom: "30px" }}
          >
            Block List{" "}
          </Typography>

          <TableContainer
            style={{
              borderRadius: "10px",
              padding: "30px",
              backgroundColor: "#f6f6f6",
            }}
            component={Paper}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow className="tb-row ">
                  <TableCell className="head">Sno</TableCell>
                  <TableCell className="head" align="left">
                    Sname
                  </TableCell>
                  <TableCell className="head" align="left">
                    Email Id
                  </TableCell>
                  <TableCell className="head" align="left">
                    Member Since
                  </TableCell>
                  <TableCell className="head" align="center">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row,index) => (
                  <TableRow
                    className="tb-row"
                    key={row.sno}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onClick={()=>{
                      setindex(index)
                   
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.sno}
                    </TableCell>
                    <TableCell align="left">{row.sname}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.memberSince}</TableCell>
                    <TableCell align="center" onClick={handleClickOpen}>
                      <img src={UnBlockIcon} alt="unblock" height="20px" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <Pagination count={10} shape="rounded" />
        </div>
      </TableStdStyle>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        ></DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ textAlign: "center" }}>
          <img
            src={UnBlockIcon}
            height="25px"
            style={{ marginTop: "-30px" }}
            alt="unblock"
          />
          <br />
          Are You sure?
          <br />
          Want to Unblock this student?
          <br />
          <Button
            onClick={handleClose}
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              width: "100px",
              marginTop: "20px",
              textTransform: "capitalize",
            }}
          >
            Cancel
          </Button>
          <NavLink to='/standard' >
            <Button
            onClick={HandleUnblock}
              style={{
                backgroundColor: "#1b4242",
                color: "white",
                marginLeft: "10px",
                width: "100px",
                marginTop: "20px", 
                textTransform: "capitalize",
              }}
            >
              UnBlock
            </Button>
          </NavLink>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UnBlockTable;
