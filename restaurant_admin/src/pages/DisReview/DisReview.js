import React, { useRef, useState } from "react";

import StatusBar from "../../components/StatusBar/StatusBar";
import QrCode from "../../components/QrCode/QrCode";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./DisReview.css";

const DisReview = () => {
    const items = [1, 2, 3, 4, 5];

    const popupRef = useRef();

    const openPopup = () => {
        popupRef.current.showModal();
    };

    const closeDialog = () => {
        popupRef.current.close();
    };

    const [isActive, setIsActive] = useState();

    return (
        <div className="Home">
            <StatusBar />

            <div className="main-container">
                <div className="dis-header">
                    <img
                        src={require("../../assets/icons/food.png")}
                        className="food"
                    />
                    <div className="restro-heading">Pizza House</div>
                    <div className="dis-ratings">
                        <FontAwesomeIcon icon={faStar} color="#FFAD14" />{" "}
                        4.5(23)
                    </div>
                </div>

                <div className="titel-header">
                    <div style={{ marginLeft: "50px" }}>
                        <text>Name</text>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "60px",
                        }}
                    >
                        <p>Rating</p>
                        <img
                            className="item-icon"
                            src={require("../../assets/icons/price.png")}
                        />
                    </div>
                    <div style={{ marginLeft: "230px" }}>
                        <text>Review</text>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "390px",
                        }}
                    >
                        <p>Date</p>
                        <img
                            className="item-icon"
                            src={require("../../assets/icons/price.png")}
                        />
                    </div>
                    <div style={{ marginLeft: "100px" }}>
                        <text>Delete Comment</text>
                    </div>
                </div>

                {items.map((item) => (
                    <>
                        <div className="container-review">
                            <div
                                style={{
                                    alignItems: "center",
                                    display: "flex",
                                }}
                            >
                                <img
                                    src={require("../../assets/images/face.png")}
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        marginRight: "5px",
                                        borderRadius: "100%",
                                    }}
                                />
                                <div className="pizza-name"> Avinash</div>
                            </div>
                            <div className="reting">4.2</div>
                            <div className="rew-text">
                                Love the food, will visit again for sure. Love
                                the food, will visit again for sure. Love the
                                food, Love the food, will visit again for sure,
                                will visit again for sure.
                            </div>
                            <div className="time">
                                <pre>
                                    08-01-2024{" "}
                                    <span className="text-color">21:33</span>
                                </pre>
                            </div>
                            <div
                                className="sent-req"
                                style={{
                                    borderBottom: isActive
                                        ? "1px solid #FFAD14"
                                        : "none",
                                    color: isActive ? "#FFAD14" : "#fff",
                                }}
                                onClick={() => setIsActive(!isActive)}
                            >
                                Send Request
                            </div>
                        </div>
                        <div className="line-vertical"></div>
                        <QrCode closePopup={closeDialog} qrRef={popupRef} />
                    </>
                ))}
            </div>
        </div>
    );
};

export default DisReview;
