import React, { useState } from "react";
import "./Otp.css";

import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";

const Otp = () => {
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

    const [otp, setOtp] = useState("");

    return (
        <div className="Otp">
            <img src={logo} className="logo" alt="logo" />
            <h1 className="head-admin">Almost there </h1>
            <div className="head-text">
                Please enter the 6-digit code sent to your email
                <span> mobile number</span>
                for verification.
            </div>

            <div>
                <OTPInput
                    className="otp-input"
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    // renderSeparator={<span>-</span>}
                    renderInput={(props) => (
                        <input {...props} className="otp-input" />
                    )}
                />
            </div>
            <button
                className="login-btn cursor_pointer"
                onClick={() => navigate("/")}
            >
                Verify
            </button>
            <div className="otp-resend">
                <div>Didn’t receive any code? </div>
                <a>Resend Again</a>
            </div>
            <div className="otp-time">Request new code in 00:30s</div>
        </div>
    );
};

export default Otp;
