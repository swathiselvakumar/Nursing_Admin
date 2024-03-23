import styled from "@emotion/styled";
import { theme } from "../../../themes/theme";

const color = theme.palette;

export const BreadCrumbStyles = styled("div")(() => ({
  padding: "1.5% 0% 1% 0%",
  ".MuiBreadcrumbs-separator": {
    margin: "0px",
    color: "#c1c1c1",
  },
  ".all-item": {
    color: color.font.primary,
    fontSize: "16px",
    fontWeight: 500,
    textTransform: "capitalize",
    letterSpacing: 0.4,
    cursor: "pointer",
  },
  ".last-item": {
    color: color.font.grey,
    fontSize: "16px",
    fontWeight: 500,
    textTransform: "capitalize",
    letterSpacing: 0.4,
    cursor: "pointer",
  },
  ".title-section": {
    h4: {
      color: color.font.primary,
      fontSize: 20,
      marginBottom: 0,
      textTransform: "capitalize",
      letterSpacing: 0.5,
    },
  },
  "@media(min-width:1300px)": {
    ".all-item,.last-item": {
      fontSize: 16,
    },
  },
  "@media(min-width:1800px)": {
    ".all-item,.last-item": {
      fontSize: 20,
    },
  },
}));
