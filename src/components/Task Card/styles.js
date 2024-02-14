import styled from "@emotion/styled";

export const TaskCardStyles = styled("div")(({ theme }) => ({
  backgroundColor: theme.background.whitePrimary,
  ".task-card-container": {
    filter: `drop-shadow(0px 5px 5px ${theme.background.whitePrimary})`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    borderRadius: "8px",
    margin: "10px 0px",
    border: `1px solid ${theme.background.primary}`,
    "&:hover": {
      backgroundColor: theme.background.primary,
      filter: ` drop-shadow(0px 5px 5px #1b3154)`,
      ".task-name,.task-count,.icons,.percentage-text": {
        color: theme.font.white,
      },
    },
    "&:focus": {
      backgroundColor: theme.background.primary,
      filter: ` drop-shadow(0px 5px 5px #1b3154)`,
      ".task-name,.task-count,.icons,.percentage-text": {
        color: theme.font.white,
      },
    },
  },
  ".icons": {
    color: theme.font.primary,
  },
  ".percentage-conatiner": {
    border: `1px solid ${theme.font.primary}`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    ".percentage-text": {
      color: theme.font.primary,
    },
  },
  ".content-container": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "10px",
    ".task-name": {
      color: theme.font.primary,
      fontWeight: 600,
      marginBottom: "2px",
      fontSize: "13px",
    },
    ".task-count": {
      color: theme.font.primary,
      fontWeight: 500,
      marginBottom: "2px",
      fontSize: "12px",
    },
  },
}));
