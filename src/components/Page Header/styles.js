import styled from "@emotion/styled";

export const PageHeaderStyles = styled("div")(
  ({
    fontColor,
    theme,
    fontSize,
    subFontSize,
    fontWeight,
    headerMarginBottom,
    paddingRight
  }) => ({
    backgroundColor: theme.background.transparent,
    ".MuiTypography-h1": {
      color: fontColor ? fontColor : theme.font.greyPrimary,
      fontSize: fontSize ? fontSize : "1.2rem",
      fontWeight: fontWeight ? fontWeight : 700,
      marginBottom: headerMarginBottom ? headerMarginBottom : "8px",
      textTransform: "capitalize",
      letterSpacing: ".5px",
      paddingRight:paddingRight?paddingRight:0,
    },
    ".MuiTypography-h3": {
      color: theme.font.greyTertiary,
      fontSize: subFontSize ? subFontSize : "1rem",
      letterSpacing: "1px",
      marginBottom: "8px",
    },
  })
);
