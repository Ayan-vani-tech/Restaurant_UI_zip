import React from "react";

import "./QrCode.css";

const QrCode = ({ closePopup, codeRef }) => {
    console.log("🚀 ~ QrCode ~ ref:", codeRef);

    return (
        <div className="QrCode">
            <dialog ref={codeRef} className="qr-box">
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
                    {Array.from({ length: 6 }).map((item) => (
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
                    <div className="btn">
                        <button className="down">Download</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default QrCode;
