import React, { useState } from "react";

export default function Invoice() {
    const [survey, setSurvey] = useState(
        JSON.parse(localStorage.getItem("onSubmitHandler") || {})
    );
    // useEffect(() => {
    //     let newdata = JSON.parse(localStorage.getItem("onSubmitHandler"));
    //     console.log(newdata);
    // }, []);

    return (
        <div>
            <p>{survey?.category}</p>
            <p>{survey?.location}</p>
            <p>{survey?.date}</p>
            <p>{survey?.guestNumber}</p>
            <p>{survey?.outIndoor}</p>
            <p>{survey?.entertainment}</p>
        </div>
    );
}
