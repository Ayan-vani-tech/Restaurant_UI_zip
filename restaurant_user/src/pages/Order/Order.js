import React, { useRef } from "react";
import ReactDropdown from "react-dropdown";

import StatusBar from "../../components/StatusBar/StatusBar";
import TableItem from "../../components/TableItem/TableItem";

import "./Order.css";

const Order = () => {
    const dialogRef = useRef(null);

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    const closeDialog = () => {
        dialogRef.current.close();
    };

    const tournamentOptions = ["In-Progress", "Served"];

    return (
        <div className="Order">
            <StatusBar />
            <div className="order-container">
                <div className="order">
                    <h1>Current Orders</h1>
                    <div className="drop">
                        <div className="status">Status</div>
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

                <div className="main-container-head">
                    <p style={{ marginLeft: "110px" }}>User</p>
                    <p style={{ marginLeft: "150px" }}>Table No</p>
                    <div className="head-titel">
                        <p style={{ marginLeft: "110px" }}>Current Order</p>
                        <img
                            src={require("../../assets/icons/price.png")}
                            className="price-icon"
                        />
                    </div>
                    <p style={{ marginLeft: "80px" }}>Order Quantity</p>
                    <div className="head-titel">
                        <p style={{ marginLeft: "80px" }}>Price</p>
                        <img
                            src={require("../../assets/icons/price.png")}
                            className="price-icon"
                        />
                    </div>
                    <div className="head-titel">
                        <p style={{ marginLeft: "140px" }}>Date</p>
                        <img
                            src={require("../../assets/icons/price.png")}
                            className="price-icon"
                        />
                    </div>
                    <p style={{ marginLeft: "190px" }}>Status</p>
                </div>

                <div>
                    {Array.from({ length: 7 }).map((item) => (
                        <div>
                            <div className="order-list">
                                <div className="user">
                                    <img
                                        src={require("../../assets/images/face.png")}
                                        className="face-icon"
                                    />
                                    <div>
                                        <div className="user-name">Avinash</div>
                                        <div className="user-ins">
                                            Instructions
                                        </div>
                                    </div>
                                </div>
                                <div className="user-name">2</div>
                                <div>
                                    <div
                                        className="food-order"
                                        style={{ color: "#ffad14" }}
                                    >
                                        Veg Hakka Noodles
                                    </div>
                                    <div className="food-order">
                                        Veg Manchurian Dry
                                    </div>
                                    <div className="food-order">
                                        Veg Manchurian Wet
                                    </div>
                                </div>
                                <div>
                                    <div className="food-order">1</div>
                                    <div className="food-order">3</div>
                                    <div className="food-order">1</div>
                                </div>
                                <div>
                                    <div className="order-price">₹ 316</div>
                                    <div className="order-price">₹ 316</div>
                                    <div className="order-price">₹ 316</div>
                                </div>
                                <div className="order-time">
                                    08-01-2024 <span>21:33</span>
                                </div>
                                <div
                                    className="order-save"
                                    onClick={openDialog}
                                >
                                    Order Placed
                                </div>
                            </div>
                            <div className="line-vertical"></div>
                        </div>
                    ))}
                    <TableItem closePopup={closeDialog} tbRef={dialogRef} />
                </div>
            </div>
        </div>
    );
};

export default Order;
