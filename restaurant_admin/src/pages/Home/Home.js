import React, { useRef } from "react";
import "./Home.css";
import page from "../../assets/images/number.png";
import CustomBtn from "../../components/CustomBtn/CustomBtn";

import ViewOrder from "../../components/ViewOrder/ViewOrder";
import StatusBar from "../../components/StatusBar/StatusBar";

const Home = () => {
    const dialogRef = useRef(null);

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    const closeDialog = () => {
        dialogRef.current.close();
    };

    const items = [1, 2, 3, 4, 5];

    return (
        <div className="Home">
            <StatusBar />
            <div className="main-container">
                <h2>👋 Welcome back, Admin</h2>
                <h1>User List</h1>
                <div className="main-container-head">
                    <p className="main-container-heading flex-1 text-c">Name</p>
                    <p className="main-container-heading flex-1 text-c">
                        Mobile
                    </p>
                    <p className="main-container-heading flex-1 text-c">
                        Email
                    </p>
                    <p className="main-container-heading flex-1 text-c">
                        Location
                    </p>
                    <p className="main-container-heading flex-1 text-c"></p>
                </div>
                {items.map((item) => (
                    <>
                        <div className="details-container">
                            <div className="user-details flex-1">
                                <div
                                    style={{
                                        alignItems: "center",
                                        display: "flex",
                                        marginLeft: "35%",
                                    }}
                                >
                                    <img
                                        alt="img"
                                        src={require("../../assets/images/face.png")}
                                        width="40"
                                        style={{ borderRadius: "100%" }}
                                    />
                                    <div style={{ marginLeft: "5px" }}>
                                        {" "}
                                        Ankit
                                    </div>
                                </div>
                            </div>
                            <a className="user-details flex-1">
                                +91 8653255256
                            </a>
                            <div className="user-details flex-1">
                                test@gamil.com
                            </div>
                            <div className="user-details flex-1">Pune</div>
                            <div className="user-details flex-1">
                                <CustomBtn
                                    name="View Order History"
                                    openPopup={openDialog}
                                />
                                {/* <CustomPopup
                                    closePopup={closeDialog}
                                    dialogRef={dialogRef}
                                    customComponent={ViewOrder}
                                /> */}
                                <ViewOrder
                                    closePopup={closeDialog}
                                    dialogRef={dialogRef}
                                />
                            </div>
                        </div>
                        <div className="line-vertical"></div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Home;
