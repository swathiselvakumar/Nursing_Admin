import { Typography } from "@mui/material";
import { PageHeaderStyles } from "./styles";

export default function PageHeader({
  fontSize,
  title,
  subTitle,
  subFontSize,
  fontColor,
  align,
  fontWeight,
  onClick,
  headerMarginBottom,
  paddingRight,
}) {
  return (
    <PageHeaderStyles
      fontSize={fontSize}
      subFontSize={subFontSize}
      fontColor={fontColor}
      fontWeight={fontWeight}
      headerMarginBottom={headerMarginBottom}
      paddingRight={paddingRight}
    >
      <Typography variant="h1" px={paddingRight} component="h1" align={align} onClick={onClick}>
        {title}
      </Typography>
      <Typography variant="h3" component="h3">
        {subTitle}
      </Typography>
    </PageHeaderStyles>
  );
}
