import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

function CheckboxValidation({ selectBox }) {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const [selectedCount, setSelectedCount] = useState(0);

  const handleCheckboxChange = (checkboxName) => {
    const updatedCheckboxes = {
      ...checkboxes,
      [checkboxName]: !checkboxes[checkboxName],
    };
    setCheckboxes(updatedCheckboxes);

    const newSelectedCount = updatedCheckboxes[checkboxName]
      ? selectedCount + 1
      : selectedCount - 1;
    setSelectedCount(newSelectedCount);
  };

  const isCheckboxDisabled = selectedCount >= selectBox;

  return (
    <div>
      <form>
        <label>
          <Checkbox
            className="check_box"
            checked={checkboxes.checkbox1}
            onChange={() => handleCheckboxChange("checkbox1")}
            disabled={isCheckboxDisabled && !checkboxes.checkbox1}
          />
          Python
        </label>
        <br />
        <label>
          <Checkbox
            className="check_box"
            checked={checkboxes.checkbox2}
            onChange={() => handleCheckboxChange("checkbox2")}
            disabled={isCheckboxDisabled && !checkboxes.checkbox2}
          />
          C
        </label>
        <br />
        <label>
          <Checkbox
            className="check_box"
            checked={checkboxes.checkbox3}
            onChange={() => handleCheckboxChange("checkbox3")}
            disabled={isCheckboxDisabled && !checkboxes.checkbox3}
          />
          C++
        </label>
        <br />
        <label>
          <Checkbox
            className="check_box"
            checked={checkboxes.checkbox4}
            onChange={() => handleCheckboxChange("checkbox4")}
            disabled={isCheckboxDisabled && !checkboxes.checkbox4}
          />
          Java
        </label>
        <br />
      </form>
    </div>
  );
}

export default CheckboxValidation;
