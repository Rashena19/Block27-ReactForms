import React from "react";
import { useState } from "react";

const Authenticate = ({ token, setUsername }) => {
    const [message, setMessage] = useState({ success: null, error: null });

    const handleClick = async () => {
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });

            const result = await response.json();
            setMessage({ success: result.message, error: null });
            console.log(result);
        } catch (err) {
            setMessage({ succes: null, error: err.message });
        }
    };

    return (
        <div>
            <h2>Authenticate!</h2>
            {message.success && <p>{message.success}</p>}
            {message.error && <p>{message.error}</p>}
            <button onClick={handleClick}>Authenticate!</button>
        </div>
    );
};

export default Authenticate;