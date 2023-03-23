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
            <p>{survey?.select1}</p>
            <p>{survey?.select2}</p>
            <p>{survey?.select4}</p>
            <p>{survey?.select5}</p>
            <p>{survey?.select6}</p>
            <p>{survey?.guestNumber}</p>
            <p>{survey?.budget}</p>
            <p>{survey?.catering}</p>
            <p>{survey?.rentCar}</p>
            <p>{survey?.photographer}</p>
        </div>
    );
}
