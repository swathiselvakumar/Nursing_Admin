import { Grid, Stack } from "@mui/material";
import {
  FormButton,
  TextBox,
  NumberBox,
  AutoCompleteTextbox,
} from "./FormComponents";
// icons
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import LocationOnOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

const CollegeName = ["College One", "College Two", "College Three"];
const DistrictName = [
  "Coimbatore",
  "Thanjavur",
  "Erode",
  "Ariyalur",
  "Tirunelvi",
  "Nagapattinam",
  "Perambalur",
  "Dindigul",
  "Salem",
  "Chennai",
  "Cuddalore",
  "Karur",
  "Krishnagiri",
  "Theni",
  "Thiruvannamalai",
  "Pudukkottai",
  "Vellore",
  "Dharmapuri",
  "Madurai",
  "Tiruchirappalli",
  "Sivagangai",
  "Namakkal",
  "Kanchipuram",
  "Tiruvallur",
];

export function SignupSecondForm({ formChoose, handleForm, formData }) {
  return (
    <>
      <Stack>
        <AutoCompleteTextbox
          IconName={<SchoolOutlinedIcon className="icons" />}
          labelTitle="College Name"
          fullWidth={true}
          placeholder="Enter your college name"
          options={CollegeName}
        />
      </Stack>
      <Stack>
        <TextBox
          labelTitle="Admin Designation"
          variant="outlined"
          placeholder="Enter Admin Designation"
          fullWidth={true}
          focused={false}
          textboxHeight="34px"
          IconName={<PersonOutlinedIcon className="icons" />}
        />
      </Stack>
      <NumberBox
        labelTitle="Mobile Number"
        fullWidth={true}
        placeholder="Enter 10 digit number"
        textboxHeight="34px"
        IconName={<SmartphoneOutlinedIcon className="icons" />}
      />
      <Stack>
        <AutoCompleteTextbox
          IconName={<LocationOnOutlinedIcon className="icons" />}
          labelTitle="College Address"
          fullWidth={true}
          placeholder="Enter College Address"
          options={DistrictName}
        />
      </Stack>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          md={12}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <FormButton
            buttonTitle="Previous"
            variant="contained"
            size="medium"
            submit={() => handleForm("formOne")}
            startIcon={<ArrowCircleLeftOutlinedIcon />}
            disableElevation={true}
          />
          <FormButton
            buttonTitle="next"
            variant="contained"
            size="medium"
            submit={() => handleForm("formThree")}
            endIcon={<ArrowCircleRightOutlinedIcon />}
            disableElevation={true}
          />
        </Grid>
      </div>
    </>
  );
}
