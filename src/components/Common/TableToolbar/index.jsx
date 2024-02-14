import { Grid, IconButton, Typography, useTheme } from "@mui/material";
import { CommonToolbarStyles } from "./styles";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export default function TableToolbar({
  title,
  subTitle,
  sort,
  filter,
  search,
  download,
  titleFontSize,
  subTitleFontSize,
  padding,
  titleMarginBottom,
  subtTitleMarginBottom,
  titleMarginLeft,
}) {
  return (
    <CommonToolbarStyles
      titleFontSize={titleFontSize}
      subTitleFontSize={subTitleFontSize}
      padding={padding}
      titleMarginBottom={titleMarginBottom}
      subtTitleMarginBottom={subtTitleMarginBottom}
      titleMarginLeft={titleMarginLeft}
    >
      <Grid container className="toolbar-main-container">
        <Grid item display="flex" flexDirection="column">
          <Typography variant="h2">{title}</Typography>
          {subTitle && <Typography variant="body2">{subTitle}</Typography>}
        </Grid>
        <Grid item>
          {sort && (
            <IconButton className="icon-button">
              <ImportExportOutlinedIcon className="iconStyles" />
            </IconButton>
          )}
          {filter && (
            <IconButton className="icon-button">
              <FilterListOutlinedIcon className="iconStyles" />
            </IconButton>
          )}
          {search && (
            <IconButton className="icon-button">
              <SearchOutlinedIcon className="iconStyles" />
            </IconButton>
          )}
          {download && (
            <IconButton className="icon-button">
              <DownloadOutlinedIcon className="iconStyles" />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </CommonToolbarStyles>
  );
}
