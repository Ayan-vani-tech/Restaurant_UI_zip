import React, { useRef, useState } from "react";

import StatusBar from "../../components/StatusBar/StatusBar";
import QrCode from "../../components/QrCode/QrCode";

import "./Reviews.css";
import ReactDropdown from "react-dropdown";

const Reviews = () => {
    const items = [1, 2, 3, 4, 5];

    const popupRef = useRef();

    const openPopup = () => {
        popupRef.current.showModal();
    };

    const closeDialog = () => {
        popupRef.current.close();
    };

    const [isActive, setIsActive] = useState();

    const tournamentOptions = ["All", "Delete Requests"];

    return (
        <div className="Reviews">
            <StatusBar />

            <div className="main-container">
                <div className="restro-header">
                    <div className="restro-heading">Restaurant Reviews</div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <button className="reciew-btn">
                        Latest Restaurant Reviews
                    </button>
                    <div className="review-title">
                        <div className="sale">Filter by Requests</div>
                        <div className="drop">
                            <ReactDropdown
                                options={tournamentOptions}
                                className="dropdown"
                            />
                            <img
                                src={require("../../assets/icons/drop.png")}
                                className="drop-icon"
                            />
                        </div>
                        <div className="sale">Filter by Requests</div>
                        <div className="drop">
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
                </div>

                <div className="titel-header">
                    <div style={{ marginLeft: "40px" }}>
                        <text>Name</text>
                    </div>
                    <div style={{ marginLeft: "100px" }}>
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
                    <div style={{ marginLeft: "130px" }}>
                        <text>Review</text>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "300px",
                        }}
                    >
                        <p>Date</p>
                        <img
                            className="item-icon"
                            src={require("../../assets/icons/price.png")}
                        />
                    </div>
                    <div style={{ marginLeft: "90px" }}>
                        <text>Delete Comment</text>
                    </div>
                </div>

                {items.map((item) => (
                    <>
                        <div className="container-review">
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src={require("../../assets/icons/food.png")}
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        marginRight: "5px",
                                        borderRadius: "100%",
                                    }}
                                />
                                <div>
                                    <p className="pizza-name">Pizza House</p>
                                    <p className="pizza-view">
                                        (View All Reviews)
                                    </p>
                                </div>
                            </div>
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
                                <div className="pizza-name"> Ankit</div>
                            </div>
                            <div className="reting">4.2</div>
                            <div className="rew">
                                Love the food, will visit again for sure. Love
                                the food, will visit again.
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

export default Reviews;
