import React from "react";

import "./QrCode.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const QrCode = ({ closePopup, qrRef }) => {
    console.log("🚀 ~ QrCode ~ ref:", qrRef);
    const items = [1, 2, 3, 4, 5, 6];
    return (
        <div className="popup">
            <dialog ref={qrRef} className="qr-box">
                <div className="Qr-text">
                    <div className="user-name">
                        <h3>Current QR Set</h3>
                    </div>
                    <div onClick={closePopup}>
                        <img
                            src={require("../../assets/icons/charm_cross.png")}
                            className="cross-icon"
                        />
                    </div>
                </div>
                <div>
                    <img
                        src={require("../../assets/icons/line.png")}
                        className="icon-line"
                    />
                </div>

                <div className="qrCodes">
                    {items.map((item) => (
                        <>
                            <div className="Qr-code">
                                <h4>Table No 1</h4>
                                <div className="QR">
                                    <img
                                        src="https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=hello"
                                        className="QR-icon"
                                    />
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </dialog>
        </div>
    );
};

export default QrCode;
