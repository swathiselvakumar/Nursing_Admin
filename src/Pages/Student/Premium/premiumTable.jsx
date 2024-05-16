import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Box,
  Button,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import axios from "axios";
import { TableStdStyle } from "../../StudentTable/style";
import Profile from "../../Profile";
import BlockIcon from "../../../assets/icons/block.png";



export default function PremiumTb({tableData,setLoaded,loaded}) {
  const [openDialog, setOpenDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [Originaldata,setOriginaldata] = useState();
  const [modified,setmodified] = useState();
  const [index,setindex] = useState();
  const [True,setTrue] = useState();
const email=localStorage.getItem("userMail");


console.log(index);
  useEffect(() => {
    if (tableData && index >= 0) {
      setmodified(tableData[index]);
      console.log(tableData[index]);
    }
  }, [index]);

  // useEffect(()=>{

  //   blocklist();
  //   // console.log(modified.email);
  // },[])


  const handleCloseDialog = () => {
  

    setOpenDialog(false);
  };

  const handleCloseDialogBlk=()=>{
    // const modifiedData = { ...modified, status: "block" };
    // setmodified({ ...modified, status: "block" });
    console.log(modified.email);
    setTrue(!True)
    blocklist();
    setOpenDialog(false);
  }


  const blocklist = async () => {
    try {
      const response = await axios.put(
        "https://vebbox.in/Nursing/controllers/api/admin/put/A_blockUnblockStd.php",
        {
          adminId:email,
          id: modified.email,
          status: "block",
        }
      );
      setLoaded(!loaded);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };




  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewPremiumSt.php",
  //       {
  //         adminId:email,
  //       }
  //     );

  //     setOriginaldata(response.data);
  //     // console.log(response.data);

  //     const unblockedData = response.data.filter(
  //       (item) => item.status === 1
  //     );

  //     // const search =response.data.filter((item)=>item.)

  //     const newData = unblockedData.map((item) =>
  //       createData(
  //         item.id,
  //         item.username,
  //         item.email,
  //         item.plan_join_date,
  //         item.plan_expiry_date
  //       )
  //     );

  //     setRows(newData);
  //     console.log(newData)
  //     console.log(rows);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
console.log(tableData);

  return (
    <>
      <TableStdStyle>
        <div style={{ margin: "10px" }}>
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
                  <TableCell className="head" align="left">
                    Expired Date
                  </TableCell>
                  <TableCell className="head" align="center">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow
                    className="tb-row"
                    key={row.sno}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onClick={() => {
                    setindex(index);
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.sno}
                    </TableCell>
                    <TableCell align="left">{row.sname}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.memberSince}</TableCell>
                    <TableCell align="left">{row.expireddate}</TableCell>
                    <TableCell align="center">
                      <img
                        src={BlockIcon}
                        height="20px"
                        onClick={handleOpenDialog}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </TableStdStyle>
      <Dialog
        onClose={handleCloseDialog}
        open={openDialog}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Are you sure?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleCloseDialogBlk} color="error">
            Block
          </Button>
        </DialogActions>
      </Dialog>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 4,
            width: "90%",
          }}
        >
          <Profile student={selectedStudent} />
        </Box>
      </Modal>
    </>
  );
}
