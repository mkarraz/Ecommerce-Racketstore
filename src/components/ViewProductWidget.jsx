import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineEye } from "react-icons/ai";

const ViewProductWidget = () => {
    return (
        <IconContext.Provider value={{ size: 15 }}>
            <AiOutlineEye/>
        </IconContext.Provider>
    )
}

export default ViewProductWidget