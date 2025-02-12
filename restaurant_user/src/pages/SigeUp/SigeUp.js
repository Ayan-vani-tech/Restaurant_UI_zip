import React, { useState } from "react";
import "./SigeUp.css";

import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const SigeUp = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    // Event handler for input changes
    const handleInputChange = (fieldName, value) => {
        setForm((prevForm) => ({
            ...prevForm,
            [fieldName]: value,
        }));
    };

    return (
        <div className="sige-up">
            <div className="sigeup">
                <img src={logo} className="logo" />
                <h1 className="head-admin">Sign Up</h1>
            </div>
            <div>
                <img
                    src={require("../../assets/icons/state-line.png")}
                    className="state-line-icon"
                />
            </div>
            <div className="sigeUp-input">
                <div className="input-type">
                    <div className="input-table">
                        <label className="input-label" htmlFor="emailInput">
                            Name Of Restaurant
                        </label>
                        <input
                            type="text"
                            id="emailInput"
                            placeholder="Eg. Pizza House"
                            className="input-name"
                        />
                    </div>
                    <div className="input-table">
                        <label className="input-label" htmlFor="emailInput">
                            Name Of Owner
                        </label>
                        <input
                            type="text"
                            id="emailInput"
                            placeholder="Eg. Rahul"
                            className="input-name"
                        />
                    </div>
                </div>

                <div className="input-table">
                    <label className="input-label" htmlFor="emailInput">
                        Email
                    </label>
                    <input
                        type="text"
                        id="emailInput"
                        placeholder="example@gmail.com"
                        className="input"
                        value={form.email}
                        onChange={(e) =>
                            handleInputChange("email", e.target.value)
                        }
                    />
                </div>

                <div className="input-type">
                    <div className="input-table">
                        <label className="input-label" htmlFor="emailInput">
                            Mobile Numer
                        </label>
                        <input
                            type="text"
                            id="emailInput"
                            placeholder="+91-"
                            className="input-name"
                        />
                    </div>
                    <div className="input-table">
                        <label className="input-label" htmlFor="emailInput">
                            GSTIN Number
                        </label>
                        <input
                            type="text"
                            id="emailInput"
                            placeholder="Eg. GFDSG8732873"
                            className="input-name"
                        />
                    </div>
                </div>

                <div div className="input-table">
                    <label className="input-label" htmlFor="passwordInput">
                        Address
                    </label>
                    <input
                        placeholder="Eg. B-78, Laxmi Nagar"
                        className="input"
                    />
                    <img
                        src={require("../../assets/icons/location.png")}
                        className="location-icon"
                    />
                </div>

                <div className="input-type">
                    <div className="input-table">
                        <label className="input-label" htmlFor="emailInput">
                            City
                        </label>
                        <input
                            type="text"
                            id="emailInput"
                            placeholder="Eg. New Delhi"
                            className="input-name"
                        />
                    </div>
                    <div className="input-table">
                        <label className="input-label" htmlFor="emailInput">
                            Pincode
                        </label>
                        <input
                            type="text"
                            id="emailInput"
                            placeholder="Eg. 120034"
                            className="input-name"
                        />
                    </div>
                </div>

                <button
                    className="login-btn cursor_pointer"
                    onClick={() => navigate("/Otp")}
                >
                    LOG IN
                </button>
            </div>
        </div>
    );
};

export default SigeUp;
