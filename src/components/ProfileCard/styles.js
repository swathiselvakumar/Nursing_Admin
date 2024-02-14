import { styled } from "@mui/material";

export const ProfileWrapper = styled("div")(({ theme }) => ({
  ".profile-card": {
    paddingBottom: "8px",
    marginBottom: "8px",
    backgroundColor: theme.background.transparent,
    boxShadow: "none",
  },
  ".profile-image": {
    padding: "0px 40px",
    paddingBottom: 0,
    paddingTop: "0px",
    borderRadius: "50%",
    margin: "0px auto",
    marginBottom: "40px",
    width: "70%",
  },
  ".username": {
    fontSize: "14px",
    fontWeight: "bold",
    textTransform: "capitalize",
    color: theme.font.lightViolet,
    marginBottom: "8px",
  },
  ".email": {
    fontSize: "12px",
    fontWeight: "normal",
    textTransform: "lowercase",
    marginBottom: "8px",
    color: theme.font.primary,
  },
  ".mobile": {
    fontSize: "12px",
    fontWeight: "normal",
    textTransform: "lowercase",
    color: theme.font.primary,
  },
}));

export const ProfileButtonWrapper = styled("div")(() => ({
  ".view-btn-container": {
    height: "10vh",
    display: "flex",
    alignItems: "center",
  },
}));
