import React, { useEffect, useState } from "react";

export default function Invoice() {
    const [survay, setSurvay] = useState(
        JSON.parse(localStorage.getItem("onSubmitHandler"))
    );
    useEffect(() => {
        let newdata = JSON.parse(localStorage.getItem("onSubmitHandler"));
        console.log(newdata);
    }, []);

    return <div>{survay.category}</div>;
}
Invoice();
