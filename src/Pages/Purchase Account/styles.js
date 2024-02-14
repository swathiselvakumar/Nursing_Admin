import styled from "@emotion/styled";

export const PurchasePageStyle = styled("div")(({ theme }) => ({
  padding: "1%",
  ".pricing-container": {
    height: `calc(100vh - 86px)`,
    padding: "3% 3% 2%  3%",
    backgroundColor: theme.background.whitePrimary,
    borderRadius: "8px",
    filter: ` drop-shadow(0px 3px 3px rgba(${0},${0},${0},${0.54}))`,
    display: "flex",
    alignItems: "center",
  },
}));
