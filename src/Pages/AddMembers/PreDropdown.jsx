import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AlertBoxStyle } from "./style";
// import { SelectChangeEvent } from '@mui/material';

export default function PreDropdown() {
  //   const [age, setAge] = React.useState('');

  //   const handleChange = (event: SelectChangeEvent) => {
  //     setAge(event.target.value as string);
  //   };
  const DayBox = [
    1, 23, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  return (
    <div>
      <AlertBoxStyle>
        <label style={{ marginBottom: "10px" }} htmlFor="title">
          Member Since
        </label>
        <div className="box-wrapper-one">
          <Box sx={{ minWidth: 120 }}>
            <FormControl className="form">
              <InputLabel id="demo-simple-select-label">Day</InputLabel>
              <Select
                // labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={age}
                label="Age"
                variant="filled"
                style={{backgroundColor:"white"}}
                //   onChange={handleChange}
              >
                {DayBox.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl className="form">
              <InputLabel id="demo-simple-select-label">Month</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={age}
                label="Age"
                variant="filled"
                style={{backgroundColor:"white"}}
                //   onChange={handleChange}
              >
                {DayBox.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl className="form">
              <InputLabel id="demo-simple-select-label">year</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={age}
                variant="filled"
                label="Age"
                style={{backgroundColor:"white"}}
                //   onChange={handleChange}
              >
                {DayBox.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
        <label
          style={{ marginBottom: "10px", marginTop: "10px" }}
          htmlFor="title"
        >
          Expire Date
        </label>
        <div className="box-wrapper-one">
          <Box sx={{ minWidth: 120 }}>
            <FormControl className="form">
              <InputLabel id="demo-simple-select-label">Day</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={age}
                label="Age"
                variant="filled"
                //   onChange={handleChange}
              >
                {DayBox.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl className="form">
              <InputLabel id="demo-simple-select-label">Month</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={age}
                label="Age"
                variant="filled"
                //   onChange={handleChange}
              >
                {DayBox.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 120 }}>
            <FormControl className="form">
              <InputLabel id="demo-simple-select-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={age}
                label="Age"
                variant="filled"
                //   onChange={handleChange}
              >
                {DayBox.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box> 
        </div>
      </AlertBoxStyle>
    </div>
  );
}
