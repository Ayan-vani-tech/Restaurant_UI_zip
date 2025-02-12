import React, { useRef } from "react";
import "./ARMenu.css";

import arfood from "../../assets/icons/arfood.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons";

const ARMenu = ({ closePopup, dialogRef }) => {
    const addARMenuDialogRef = useRef(null);

    const closeAddARMenuDialog = () => {
        addARMenuDialogRef.current.close();
    };

    const items = [1, 2, 3, 4, 5];
    return (
        <div className="popup">
            <dialog ref={dialogRef} className="center-dialog">
                <div className="ARMenu">
                    <div className="ARMenu-head">
                        <div className="flex-r align-center">
                            <div>
                                <img
                                    src={arfood}
                                    alt="food"
                                    style={{ borderRadius: "100%" }}
                                />
                            </div>
                            <div className="ar-header">
                                <h3>Pizza House AR Menu </h3>
                                <div className="ar-ratings">
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        color="#FFAD14"
                                    />{" "}
                                    4.5(23)
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="loc-name">
                                <div className="name">
                                    <img
                                        src={require("../../assets/icons/location.png")}
                                        className="location-icon"
                                    />
                                    <div className="location">Pune</div>
                                </div>
                                <div onClick={closePopup}>
                                    <img
                                        src={require("../../assets/icons/charm_cross.png")}
                                        className="cross-icon"
                                    />
                                </div>
                            </div>
                            <div className="ar-down">
                                <div className="export-text">Export</div>
                                <img
                                    src={require("../../assets/icons/dow.png")}
                                    className="dow-icon"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "10px",
                        }}
                    >
                        <img
                            src={require("../../assets/icons/line.png")}
                            className="line"
                        />

                        <button className="custom-button">
                            <p>Add new item</p>
                            <img
                                src={require("../../assets/icons/addicon.png")}
                                className="add"
                            />
                        </button>
                    </div>

                    <div className="counter-header">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "400px",
                            }}
                        >
                            <div className="titel">
                                <p>Item</p>
                                <img
                                    src={require("../../assets/icons/item.png")}
                                    className="item-icon"
                                />
                            </div>
                            <div className="titel">
                                <p style={{ marginLeft: "60px" }}>Category</p>
                                <img
                                    src={require("../../assets/icons/item.png")}
                                    className="item-icon"
                                />
                            </div>
                            <div>
                                <p>View In AR</p>
                            </div>
                            <div className="titel">
                                <p>Price</p>
                                <img
                                    className="item-icon"
                                    src={require("../../assets/icons/price.png")}
                                />
                            </div>
                        </div>
                    </div>

                    {items.map((item) => (
                        <div key={item} className="child">
                            <div className="item-list">
                                <div>
                                    <p style={{ width: "160px" }}>
                                        Veg Hakka noodles{" "}
                                    </p>
                                </div>
                                <div>
                                    <p style={{ marginLeft: "20px" }}>
                                        Noodles
                                    </p>
                                </div>
                                <div>
                                    <img
                                        src={require("../../assets/icons/whitemobile.png")}
                                        style={{ marginLeft: "20px" }}
                                    />
                                </div>
                                <div>
                                    <p style={{ marginLeft: "20px" }}>₹ 316</p>
                                </div>
                                <div>
                                    <img
                                        src={require("../../assets/icons/veg.png")}
                                        className="veg-icon"
                                    />
                                </div>
                                <div>
                                    <p>Comments</p>
                                </div>
                            </div>

                            <div className="grey-gradient"></div>
                        </div>
                    ))}
                </div>
            </dialog>
        </div>
    );
};

export default ARMenu;
