import React from "react";
import "./TableItem.css";

const TableItem = ({ closePopup, tbRef }) => {
    console.log("🚀 ~ ViewOrder ~ tbRef:", tbRef);

    return (
        <div className="tableItem">
            <dialog ref={tbRef} className="center-dialog">
                <div className="user-num">
                    <div className="user">
                        <img
                            src={require("../../assets/images/face.png")}
                            className="face-icon"
                        />
                        <h2>Avinash</h2>
                        <h2>| Table No 3</h2>
                    </div>
                    <div onClick={closePopup}>
                        <img
                            src={require("../../assets/icons/charm_cross.png")}
                            className="cross"
                        />
                    </div>
                </div>

                <div>
                    <img
                        src={require("../../assets/icons/line.png")}
                        className="line-icon"
                    />
                </div>

                <div className="top-header">
                    <div className="table-item">
                        <p style={{ marginLeft: "40px" }}>Item</p>
                        <img
                            src={require("../../assets/icons/item.png")}
                            className="item-icon"
                        />
                    </div>
                    <p style={{ marginLeft: "320px" }}>Price</p>
                    <p style={{ marginLeft: "80px" }}>Quantity</p>
                </div>

                <div>
                    {Array.from({ length: 5 }).map((item) => (
                        <div>
                            <div className="table-list">
                                <div className="table-food">
                                    Veg Hakka Noodles
                                </div>
                                <div className="table-food">Instructionsx</div>
                                <div className="table-food">₹ 316</div>
                                <div className="table-food">1</div>
                            </div>
                            <div className="grey-gradient"></div>
                        </div>
                    ))}
                </div>
            </dialog>
        </div>
    );
};

export default TableItem;
