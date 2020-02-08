import React from 'react';
import { Icon } from 'antd';
import './style.scss';

const styleIcon = {
    fontSize: "2em",
    color: "white",
}
const Modal = ({children, handleClick}) => {
    return (
        <div className="modal">
            <Icon
                type="close-circle"
                className="modal__close-button"
                style={styleIcon}
                onClick={() => handleClick(false)}
            />
            {children}
        </div>
    )
}

export default Modal;