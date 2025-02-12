import React from "react";
import "./ViewOrder.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ViewOrder = ({ closePopup, dialogRef }) => {
    const items = [1, 2, 3, 4, 5];
    return (
        <div className="popup">
            <dialog ref={dialogRef} className="center-dialog">
                <div className="ARMenu">
                    <div className="ARMenu-head">
                        <div className="flex-r align-center">
                            <div>
                                <img
                                    src={require("../../assets/images/face.png")}
                                    className="face-icon"
                                />
                            </div>
                            <div className="user-name">
                                <h3>Aniket </h3>
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
                        </div>
                    </div>

                    <div className="dow">
                        <img
                            src={require("../../assets/icons/line.png")}
                            className="line-icon"
                        />
                        <div className="export">Export</div>
                        <img
                            src={require("../../assets/icons/dow.png")}
                            className="dow-icon"
                        />
                    </div>

                    <div className="top-header">
                        <p>Restaurant </p>
                        <p className="item">Order I tem</p>
                        <p className="item">Quantity</p>
                        <p className="date">Price</p>
                        <p className="date">Date</p>
                    </div>
                    {items.map((item) => (
                        <div key={item} className="child">
                            <div className="list">
                                <div className="flex-r ">
                                    <img
                                        src={require("../../assets/icons/food.png")}
                                        width="45"
                                        height="45"
                                    />
                                    <div>
                                        <p className="food-name">Pizza House</p>
                                        <div className="ratings">
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                color="#FFAD14"
                                            />{" "}
                                            4.5(23)
                                        </div>
                                    </div>
                                </div>
                                <div className="food">
                                    <p className="text-color">
                                        Veg Hakka Noodles{" "}
                                    </p>

                                    <p>Veg Hakka Noodles </p>

                                    <p>Veg Hakka Noodles </p>
                                </div>
                                <div className="number">
                                    <p>1</p>
                                    <p>1</p>
                                    <p>3</p>
                                </div>
                                <div className="number text-color">
                                    <pre>₹ 316</pre>
                                    <pre>₹ 316</pre>
                                    <pre>₹ 316</pre>
                                </div>
                                <div className="time">
                                    <pre>
                                        08-01-2024{" "}
                                        <span className="text-color">
                                            21:33
                                        </span>
                                    </pre>
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

export default ViewOrder;
