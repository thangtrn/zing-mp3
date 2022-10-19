import { useRef } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, id = "react-portal" }) => {
    const elWrapper = useRef(
        document.getElementById(id) || document.createElement("div")
    );

    elWrapper.current.setAttribute("id", id);
    document.body.appendChild(elWrapper.current);

    return createPortal(children, document.getElementById(id));
};

export default Portal;
