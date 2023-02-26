import React from "react";
import data from "../../content/data.json";
import "./style.scss";

export default function ({ label }) {
    return (
        <>
            <div className="Button-container">
                <button className="Button">{label}</button>
            </div>
        </>
    );
}
