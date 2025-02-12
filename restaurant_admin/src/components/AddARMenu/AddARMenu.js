import React, { useState } from "react";
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

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const [veg, setVeg] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="popup-add-2">
            <dialog ref={dialogRef} className="center-dialog-2">
                <div className="ARMenu-2">
                    <div className="ARMenu-head">
                        <div className="flex-r align-center">
                            <div className="ar-header">
                                <h3>Add AR Menu </h3>
                            </div>
                        </div>
                    </div>
                    <div className="half-line-gradient"></div>

                    <div className="input-container">
                        {/* First Div */}
                        <div className="first-div flex-r">
                            <div className="flex-c">
                                <label htmlFor="name" className="common-label">
                                    Item Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    className="input-design item-name"
                                />
                            </div>
                            <div className="flex-c">
                                <label htmlFor="price" className="common-label">
                                    Price
                                </label>
                                <div className="rupee-container">
                                    <img src={rupee} alt="my user" />
                                    <input
                                        type="text"
                                        id="price"
                                        className="input-design price"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Second Div */}
                        <div className="second-div flex-r">
                            <div className="flex-c">
                                <label
                                    htmlFor="address"
                                    className="common-label"
                                >
                                    Upload Display Image
                                </label>
                                <div className="download-container">
                                    <input
                                        type="text"
                                        id="address"
                                        className="input-design upload"
                                    />
                                    <img src={download} alt="my user" />
                                </div>
                            </div>
                            <div className="flex-c">
                                <label
                                    htmlFor="pincode"
                                    className="common-label"
                                >
                                    Upload AR Model File
                                </label>
                                <div className="download-container">
                                    <input className="input-design upload" />
                                    <img src={download} alt="my user" />
                                </div>
                            </div>
                        </div>

                        <div className="drop">
                            <div className="flex-c">
                                <label htmlFor="name" className="common-label">
                                    Comments
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="name-input input-design"
                                />
                            </div>
                            <div className="drop-food">
                                <label htmlFor="name" className="common-label">
                                    Add Category
                                </label>
                                <div className="drop">
                                    <ReactDropdown
                                        options={tournamentOptions}
                                        className="dropdown"
                                    />
                                    <img
                                        src={require("../../assets/icons/drop.png")}
                                        className="down-icon"
                                    />
                                </div>
                            </div>

                            <div className="food-veg">
                                <label htmlFor="name" className="common-label">
                                    Veg/Non-Veg
                                </label>
                                <div
                                    className="teamdropdown"
                                    onClick={toggleDropdown}
                                >
                                    {veg === 0 ? (
                                        <div className="veg-drop veg2">
                                            <img
                                                src={require("../../assets/icons/veg.png")}
                                                className="veg"
                                            />
                                            <div className="veg-text">Veg</div>
                                        </div>
                                    ) : veg === 1 ? (
                                        <div className="veg-drop veg2">
                                            <img
                                                src={require("../../assets/icons/nonVeg.png")}
                                                className="veg"
                                            />
                                            <div className="veg-text">
                                                Non-Veg
                                            </div>
                                        </div>
                                    ) : (
                                        <img
                                            src={require("../../assets/icons/drop.png")}
                                            className="icon"
                                        />
                                    )}
                                </div>
                                {isOpen && (
                                    <div className="down">
                                        <div
                                            className="veg-drop non-veg"
                                            onClick={() => setVeg(0)}
                                        >
                                            <img
                                                src={require("../../assets/icons/veg.png")}
                                                className="veg"
                                            />
                                            <div className="veg-text">Veg</div>
                                        </div>
                                        <div
                                            className="veg-drop"
                                            onClick={() => setVeg(1)}
                                        >
                                            <img
                                                src={require("../../assets/icons/nonVeg.png")}
                                                className="veg"
                                            />
                                            <div className="veg-text">
                                                Non-Veg
                                            </div>
                                        </div>
                                    </div>
                                )}
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
                        <button
                            className="btn"
                            onClick={() => navigate("/Admin")}
                        >
                            Add Another Item
                        </button>
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
