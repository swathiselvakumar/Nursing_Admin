import styled from "@emotion/styled";

export const StudentPageStyles = styled("div")(({ theme }) => ({
  height: `calc(100% - 50px)`,
  backgroundColor: theme.background.whitePrimary,
  padding: "8px",
  filter: `drop-shadow(0px 3px 3px rgba(${0},${0},${0},${0.43}))`,
  borderRadius: "10px",
  marginBottom: "1%",
}));
