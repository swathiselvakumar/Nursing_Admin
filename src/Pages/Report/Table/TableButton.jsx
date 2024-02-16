import { DropDownWrapper } from "./style.js";

function TableButton({ name, name2 }) {
  return (
    <div>
      <DropDownWrapper>
        <div className="btn-wrapper">
          <div className="btn-1">
            <button className="lg-btn">{name}</button>
            <button className="lg-btn-2">{name2}</button>
          </div>
        </div>
      </DropDownWrapper>
    </div>
  );
}

export default TableButton;
