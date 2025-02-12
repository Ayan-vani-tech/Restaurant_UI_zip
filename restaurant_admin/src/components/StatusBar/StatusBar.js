import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./StatusBar.css";

import menu from "../../assets/icons/darkmenu.png";
import user from "../../assets/icons/user.png";
import graph from "../../assets/icons/graph.png";
import user_logo from "../../assets/icons/user_logo.png";
import logout from "../../assets/icons/logout.png";
import change from "../../assets/icons/change.png";

const StatusBar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isOpen2, setOpen2] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const location = useLocation();

    useEffect(() => {
        // Update the activeLink state based on the current route
        const pathname = location.pathname;
        console.log(pathname);
        setActiveLink(pathname);
    }, [location]);

    return (
        <div className="sidebar">
            <div>
                <Link to="/Admin">
                    <img
                        alt="my_user"
                        src={require("../../assets/icons/Frame.png")}
                        className={
                            activeLink === "/Admin"
                                ? "active_bgc Frame icon-sidebar"
                                : "Frame icon-sidebar"
                        }
                    />
                </Link>
                <Link to="/Reviews">
                    <img
                        alt="my_user"
                        src={require("../../assets/icons/undefined.png")}
                        className={
                            activeLink === "/Reviews"
                                ? "active_bgc graph icon-sidebar"
                                : "graph icon-sidebar"
                        }
                    />
                </Link>
                <Link to="/DisReview">
                    <img
                        alt="my_user"
                        src={require("../../assets/icons/glyph_undefined.png")}
                        className={
                            activeLink === "/DisReview"
                                ? "active_bgc undefined icon-sidebar"
                                : "undefined icon-sidebar"
                        }
                    />
                </Link>
                <Link to="">
                    <img
                        alt="my_user"
                        src={require("../../assets/icons/message.png")}
                        className={
                            activeLink === ""
                                ? "active_bgc message icon-sidebar"
                                : "message icon-sidebar"
                        }
                    />
                </Link>
                <Link to="/">
                    <img
                        alt="my_user"
                        className={
                            activeLink === "/"
                                ? "active_bgc menu icon-sidebar"
                                : "menu icon-sidebar"
                        }
                        src={menu}
                    />
                </Link>
                <Link to="/restraunts">
                    <img
                        alt="my_user"
                        src={graph}
                        className={
                            activeLink === "/restraunts"
                                ? "active_bgc menu icon-sidebar"
                                : "menu icon-sidebar"
                        }
                    />
                </Link>
            </div>
            <div className="status-bar-profile cursor_pointer">
                <div
                    onClick={() => {
                        setOpen(!isOpen);
                        setOpen2(false);
                    }}
                >
                    <img
                        alt="my_user"
                        src={user}
                        className="user icon-sidebar"
                    />
                </div>
                {isOpen && (
                    <div className={isOpen ? "profile-popup" : "visible"}>
                        <div className="pop_bottom_border pop_up_options">
                            <img
                                src={user_logo}
                                alt="user-logo"
                                className="status-logo"
                            />
                            <Link
                                to="/login"
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
                            </Link>
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
            </div>
        </div>
    );
};

export default StatusBar;
