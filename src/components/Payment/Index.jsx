import React from "react";
import data from "../../content/data.json";
export default function () {
    return (
        <>
            <h1>{data.payment.h1}</h1>
            <p>{data.payment.paragraph[0]}</p>
            <p>
                {data.payment.paragraph[1]}: {data.payment.paragraph[2]}
            </p>
            <br></br>
            <h2>{data.payment.h2}</h2>
            <p>{data.payment.paragraph[3]}</p>

            <p>{data.payment.paragraph[4]}</p>
        </>
    );
}
