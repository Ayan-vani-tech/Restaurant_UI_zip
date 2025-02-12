import React, { useRef, useState } from "react";
import ReactDropdown from "react-dropdown";

import StatusBar from "../../components/StatusBar/StatusBar";

import "./Reviews.css";

const Reviews = () => {
    // const popupRef = useRef();

    // const openPopup = () => {
    //     popupRef.current.showModal();
    // };

    // const closeDialog = () => {
    //     popupRef.current.close();
    // };

    const [isActive, setIsActive] = useState();

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabPress = (index) => {
        setTabIndex(index);
    };

    const tournamentOptions = ["All", "Delete Requests"];
    const veg = ["Veg", "Non-Veg"];

    return (
        <div className="Reviews">
            <StatusBar />

            <div className="reviews-container">
                <div className="review-title">
                    <img
                        src={require("../../assets/icons/food.png")}
                        className="food-icon"
                    />
                    <h2>Pizza House</h2>
                    <div className="rating">
                        <img
                            src={require("../../assets/icons/start.png")}
                            className="start-icon"
                        />
                        <div>4.5 (23)</div>
                    </div>
                </div>

                <div className="tab-con">
                    <div>
                        <button
                            className={`${tabIndex === 0 ? "tabActive" : ""}`}
                            onClick={() => handleTabPress(0)}
                        >
                            <div>Latest Restaurant Reviews</div>
                        </button>

                        <button
                            className={` ${tabIndex === 1 ? "tabActive" : ""}`}
                            onClick={() => handleTabPress(1)}
                        >
                            <div>Latest Item Reviews</div>
                        </button>
                    </div>

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

                <div className="main-container-head">
                    <p style={{ marginLeft: "150px" }}>Name</p>
                    <p style={{ marginLeft: "220px" }}>Name</p>
                    <div className="head-titel">
                        <p style={{ marginLeft: "90px" }}>Rating</p>
                        <img
                            src={require("../../assets/icons/price.png")}
                            className="price-icon"
                        />
                    </div>
                    <p style={{ marginLeft: "150px" }}>Review</p>

                    <div className="head-titel">
                        <p style={{ marginLeft: "280px" }}>Date</p>
                        <img
                            src={require("../../assets/icons/price.png")}
                            className="price-icon"
                        />
                    </div>
                    <p style={{ marginLeft: "120px" }}>Delete Comment</p>
                </div>

                {Array.from({ length: 6 }).map((item) => (
                    <div>
                        <div className="container-review">
                            <div className="food-name">
                                <img
                                    src={require("../../assets/icons/food.png")}
                                    className="food-img"
                                />
                                <div>
                                    <h2>Veg Extravaganza Pizza</h2>
                                    <h3>(View All Reviews)</h3>
                                </div>
                            </div>
                            <div className="food-name">
                                <img
                                    src={require("../../assets/images/face.png")}
                                    className="face-img"
                                />
                                <h2>Avinash</h2>
                            </div>
                            <div className="review-reting">4.2</div>
                            <div className="reviews">
                                Love the food, will visit again for sure. Love
                                the food, will visit again.
                            </div>
                            <div className="review-time">
                                08-01-2024 <span>21:33</span>
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
