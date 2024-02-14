import styled from "@emotion/styled";

export const CommonToolbarStyles = styled("div")(
  ({
    theme,
    titleFontSize,
    titleMarginBottom,
    titleMarginLeft,
    subTitleFontSize,
    subtTitleMarginBottom,
    padding,
  }) => ({
    backgroundColor: theme.background.whitePrimary,
    ".toolbar-main-container": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: padding ? padding : "8px 2px",
      marginBottom: "-4px",
    },
    ".MuiTypography-h2": {
      color: theme.font.primary,
      fontSize: titleFontSize ? titleFontSize : "18px",
      textTransform: "capitalize",
      fontWeight: "bold",
      marginLeft: titleMarginLeft ? titleMarginLeft : "10px",
      marginBottom: titleMarginBottom ? titleMarginBottom : "0px",
    },
    ".MuiTypography-body2": {
      fontSize: subTitleFontSize ? subTitleFontSize : "13px",
      color: theme.font.greyTertiary,
      marginBottom: subtTitleMarginBottom ? subtTitleMarginBottom : "0px",
      marginLeft: titleMarginLeft ? titleMarginLeft : "10px",
    },
    ".iconStyles": {
      color: theme.icon.tertiary,
      fontSize: "1.2rem",
    },
    ".icon-button": {
      backgroundColor: theme.background.whiteSecondary,
      boxShadow: `rgba(${0}, ${0}, ${0}, ${0.2}) 0px 1px 3px 0px, rgba(${27}, ${31}, ${35}, ${0.15}) 0px 2px 1px 1px`,
      marginRight: "8px",
      "&:focus": {
        backgroundColor: theme.background.primary,
        ".iconStyles": {
          color: theme.font.white,
        },
      },
    },
  })
);
