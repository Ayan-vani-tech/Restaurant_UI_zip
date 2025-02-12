import React from "react";
import "./CustomBtn.css";

const CustomBtn = ({ name, customicon, openPopup }) => {
    return (
        <button onClick={openPopup} className="custom-btn cursor_pointer">
            {name}
            {customicon && <img src={customicon} alt="add icon" />}
        </button>
    );
};

export default CustomBtn;
