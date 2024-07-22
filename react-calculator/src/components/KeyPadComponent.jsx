import React from 'react';
import PropTypes from 'prop-types';

const KeyPadComponent = ({ onClick }) => {
    const symbolButtons = ['(', ')', 'CE', 'C', '/', '*', '-', '+', '=', '.'];
    const numberButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

    return (
        <div>
            <div className="button-group symbols">
                {symbolButtons.map((button, index) => (
                    <button
                        key={index}
                        name={button}
                        onClick={e => onClick(e.target.name)}
                    >
                        {button}
                    </button>
                ))}
            </div>
            <div className="button-group numbers">
                {numberButtons.map((button, index) => (
                    <button
                        key={index}
                        name={button}
                        onClick={e => onClick(e.target.name)}
                    >
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
};

KeyPadComponent.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default KeyPadComponent;
