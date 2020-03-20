import React from 'react';
import './Button.css';

const Button = ({title, onClick, loading}) => {
    if (loading) {
        return (
            <button className="disable">
                <span className="buttonTitle">Loading...</span>
            </button>
        )
    }
    return (
        <button className="buttonActive" onClick={onClick}>
            <span className="buttonTitle">{title}</span>
        </button>
    )
}

export default Button;