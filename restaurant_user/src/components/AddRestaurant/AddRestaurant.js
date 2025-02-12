import React, { useRef } from "react";
import "./AddRestaurant.css";
// import arfood from "../../assets/icons/arfood.png";
// import mob from "../../assets/icons/whitemobile.png";
// import page from "../../assets/images/number.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import addicon from "../../assets/icons/addicon.png";
import CustomBtn from "../CustomBtn/CustomBtn";
import AddARMenu from "../AddARMenu/AddARMenu";

const AddRestaurant = ({ closePopup, dialogRef }) => {
    // const [showAddMenuPopup, setShowAddMenuPopup] = useState(false);
    const addARMenuDialogRef = useRef(null);

    const openAddARMenuDialog = () => {
        addARMenuDialogRef.current.showModal();
    };

    const closeAddARMenuDialog = () => {
        addARMenuDialogRef.current.close();
    };

    const handleSubmit = () => {
        closePopup();
        openAddARMenuDialog();
    };
    return (
        <div className="popup">
            <dialog ref={dialogRef} className="center-dialog">
                <div className="ARMenu">
                    <div className="ARMenu-head">
                        <div className="flex-r align-center">
                            <div className="ar-header">
                                <h3>Pizza House AR Menu </h3>
                            </div>
                        </div>

                        <div className="flex-r align-center">
                            <div
                                onClick={closePopup}
                                className="cursor_pointer"
                            >
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    color="#FFAD14"
                                    size="2x"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="half-line-gradient"></div>

                    <div className="input-container">
                        {/* First Div */}
                        <div className="first-div flex-r">
                            <div className="flex-c">
                                <label htmlFor="name" className="common-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    className="name-input input-design"
                                />
                            </div>
                            <div className="flex-c">
                                <label htmlFor="email" className="common-label">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Email"
                                    className="email-input input-design"
                                />
                            </div>
                            <div className="flex-c">
                                <label
                                    htmlFor="number"
                                    className="common-label"
                                >
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    id="number"
                                    placeholder="Number"
                                    className="number-input input-design"
                                />
                            </div>
                        </div>

                        {/* Second Div */}
                        <div className="second-div flex-r">
                            <div className="flex-c">
                                <label
                                    htmlFor="address"
                                    className="common-label"
                                >
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    placeholder="Address"
                                    className="address-input input-design"
                                />
                            </div>
                            <div className="flex-c">
                                <label
                                    htmlFor="pincode"
                                    className="common-label"
                                >
                                    Pincode
                                </label>
                                <input
                                    type="number"
                                    id="pincode"
                                    placeholder="Pincode"
                                    className="pincode-input input-design"
                                />
                            </div>
                        </div>
                        <div className="flex-c">
                            <label htmlFor="name" className="common-label">
                                GSTIN
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Eg. GFt3562GHSY"
                                className="name-input input-design"
                            />
                        </div>
                    </div>

                    <div className="pagenation-num">
                        <CustomBtn
                            name="Proceed to Add Menu"
                            customicon={addicon}
                            openPopup={handleSubmit}
                        />
                    </div>
                </div>
            </dialog>

            <AddARMenu
                closePopup={closeAddARMenuDialog}
                dialogRef={addARMenuDialogRef}
            />
        </div>
    );
};

export default AddRestaurant;
