import { styled } from "@mui/material";

export const CustomPaginationWrapper = styled("div")(({ theme }) => ({
  padding: "15px 0px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  ".MuiPaginationItem-root": {
    borderRadius: "100%",
    backgroundColor: "transparent",
  },
  ".Mui-selected": {
    backgroundColor: `${theme.background.primary} !important`,
    color: theme.font.white,
  },
  ".MuiButton-root": {
    color: theme.font.primary,
    // margin: "0% 5%",
  },
  ".icons": {
    height: "25px",
    width: "25px",
  },
  ".Mui-selected:hover": {},
  ".prev-text": {},
  ".next-text": {},
}));

export const RowsPerPageWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "13px",
  ".label-text": {
    fontStyle: "normal",
    fontHeight: "400",
    fontSize: "18px",
  },
  ".select-form": {
    margin: "0px",
    div: {
      margin: "0px",
    },
  },
});
