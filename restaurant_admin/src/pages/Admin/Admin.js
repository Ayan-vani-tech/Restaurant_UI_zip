import React, { useRef } from "react";
import StatusBar from "../../components/StatusBar/StatusBar";
import "./Admin.css";
import QrCode from "../../components/QrCode/QrCode";

const Admin = () => {
    const items = [1, 2, 3, 4, 5];

    const popupRef = useRef();

    const openPopup = () => {
        popupRef.current.showModal();
    };

    const closeDialog = () => {
        popupRef.current.close();
    };

    return (
        <div className="Home">
            <StatusBar />

            <div className="main-container">
                <div className="restro-header">
                    <div className="restro-heading">Admin Responsibilities</div>
                </div>

                <div className="titel-header">
                    <div style={{ marginLeft: "70px" }}>
                        <text>Restaurant</text>
                    </div>
                    <div style={{ marginLeft: "100px" }}>
                        <text>QR Set</text>
                    </div>
                    <div style={{ marginLeft: "120px" }}>
                        <text>Account Status</text>
                    </div>
                </div>

                {items.map((item) => (
                    <>
                        <div className="container">
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
                            <div
                                style={{
                                    marginLeft: "100px",
                                    cursor: "pointer",
                                }}
                                onClick={openPopup}
                            >
                                <p className="pizza-name">
                                    View Current QR Set
                                </p>
                            </div>
                            <div style={{ marginLeft: "170px" }}>
                                <p className="pizza-name">Deactivate</p>
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

export default Admin;
