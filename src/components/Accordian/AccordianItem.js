import "./Accordian.css"
import React, { useState } from "react"
export default function AccordianItem(props) {
    const [show, setShow] = useState(false);
    const handleOpen = () => {
        setShow(!show); // Toggle accordion
    };
    return(
        <div>
            <div className="question" onClick={handleOpen}>
                <div>{props.question}</div>
                <div className="sign">{show ? '-' : '+'}</div>
            </div>
            {show && (
                <div>
                <p className="answer">{props.answer}</p>
                </div>
            )} 
        </div>
    )
}