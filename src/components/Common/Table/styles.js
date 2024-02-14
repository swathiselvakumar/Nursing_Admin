import styled from "@emotion/styled";

export const CommonTableStyles = styled("div")(({ theme, tableHeight }) => ({
  ".MuiTableContainer-root": {
    borderRadius: "5px",
    boxShadow: "none",
    backgroundColor: theme.background.transparent,
    padding: "0px",
    height: tableHeight ? `calc(100vh - ${tableHeight})` : "58vh",
    overflow: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  ".MuiTable-root": {
    borderSpacing: "0px 8px",
    borderCollapse: "separate",
    padding: "2px",
  },
  ".table-header": {
    backgroundColor: theme.background.whitePrimary,
    filter: `drop-shadow(0px 2px 2px rgba(${155},${155},${155},${0.85}))`,
    borderRadius: "5px",
    position: "sticky",
    top: 0,
  },
  ".table-header-cells": {
    color: theme.font.primary,
    padding: "3px",
    fontSize: ".9rem",
    fontWeight: 700,
    textTransform: "capitalize",
    letterSpacing: "1px",
  },
  ".table-data-row": {
    // backgroundColor: theme.table.primary,
    borderRadius: "5px",
    filter: `drop-shadow(0px 2px 2px rgba(${155},${155},${155},${0.85}))`,

    "&:hover": {
      borderRadius: "5px",
      backgroundColor: theme.table.hover,
      filter: `drop-shadow(0px 2px 2px rgba(${155},${155},${155},${0.85}))`,
      ".table-data-cell": {
        // color: theme.font.primary,
      },
    },
  },
  ".table-data-cell": {
    padding: "1px",
    fontSize: ".8rem",
    color: theme.font.primary,
    fontWeight: 500,
    letterSpacing: ".5px",
    textTransform: "capitalize",
  },
}));
