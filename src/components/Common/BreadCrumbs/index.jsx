import { Breadcrumbs, Typography, useTheme } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { BreadCrumbStyles } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

export default function BreadcrumbsComp() {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <BreadCrumbStyles>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {pathnames?.map((name, index) => {
          const routTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography
              key="3"
              sx={{ color: theme.font.primary, textTransform: "capitalize" }}
            >
              {name.replaceAll("-", " ")}
            </Typography>
          ) : (
            <Typography
              key="3"
              sx={{ color: theme.font.primary, textTransform: "capitalize" }}
              onClick={() => navigate(routTo)}
            >
              {name.replaceAll("-", " ")}
            </Typography>
          );
        })}
      </Breadcrumbs>
    </BreadCrumbStyles>
  );
}
