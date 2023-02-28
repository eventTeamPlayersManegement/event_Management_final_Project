import React from "react";
import data from "../../content/data.json";
import "./style.scss";

export default function () {
    const { h2, paragraph } = data.invoice;
    return (
        <>
            <h2>{h2}</h2>
            <div>
                <p>test{paragraph[0]}</p>
            </div>
        </>
    );
}
