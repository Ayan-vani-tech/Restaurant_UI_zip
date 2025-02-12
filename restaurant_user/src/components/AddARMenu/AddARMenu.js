import React from "react";
import "./AddARMenu.css";
import rupee from "../../assets/icons/rupee.png";
import download from "../../assets/icons/download_up.png";
import ReactDropdown from "react-dropdown";
import { useNavigate } from "react-router-dom";

const AddARMenu = ({ closePopup, dialogRef }) => {
    const handleSubmit = () => {
        closePopup();
    };

    const tournamentOptions = ["Pasta", "Pizza", "Noodles", "Bread"];
    const veg = ["Veg", "Non-Veg"];

    const navigate = useNavigate();

    return (
        <div className="ArMenu">
            <dialog ref={dialogRef} className="center-dialog-2">
                <div>
                    <div className="ar-header">
                        <h3>Add AR Menu </h3>
                    </div>

                    <div>
                        <img
                            src={require("../../assets/icons/line.png")}
                            className="line-icon"
                        />
                    </div>

                    <div className="input-container">
                        {/* First Div */}
                        <div className="first-div">
                            <div>
                                <label htmlFor="price" className="common-label">
                                    Price
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        className="input-name"
                                        placeholder="Eg. Veg Extravaganza Pizza"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="price" className="common-label">
                                    Price
                                </label>
                                <div className="rupee-container">
                                    <img
                                        src={require("../../assets/icons/rupee.png")}
                                        className="rupee-icon"
                                    />
                                    <input
                                        type="text"
                                        className="input-price"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Second Div */}
                        <div className="first-div">
                            <div>
                                <label htmlFor="price" className="common-label">
                                    Price
                                </label>
                                <div className="rupee-container">
                                    <img
                                        src={require("../../assets/icons/download_up.png")}
                                        className="dow-icon"
                                    />
                                    <input
                                        type="text"
                                        className="input-name upload"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="price" className="common-label">
                                    Price
                                </label>
                                <div className="rupee-container">
                                    <img
                                        src={require("../../assets/icons/download_up.png")}
                                        className="dow-icon"
                                    />
                                    <input
                                        type="text"
                                        className="input-name upload"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="first-div">
                            <div style={{ marginLeft: "30px" }}>
                                <label htmlFor="name" className="common-label">
                                    Comments
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="comment-input"
                                />
                            </div>
                            <div className="drop-food">
                                <label htmlFor="name" className="common-label">
                                    Add Category
                                </label>
                                <div>
                                    <ReactDropdown
                                        options={tournamentOptions}
                                        className="dropdown"
                                    />
                                    <img
                                        src={require("../../assets/icons/drop.png")}
                                        className="drop-icon"
                                    />
                                </div>
                            </div>
                            <div className="food-veg">
                                <label htmlFor="name" className="common-label">
                                    Veg/Non-Veg
                                </label>
                                <div>
                                    <ReactDropdown
                                        options={veg}
                                        className="teamdropdown"
                                    />
                                    <img
                                        src={require("../../assets/icons/drop.png")}
                                        className="icon"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-grad">
                        <div class="gradient-1"></div>
                        <p className="common-label-or">OR</p>
                        <div class="gradient-2"></div>
                    </div>

                    <div className="upload-files">
                        <div>
                            Upload File
                            <img
                                src={require("../../assets/icons/download_up.png")}
                            />
                        </div>
                        <div>(Only xlxs, csv format allowed)</div>
                    </div>
                    <div className="button">
                        <button className="btn">Add Another Item</button>
                        <button onClick={handleSubmit} className="finish">
                            Finish
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AddARMenu;
