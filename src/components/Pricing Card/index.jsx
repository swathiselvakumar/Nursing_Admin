import { Button, Grid, TextField, Typography } from "@mui/material";
import { PricingCardStyles } from "./styles";
import CheckboxValidation from "./Checkbox";

export default function PricingCard({ selectBox }) {
  var content = {
    "01_title": "Basic Languages",
    "01_course": "6 Months plan for one course",
    "01_price": "$700",
    "01_suffix": " / member",
    "01_description": "Python ",
    "01_des": "No of Accounts",
    "01_primary-action": "Buy Now",
    "02_description": "C",
    "03_description": "C++",
    "04_description": "Java",
    ...content,
  };

  return (
    <Grid item xs={3} sx={{ px: 0 }}>
      <div>
        <PricingCardStyles>
          <Grid
            container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className="pricingcard-main-container"
          >
            <Grid item xs={12} className="top-title">
              <Typography variant="h5" component="div">
                Basic Languages
              </Typography>
            </Grid>
            <Grid item xs={12} className="main-title">
              <Typography variant="h6" component="div">
                6 Months plan for one course
              </Typography>
            </Grid>
            <Grid item xs={12} className="price-detail">
              <Typography variant="h6" component="div">
                $800/<small className="small-text">member</small>
              </Typography>
            </Grid>
            <Grid item xs={12} className="course-detail">
              <CheckboxValidation selectBox={selectBox} />
            </Grid>
            <Grid item xs={12} className="account-detail">
              <Typography variant="h6" component="div">
                No of Account
              </Typography>
              <TextField size="small" className="text-field" focused={false} />
            </Grid>
            <Grid item xs={12} className="action-detail">
              <Button variant="contained">Buy now</Button>
            </Grid>
          </Grid>
        </PricingCardStyles>
      </div>
    </Grid>
  );
}
