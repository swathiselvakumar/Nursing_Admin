import AppHeader from "../../Common/AppHeader";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../../Common/Sidebar";
import Table from "../../Common/Table";
import { Grid } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function StudentsPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppHeader pageTitle="Students" />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Grid container>
          <Grid item xs={12} md={9}>
            <Table />
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Box>
    </Box>
  );
}
