import { Stack } from "@mui/material";
import { GlobalStyleContainer } from "../../components/Global Styles/global.styles";
import PricingCard from "../../components/Pricing Card";
import { PurchasePageStyle } from "./styles";

export default function PurchaseAccountPage() {
  return (
    <>
      <GlobalStyleContainer>
        <PurchasePageStyle>
          <Stack direction="row" spacing={3} className="pricing-container">
            <PricingCard selectBox={1} />
            <PricingCard selectBox={2} />
            <PricingCard selectBox={3} />
            <PricingCard selectBox={4} />
          </Stack>
        </PurchasePageStyle>
      </GlobalStyleContainer>
    </>
  );
}
