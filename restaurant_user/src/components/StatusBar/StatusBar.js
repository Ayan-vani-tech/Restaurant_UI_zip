import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./StatusBar.css";

import user_logo from "../../assets/icons/user_logo.png";
import logout from "../../assets/icons/logout.png";
import change from "../../assets/icons/change.png";
import ReactSwitch from "react-switch";
import QrCode from "../QrCode/QrCode";
import ReactDropdown from "react-dropdown";

const StatusBar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isOpen2, setOpen2] = useState(false);
    const [isOpen3, setOpen3] = useState(false);
    const [isOpen4, setOpen4] = useState(false);
    const [isOpen5, setOpen5] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const location = useLocation();

    const dialogRef = useRef(null);

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    const closeDialog = () => {
        dialogRef.current.close();
    };

    useEffect(() => {
        // Update the activeLink state based on the current route
        const pathname = location.pathname;
        console.log(pathname);
        setActiveLink(pathname);
    }, [location]);

    const [checked, setChecked] = useState(false);

    const handleChange = (isChecked) => {
        setChecked(isChecked);
    };

    return (
        <div className="sidebar">
            <div>
                <Link to="/Analytics">
                    <img
                        alt="my_user"
                        src={require("../../assets/icons/Frame.png")}
                        className={
                            activeLink === "/Analytics"
                                ? "active_bgc Frame icon-sidebar"
                                : "Frame icon-sidebar"
                        }
                    />
                </Link>
                <Link to="/DisReview">
                    <img
                        alt="my_user"
                        src={require("../../assets/icons/undefined.png")}
                        className={
                            activeLink === "/DisReview"
                                ? "active_bgc graph icon-sidebar"
                                : "graph icon-sidebar"
                        }
                    />
                </Link>
                <Link to="/Menu">
                    <img
                        alt="my_user"
                        src={require("../../assets/icons/glyph_undefined.png")}
                        className={
                            activeLink === "/Menu"
                                ? "active_bgc undefined icon-sidebar"
                                : "undefined icon-sidebar"
                        }
                    />
                </Link>
                <Link to="/">
                    <img
                        alt="my_user"
                        src={require("../../assets/icons/message.png")}
                        className={
                            activeLink === "/"
                                ? "active_bgc message icon-sidebar"
                                : "message icon-sidebar"
                        }
                    />
                </Link>
            </div>

            <div className="status-bar-profile cursor_pointer">
                <div
                    onClick={() => {
                        setOpen3(true);
                        setOpen3(!isOpen3);
                    }}
                >
                    <img
                        src={require("../../assets/icons/notifications.png")}
                        className="notifica-icon"
                        // className={
                        //     activeLink === "/Analytics"
                        //         ? "active_bgc Frame icon-sidebar"
                        //         : "Frame icon-sidebar"
                        // }
                    />
                </div>
                <div
                    onClick={() => {
                        setOpen(!isOpen);
                        setOpen2(false);
                        setOpen4(false);
                    }}
                >
                    <img
                        src={require("../../assets/icons/user.png")}
                        className="user"
                    />
                </div>

                {isOpen && (
                    <div className={isOpen ? "profile-popup" : "visible"}>
                        <div
                            className="pop_bottom_border pop_up_options"
                            onClick={() => {
                                setOpen(false);
                                setOpen4(true);
                            }}
                        >
                            <img
                                src={user_logo}
                                alt="user-logo"
                                className="status-logo"
                            />
                            <div
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <div className="popup_details">
                                    <p className="statusbar-popup-name">
                                        Sunil Sharma
                                    </p>
                                    <p className="popup-email">
                                        abc123@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                setOpen(false);
                                setOpen2(true);
                            }}
                            className="pop_bottom_border  pop_up_options cursor_pointer"
                        >
                            <img
                                src={change}
                                alt="user-logo"
                                className="status-logo "
                            />
                            <p className="statusbar-popup-name popup_details">
                                Change password
                            </p>
                        </div>
                        <div className=" pop_up_options cursor_pointer">
                            <img
                                src={logout}
                                alt="user-logo"
                                className="status-logo"
                            />
                            <p className="statusbar-popup-name popup_details">
                                Logout
                            </p>
                        </div>
                    </div>
                )}

                {isOpen2 && (
                    <div
                        className={
                            isOpen2
                                ? "profile-popup-2"
                                : "visible cursor_pointer"
                        }
                    >
                        <p className="input-pass-head">Password Settings</p>
                        <>
                            <label
                                className="input-pass-label"
                                htmlFor="emailInput"
                            >
                                Old Password
                            </label>
                            <input type="text" className="input-pass" />
                        </>
                        <>
                            <label
                                className="input-pass-label"
                                htmlFor="passwordInput"
                            >
                                New Password
                            </label>
                            <input type="password" className="input-pass" />
                        </>
                        <button
                            onClick={() => setOpen2(false)}
                            className="update-pass cursor_pointer"
                        >
                            Update Password
                        </button>
                    </div>
                )}

                {isOpen3 && (
                    <div
                        className={
                            isOpen3 ? "Notification" : "visible cursor_pointer"
                        }
                    >
                        <div className="notification-list">
                            <h3>Notification</h3>
                            <h4>Only show unread</h4>
                            <ReactSwitch
                                onChange={handleChange}
                                checked={checked}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                className="switch"
                                width="24px"
                                height="15px"
                                handleDiameter="29px"
                                uncheckedHandleIcon={false}
                                checkedHandleIcon={false}
                            />

                            <h4>Mark all as read</h4>
                        </div>

                        <div className="not">
                            {Array.from({ length: 20 }).map((item) => (
                                <div className="notification">
                                    <div className="not-text">
                                        ORDER <span>RECEIVED</span>: Table No
                                        <h1>1</h1>
                                    </div>
                                    <div className="not-view">View Order</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {isOpen4 && (
                    <div
                        className={
                            isOpen4 ? "Profile" : "visible cursor_pointer"
                        }
                    >
                        <div className="user-profile">
                            <div className="">
                                <h2>Update Profile</h2>
                                <div>
                                    <img
                                        src={require("../../assets/icons/entypo_user.png")}
                                        className="user-icon"
                                    />
                                    <img
                                        src={require("../../assets/icons/solar_camera-bold.png")}
                                        className="camera-icon"
                                    />
                                </div>
                                <h3>Personal Details</h3>

                                <div className="inputs">
                                    <label>Name</label>
                                    <input
                                        className="name-input"
                                        placeholder="Sunil Sharma"
                                    />
                                </div>
                                <div className="inputs">
                                    <label>Phone No.</label>
                                    <input
                                        className="name-input"
                                        placeholder="+91 9898989898"
                                    />
                                </div>
                                <div className="inputs">
                                    <label>Email</label>
                                    <input
                                        className="name-input"
                                        placeholder="abc123@gmail.com"
                                    />
                                </div>

                                <button
                                    // onClick={() => {
                                    //     setOpen5(true);
                                    //     setOpen5(setOpen5);
                                    // }}
                                    onClick={openDialog}
                                >
                                    <div> Generate QR Set</div>
                                    <img
                                        src={require("../../assets/icons/right.png")}
                                        className="right-icon"
                                    />
                                </button>

                                <h3>Password Settings</h3>

                                <div className="inputs">
                                    <label>Old Password</label>
                                    <input className="name-input" />
                                </div>
                                <div className="inputs">
                                    <label>New Password</label>
                                    <input className="name-input" />
                                </div>
                                <button>
                                    <div>Update Password</div>
                                </button>
                            </div>

                            <QrCode
                                closePopup={closeDialog}
                                codeRef={dialogRef}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatusBar;

//  <button onClick={() => setOpen4(false)} className="update-pass cursor_pointer">
//      Update Password
//  </button>;
