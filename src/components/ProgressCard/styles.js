import styled from "@emotion/styled";

export const ProgressCardStyles = styled("div")(({ theme }) => ({
  margin: "10px 0px 20px 0px",
  ".progress-main-container": {
    padding: "8px",
    border: `none`,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.background.tertiary,
  },
  ".title": {
    color: theme.font.white,
    fontSize: "9px",
    fontWeight: "bold",
  },
  ".progress-title": {
    color: theme.font.white,
    fontSize: "6px",
    fontWeight: "normal",
    letterSpacing: "1.5px",
  },
  ".date-content": {
    color: theme.font.white,
    fontSize: "7px",
    fontWeight: "normal",
  },
  ".course-image-container": {
    backgroundColor: theme.background.whitePrimary,
    borderRadius: "10px",
    filter: `drop-shadow(3px 3px 3px #8cabdd)`,
  },
}));

export const ProgressbarStyles = styled("div")(({ theme }) => ({
  ".MuiLinearProgress-root": {
    backgroundColor: theme.background.whiteSecondary,
    height: "5px",
    borderRadius: "5px",
  },
  ".css-5xe99f-MuiLinearProgress-bar1": {
    backgroundColor: theme.background.secondary,
  },
}));
