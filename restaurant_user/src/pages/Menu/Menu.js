import React, { useRef } from "react";

import "./Menu.css";

import addicon from "../../assets/icons/addicon.png";

import StatusBar from "../../components/StatusBar/StatusBar";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import AddARMenu from "../../components/AddARMenu/AddARMenu";

const Menu = () => {
    const addRestaurantDialogRef = useRef(null);
    const viewARMenuDialogRef = useRef(null);

    const openAddRestaurantDialog = () => {
        addRestaurantDialogRef.current.showModal();
    };

    const closeAddRestaurantDialog = () => {
        addRestaurantDialogRef.current.close();
    };

    const openViewARMenuDialog = () => {
        viewARMenuDialogRef.current.showModal();
    };

    const closeViewARMenuDialog = () => {
        viewARMenuDialogRef.current.close();
    };

    return (
        <div className="Menu">
            <StatusBar />

            <div className="menu-container">
                <div className="menu-titel">
                    <h2>Menu</h2>
                    <div>
                        <CustomBtn
                            name="Add New Item "
                            customicon={addicon}
                            openPopup={openAddRestaurantDialog}
                        />
                        <AddARMenu
                            closePopup={closeAddRestaurantDialog}
                            dialogRef={addRestaurantDialogRef}
                        />
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
                    <p style={{ marginLeft: "220px" }}>Stock (Select 1)</p>
                    <p style={{ marginLeft: "100px" }}>View 3D Model</p>
                    <div className="head-titel">
                        <p style={{ marginLeft: "190px" }}>Price</p>
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
                            <div className="user-name">
                                In-Stock / <span>Out of Stock</span>
                            </div>
                            <div>
                                <img
                                    src={require("../../assets/icons/whitemobile.png")}
                                />
                            </div>
                            <div>
                                <img
                                    src={require("../../assets/icons/veg.png")}
                                    className="veg-icon"
                                />
                            </div>

                            <div>
                                <div className="order-price">₹ 316</div>
                            </div>
                            <div>
                                <div className="order-category">Noodles</div>
                            </div>
                            <div className="order-category">Comments</div>
                        </div>
                        <div className="line-vertical"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
