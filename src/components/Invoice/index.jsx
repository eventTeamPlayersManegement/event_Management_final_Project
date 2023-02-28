import React from "react";
import data from "../../content/data.json";
import "./style.scss";

export default function () {
    const { h2, paragraph } = data.invoice;
    let names = paragraph.map((el) => (
        <li key={el.name} className="list-item">
            {el.name} {el.name}
        </li>
    ));
    // let money = costs.map((el) => (
    //     <li key={el} className="list-item">
    //         {el}
    //     </li>
    // ));
    return (
        <section>
            <h2 className="heading">{h2[0]}</h2>
            <article className="article-invoice">
                <h3>{h2[1]}</h3>
                <ul>{names}</ul>
                {/* <ul>{money}</ul> */}
            </article>
        </section>
    );
}
