import React, { useRef } from "react";
import "./Restaurants.css";

import addicon from "../../assets/icons/addicon.png";

import CustomBtn from "../../components/CustomBtn/CustomBtn";
import AddRestaurant from "../../components/AddRestaurant/AddRestaurant";
import ARMenu from "../../components/ARMenu/ARMenu";
import StatusBar from "../../components/StatusBar/StatusBar";

const Restaurants = () => {
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

    const items = [1, 2, 3, 4, 5];
    return (
        <div className="Home">
            <StatusBar />
            <div className="main-container ">
                <div className="restro-header">
                    <div className="restro-heading">Registered Restaurants</div>
                    <div>
                        <CustomBtn
                            name="Add New Restaurant"
                            customicon={addicon}
                            openPopup={openAddRestaurantDialog}
                        />
                        <AddRestaurant
                            closePopup={closeAddRestaurantDialog}
                            dialogRef={addRestaurantDialogRef}
                        />
                    </div>
                </div>

                <div className="titel-header">
                    <div style={{ marginLeft: "70px" }}>
                        <text>Name</text>
                    </div>
                    <div style={{ marginLeft: "100px" }}>
                        <text>Mobile</text>
                    </div>
                    <div style={{ marginLeft: "120px" }}>
                        <text>Email</text>
                    </div>
                    <div style={{ marginLeft: "100px" }}>
                        <text>Location</text>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                        <text>Account Status</text>
                    </div>
                </div>

                {items.map((item) => (
                    <>
                        <div className="details-container">
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
                                <p className="pizza-name">Pizza House</p>
                            </div>
                            <div>
                                <p className="pizza-name">+91 12345 67890</p>
                            </div>
                            <div>
                                <p className="pizza-name">test@testmail.com</p>
                            </div>
                            <div>
                                <p className="pizza-name">Pune</p>
                            </div>
                            <div className="user-details">
                                <CustomBtn
                                    name="View AR Menu"
                                    openPopup={openViewARMenuDialog}
                                />
                                <ARMenu
                                    closePopup={closeViewARMenuDialog}
                                    dialogRef={viewARMenuDialogRef}
                                />
                            </div>
                            <div>
                                <p className="pizza-name">Deactivate</p>
                            </div>
                        </div>
                        <div className="line-vertical"></div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Restaurants;
