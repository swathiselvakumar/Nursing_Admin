import styled from "@emotion/styled";

export const SidebarStyleWrapper = styled("div")(({ theme }) => ({
  ".MuiDrawer-paper": {
    backgroundColor: "#1B4242",
    color: theme.font.white,
  },
 ".drawer":{ 
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontStyle: "normal"
 }
}));
