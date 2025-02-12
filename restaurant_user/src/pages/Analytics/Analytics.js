import React, { useRef, useState } from "react";
import ReactDropdown from "react-dropdown";

import StatusBar from "../../components/StatusBar/StatusBar";

import "./Analytics.css";

const Analytics = () => {
    const popupRef = useRef();

    const openPopup = () => {
        popupRef.current.showModal();
    };

    const closeDialog = () => {
        popupRef.current.close();
    };

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabPress = (index) => {
        setTabIndex(index);
    };

    const tournamentOptions = ["All", "Delete Requests"];

    return (
        <div className="Analytics">
            <StatusBar />

            <div className="analytics-container">
                <div className="analytics-title">
                    <h3>👋 Welcome back, Admin</h3>
                    <h2>Analytics</h2>
                    <div className="tab-con">
                        <div>
                            <button
                                className={`${
                                    tabIndex === 0 ? "tabActive" : ""
                                }`}
                                onClick={() => handleTabPress(0)}
                            >
                                <div>Most Ordered Items</div>
                            </button>

                            <button
                                className={`${
                                    tabIndex === 1 ? "tabActive" : ""
                                }`}
                                onClick={() => handleTabPress(1)}
                            >
                                <div>Most Viewed Item</div>
                            </button>
                        </div>

                        <div className="analytics-drop">
                            <div className="sale">View Sales From</div>
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
                </div>

                <div className="main-container-head">
                    <div className="head-titel">
                        <p style={{ marginLeft: "130px" }}>Item</p>
                        <img
                            src={require("../../assets/icons/item.png")}
                            className="price-icon"
                        />
                    </div>
                    <div className="head-titel">
                        <p style={{ marginLeft: "160px" }}>Total Orders</p>
                        <img
                            src={require("../../assets/icons/price.png")}
                            className="price-icon"
                        />
                    </div>
                    <div className="head-titel">
                        <p style={{ marginLeft: "50px" }}>Times Viewed</p>
                        <img
                            src={require("../../assets/icons/price.png")}
                            className="price-icon"
                        />
                    </div>
                    <div className="head-titel">
                        <p style={{ marginLeft: "60px" }}>Price</p>
                        <img
                            src={require("../../assets/icons/price.png")}
                            className="price-icon"
                        />
                    </div>
                    <div className="head-titel">
                        <p style={{ marginLeft: "90px" }}>Category</p>
                        <img
                            src={require("../../assets/icons/item.png")}
                            className="price-icon"
                        />
                    </div>
                    <div className="head-titel">
                        <p style={{ marginLeft: "90px" }}>Iteam Rating</p>
                        <img
                            src={require("../../assets/icons/price.png")}
                            className="price-icon"
                        />
                    </div>
                </div>

                {Array.from({ length: 6 }).map((item) => (
                    <div>
                        <div className="order-list">
                            <div className="user">
                                <img
                                    src={require("../../assets/icons/food.png")}
                                    className="food-icon"
                                />
                                <div className="user-name">
                                    Veg Hakka Noodles
                                </div>
                            </div>

                            <div className="user-name">458</div>

                            <div className="user-name">458</div>

                            <div className="order-price">₹ 316</div>

                            <div className="order-category">Noodles</div>

                            <div className="rating">
                                <img
                                    src={require("../../assets/icons/start.png")}
                                    className="start-icon"
                                />
                                <div>4.5 (23)</div>
                            </div>
                        </div>
                        <div className="line-vertical"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Analytics;
