import styled from "@emotion/styled";

export const GlobalStyleContainer = styled("div")(({ theme }) => ({
  ".root-container": {
    padding: "8px",
    paddingLeft: "1.5%",
    height: "calc(100vh - 86px)",
  },
  ".detail-root-container": {
    padding: "8px",
  },
  ".main-container": {
    height: `calc(100% - 75px)`,
    backgroundColor: theme.background.whitePrimary,
    padding: "8px",
    filter: `drop-shadow(0px 3px 3px rgba(${0},${0},${0},${0.43}))`,
    borderRadius: "10px",
    marginBottom: "1%",
  },
  ".pagination-container": {
    position: "sticky",
    bottom: 5,
    backgroundColor: theme.background.transparent,
    borderRadius: "5px",
    padding: "0px 10px",
  },
  ".detail-container": {
    height: `calc(100vh - 86px)`,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.background.whitePrimary,
    padding: "30px 20px 10px 20px",
    borderRadius: "10px",
    filter: ` drop-shadow(0px 3px 3px rgba(${0},${0},${0},${0.54}))`,
  },
  ".sub-detail-container": {
    backgroundColor: theme.background.whiteSecondary,
    height: "40vh",
    overflow: "auto",
  },
}));
