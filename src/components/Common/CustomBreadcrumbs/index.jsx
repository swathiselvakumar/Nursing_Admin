import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import {
  // Divider,
  Typography,
} from "@mui/material";
import { BreadCrumbStyles } from "./styles";

export default function CustomBreadCrumbs({ items }) {
  const navigate = useNavigate();
  return (
    <BreadCrumbStyles>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {items.map((item, index) => {
            return (
              <Typography
                onClick={() => navigate(item.path)}
                className={
                  index === items.length - 1 ? "last-item" : "all-item"
                }
                key={index}
              >
                {item.label}
              </Typography>
            );
          })}
        </Breadcrumbs>
        {/* <div className="title-section">
            <h4>Title</h4>
          </div> */}
        {/* <Divider sx={{ borderColor: "green", borderWidth: "1px" }} /> */}
      </Stack>
    </BreadCrumbStyles>
  );
}
