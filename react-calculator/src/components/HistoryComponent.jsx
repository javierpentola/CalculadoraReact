import React from 'react';
import "xp.css/dist/XP.css";


const HistoryComponent = ({ history }) => {
    return (
        <div className="history">
            <h3>History</h3>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default HistoryComponent;
