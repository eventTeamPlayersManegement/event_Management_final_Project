import React from "react";
import data from "../../content/data.json";
import "./style.scss";
export default function () {
    const { h1, h2, paragraph } = data.payment;
    return (
        <>
            <h1 className="page-title">{h1}</h1>
            <p className="page-paragraph">{paragraph[0]}</p>
            <p className="page-paragraph">
                {paragraph[1]}: {paragraph[2]}
            </p>
            <br></br>
            <h2 className="page-title">{h2}</h2>
            <p className="page-paragraph">{paragraph[3]}</p>

            <p className="page-paragraph">{paragraph[4]}</p>
        </>
    );
}
