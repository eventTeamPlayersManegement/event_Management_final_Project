import React, { useEffect } from "react";

export default function Invoice() {
    useEffect(() => {
        let newdata = JSON.parse(localStorage.getItem("onSubmitHandler"));
        console.log(newdata);
    }, []);

    return <div>newdata</div>;
}
